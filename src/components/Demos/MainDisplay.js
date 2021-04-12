import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PopoutDemo from './Popout';
import './demos.css';

function MainDisplay() {

  const loc = useLocation();
  const [demo, setDemo] = useState("none");

  useEffect(() => {
    let newDemo = loc.pathname.replace("/demos/","");
    if (newDemo.includes("/demos")) newDemo = "none";
    setDemo(newDemo);
  }, [loc])

  function renderDemo() {
    if (demo === "none") return(
      <span>
        Click on any of the demos on the sidebar to view them <br/> 
        &lt;--- <br/>
        This page is still a work in progress, so not all demos are available yet.
      </span>);
    else if (demo === "popout") return <PopoutDemo />;
    else return <span>{demo} demo coming soon...</span>;
  }

  return(
    <div className="projects-main">
      {renderDemo()}
    </div>
  )
}

export default MainDisplay;