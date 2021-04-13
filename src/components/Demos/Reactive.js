import { useCallback, useEffect, useRef, useState } from 'react';
import { useStoreContext } from '../GlobalStore';

function ReactiveDemo () {

  const [store] = useStoreContext();
  const [width, setWidth] = useState(store.winX/1.5);
  const handle = useRef(null);
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    if (store.winX > 980 ) setWidth(store.winX/1.5);
    else setWidth(store.winX/1.2);
  }, [store.winX])

  useEffect(() => {
    // if drag changed to true, add event listeners
    if (drag) {
      console.log("adding listeners");
      window.addEventListener('mousemove', trackMouse);
      window.addEventListener('mouseup', removeTrack);
    }
    // if drag changed to false, remove event listeners
    else {
      console.log("removing listeners");
      window.removeEventListener('mousemove', trackMouse);
      window.removeEventListener('mouseup', removeTrack);
    }
    // eslint-disable-next-line
  }, [drag])

  // useCallback saves the "id" of the function on re-renders
  const trackMouse = useCallback((e) => { 
    if (width > 250) setWidth(prev => prev + e.movementX);
    else setWidth(250);
    // eslint-disable-next-line
  }, []);
  const removeTrack = useCallback(() => { setDrag(false) }, []);

  return(
    <div className="demo-container" style={{ width:width }}>
      <div className="demo-exp">
        <h4>Reactive layout</h4>
        <p>
          Reactive layout means that the placement of HTML elements on the screen changes
          based on the screensize of the device that is being used to view it. For example,
          the visible portion of the sidebar on this page and the navigation menu above will
          change, depending on whether you are viewing this page on a phone or a desktop PC.
        </p>
        <p>
          ...
        </p>
      </div>
      <div className="demo-handle" ref={handle} onMouseDown={() => setDrag(true)} >
        .<br/>.<br/>.
      </div>
    </div>
  )
}

export default ReactiveDemo;