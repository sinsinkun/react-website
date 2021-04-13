import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PopoutDemo from './Popout';
import ReactiveDemo from './Reactive';
import DragDemo from './Drag';
import './demos.css';
import NoDemo from './NoDemo';

function MainDisplay() {

  const loc = useLocation();
  const [demo, setDemo] = useState("none");

  useEffect(() => {
    let newDemo = loc.pathname.replace("/demos/","");
    if (newDemo.includes("/demos")) newDemo = "none";
    setDemo(newDemo);
  }, [loc])

  function renderDemo() {
    if (demo === "none") return <NoDemo />;
    else if (demo === "popout") return <PopoutDemo />;
    else if (demo === "reactive") return <ReactiveDemo />;
    else if (demo === "dragdrop") return <DragDemo />;
    else return <span>{demo} demo coming soon...</span>;
  }

  return(
    <div className="projects-main">
      {renderDemo()}
    </div>
  )
}

export default MainDisplay;