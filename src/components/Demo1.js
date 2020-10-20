import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import '../css/Demo1.css';

function Demo1(props) {

  const containerRef = useRef();
  const [piece1Pos, setPiece1Pos] = useState({x:0, y:0})
  const [piece2Pos, setPiece2Pos] = useState({x:0, y:0})

  return (
    <div className='demo1-container' ref={containerRef}>
      <div style={{height:'120px'}}/>
		  <div className='flipstrip' />
      <Draggable defaultPosition={{x:0, y:5}} bounds='.demo1-container'>
        <div className='hex'>{`x: ${piece1Pos.x} y: ${piece1Pos.y}`}</div>
      </Draggable>
      <Draggable defaultPosition={{x:85, y:-75}} bounds='.demo1-container'>
        <div className='hex'>{`x: ${piece2Pos.x} y: ${piece2Pos.y}`}</div>
      </Draggable>
	  </div>
  )
}

export default Demo1;