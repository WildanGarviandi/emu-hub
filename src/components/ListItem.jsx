import Image from "next/image";
import playIcon from '../assets/play.svg'
import stopIcon from '../assets/stop.svg'
import deleteIcon from '../assets/delete.svg'

function ListItem({ dirPath }) {
  return (
    <div className="container-list">
      <label className="label-emu">{dirPath}</label>
      <div className="row">
        <div id="btnAction" className="btn-play" onClick={() => alert("OBOO")}>
          <Image src={playIcon} />
        </div>
        <div id="btnAction" className="btn-stop" onClick={() => alert("OBOO")}>
          <Image src={stopIcon} />
        </div>
        <div id="btnAction" className="btn-delete" onClick={() => alert("OBOO")}>
          <Image src={deleteIcon} />
        </div>
      </div>

    </div>
  )
}

export default ListItem
