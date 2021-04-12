import { useRef } from 'react';
import { useStoreContext } from '../GlobalStore';
import { useHistory } from "react-router-dom";

function Sidebar() {

  const history = useHistory();
  const [store] = useStoreContext();
  const sideDiv = useRef(null);
  const invisBg = useRef(null);

  function goToDemo(demo) {
    history.push("/demos/" + demo);
  }

  function toggleSidebar() {
    if (sideDiv.current.classList.contains("hidden")) {
      sideDiv.current.classList.remove("hidden");
      invisBg.current.classList.remove("hidden");
    }
    else {
      sideDiv.current.classList.add("hidden");
      invisBg.current.classList.add("hidden");
    }
  }

  if (store.winX > 980) return(
    <div className="sidebar">
      <h2 className="sidebar-title">Demos</h2>
      {/* <input className="sidebar-search" placeholder="Search" /> */}
      <ul className="sidebar-btn-list">
        <li><button onClick={() => goToDemo("popout")}>Popout tabs</button></li>
        <li><button onClick={() => goToDemo("reactive")}>Reactive layouts</button></li>
        <li><button onClick={() => goToDemo("dragdrop")}>Drag and drop</button></li>
      </ul>
    </div>
  )
  else return(
    <>
    <div className="sidebar closed" onClick={toggleSidebar} >
    ❯❯
    </div>
    <div className="sidebar open hidden" ref={sideDiv} onClick={toggleSidebar}>
      <h2 className="sidebar-title">Demos</h2>
      {/* <input className="sidebar-search" placeholder="Search" /> */}
      <ul className="sidebar-btn-list">
        <li><button onClick={() => goToDemo("popout")}>Popout tabs</button></li>
        <li><button onClick={() => goToDemo("reactive")}>Reactive layouts</button></li>
        <li><button onClick={() => goToDemo("dragdrop")}>Drag and drop</button></li>
      </ul>
    </div>
    <div className="invis-bg hidden" ref={invisBg} onClick={toggleSidebar}></div>
    </>
  )
}

export default Sidebar;