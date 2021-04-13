import { useState, useEffect, useCallback } from "react";

// non-render essential variables
let initCoord = {x:0, y:0};
let initClient = {x:0, y:0};
let finalCoord = {x:0, y:0};

function DragDemo() {

  const [coords, setCoords] = useState({x:125, y:125});
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    // if drag changed to true, add event listeners
    if (drag) {
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
    let newCoordX = initCoord.x + e.clientX - initClient.x;
    let newCoordY = initCoord.y + e.clientY - initClient.y;
    // restrict x
    if (newCoordX<0) newCoordX=0;
    else if (newCoordX>250) newCoordX=250;
    // restrict y
    if (newCoordY<0) newCoordY=0;
    if (newCoordY>250) newCoordY=250;
    // update target location
    finalCoord.x = Math.round(newCoordX /25)*25;
    finalCoord.y = Math.round(newCoordY /25)*25;
    setCoords({x:newCoordX, y:newCoordY}); 
  }, []);
  const removeTrack = useCallback(() => { 
    // snap square to grid
    setCoords({x:finalCoord.x, y:finalCoord.y});
    setDrag(false) 
  }, []);

  return(
    <div className="demo-container">
      <h4>Drag and Drop</h4>
      <p>
        This demo features a square that can be picked up and dropped anywhere within its container,
        which is achieved through event listeners. The position of the cursor is tracked, which is then
        used to calculate the position of the square, relative to its container. The square is also 
        configured to snap to the grid.
      </p>
      <div className="drag-grid">
        <div className="drag-piece" style={{transform:`translate(${coords.x}px, ${coords.y}px)`}}
          onMouseDown={(e) => { initClient={x:e.clientX, y:e.clientY}; initCoord=coords; setDrag(true); }}>
        </div>
      </div>
    </div>
  )
}

export default DragDemo;