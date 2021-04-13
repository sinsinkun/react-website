import { useCallback, useEffect, useRef, useState } from 'react';
import { useStoreContext } from '../GlobalStore';

// non-render essential variables
let initMouseX = 0;
let initWidth = 0;

function ReactiveDemo () {

  const [store] = useStoreContext();
  const [width, setWidth] = useState(store.winX/1.5);
  const [gridCol, setGridCol] = useState("1fr 1fr 1fr 1fr");
  const handle = useRef(null);
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    if (store.winX > 980 ) setWidth(store.winX/1.5);
    else setWidth(store.winX/1.2);
  }, [store.winX])

  useEffect(() => {
    if (width > 600) setGridCol("1fr 1fr 1fr 1fr");
    else if (width > 400) setGridCol("1fr 1fr");
    else setGridCol("1fr");
  }, [width])

  useEffect(() => {
    // if drag changed to true, add event listeners
    if (drag) {
      console.log(window);
      window.addEventListener('mousemove', trackMouse);
      window.addEventListener('mouseup', removeTrack);
    }
    // if drag changed to false, remove event listeners
    else {
      window.removeEventListener('mousemove', trackMouse);
      window.removeEventListener('mouseup', removeTrack);
    }
    // eslint-disable-next-line
  }, [drag])

  // useCallback saves the "id" of the function on re-renders
  const trackMouse = useCallback((e) => { 
    let deltaX = e.clientX - initMouseX;
    // min width 250px
    if (initWidth + deltaX > 250) setWidth(initWidth + deltaX); 
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
          This container's size can also be modified using the handle on the right (if you are
          viewing this page on a PC). The squares below will adjust their positioning and size
          based on the size of the container. This demo is best viewed on a PC.
        </p>
        <br/>
        <div className="demo-row" style={{gridTemplateColumns:gridCol}}>
          <div className="demo-sqr"></div>
          <div className="demo-sqr"></div>
          <div className="demo-sqr"></div>
          <div className="demo-sqr"></div>
        </div>
      </div>
      <div className="demo-handle" ref={handle} 
        onMouseDown={(e)=>{ initMouseX=e.clientX; initWidth=width; setDrag(true) }}>
        .<br/>.<br/>.
      </div>
    </div>
  )
}

export default ReactiveDemo;