import { useRef, useState } from 'react';

function PopoutDemo() {

  const tabDiv = useRef(null);
  const [showTab, setShowTab] = useState(false);

  function toggleTab() {
    tabDiv.current.classList.toggle("hidden")
  }

  function toggleTab2() {
    setShowTab(prev => !prev);
  }

  return(
    <>
    <div className="demo-container">
      <div>
        <h4>CSS Implementation</h4>
        <p>
          This involves having a div element that is hidden via a special class,
          wherein the div is unhidden by modifying the div's class list. This is the classical approach
          to popout tabs with regards to plain HTML/JS.
        </p>
      </div>
      <br/>
      <button onClick={toggleTab}>Click to open tab</button>
      <div className="demo-tab hidden" ref={tabDiv}>Tab</div>
    </div>
    <div className="demo-container">
      <div>
        <h4>React Implementation</h4>
        <p>
          This involves having a state variable that tracks whether or not the tab
          is showing, and modifies the DOM itself to generate a new popout tab when that state is changed
          to true. This is only possible by taking advantage of react's virtual DOM system, which can 
          dynamically generate new HTML elements via state changes.
        </p>
      </div>
      <br/>
      <button onClick={toggleTab2}>Click to open tab</button>
      {showTab ? <div className="demo-tab">Tab</div> : "" }
    </div>
    </>
    
  )
}

export default PopoutDemo;