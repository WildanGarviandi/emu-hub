import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { open, message } from "@tauri-apps/api/dialog";
import { createDir, readTextFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import ListItem from "../components/ListItem";

function App({ storage }) {
  const [dirPath, setDirPath] = useState([])
  const [dirList, setDirList] = useState([])

  async function dirPickerChangeHandler() {
    const selected = await open({
      multiple: true,
      directory: true,
    });

    if (selected === null) {
      await message("Please select one folder to start")
      return
    }

    setDirPath(selected)
    console.log(selected)
    await writeTextFile('app.txt', 'file contents', { dir: BaseDirectory.AppData });
    await invoke("get_dir_list", { parentPath: selected[0] }).then((listDir) => setDirList(listDir))
  }

  return (
    <div className="container">
      <h1>Emulator Warehouse</h1>
      <h3>Manage your downloaded emulator here!</h3>

      <div className="row">
        <input id="emu-path"
          value={dirPath}
          onChange={(e) => setDirPath(e.target.value)}
          placeholder="No path defined to manage, put here your emu path" />
        <button onClick={dirPickerChangeHandler}>Browse</button>
      </div>

      {dirList.map(prod => {
        console.log(prod)
        return (
          <ListItem dirPath={prod}/>
        );
      })}
    </div>
  );
}

export default App;
