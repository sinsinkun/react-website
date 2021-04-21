import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PopoutDemo from './Popout';
import ResponsiveDemo from './Responsive';
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
    else if (demo === "responsive") return <ResponsiveDemo />;
    else if (demo === "dragdrop") return <DragDemo />;
    else return <span>{demo} demo does not exist.</span>;
  }

  return(
    <div className="projects-main">
      {renderDemo()}
    </div>
  )
}

export default MainDisplay;