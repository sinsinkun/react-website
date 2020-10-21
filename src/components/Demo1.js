import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../css/Demo1.css';

function Demo1() {

  const [piece1Pos, setPiece1Pos] = useState({x:30, y:250})
  const [piece2Pos, setPiece2Pos] = useState({x:30, y:340})
  const [piece3Pos, setPiece3Pos] = useState({x:110, y:200})
  const [piece4Pos, setPiece4Pos] = useState({x:110, y:290})
  const [piece5Pos, setPiece5Pos] = useState({x:110, y:380})
  const [piece6Pos, setPiece6Pos] = useState({x:190, y:250})
  const [piece7Pos, setPiece7Pos] = useState({x:190, y:340})

  const onStop = (e, d) => {
    const setPieceList = [setPiece1Pos, setPiece2Pos, setPiece3Pos, 
      setPiece4Pos, setPiece5Pos, setPiece6Pos, setPiece7Pos];
    const placementSpots = [{x:11, y:90}, {x:114, y:90}, {x:217, y:90},
      {x:320, y:90}, {x:423, y:90}, {x:526, y:90}, {x:629, y:90}]
    
    for (let i=0; i<7; i++) {
      if (e.target.id === `p${i}`) {
        //snap to placement spots
        if (d.y > 70 && d.y < 110) {
          let foundPlacement = false;
          for (let j=0; j<7; j++) {
            if ( d.x > placementSpots[j].x - 30 && d.x < placementSpots[j].x + 30) {
              setPieceList[i]({x: placementSpots[j].x, y: 90})
              foundPlacement = true;
            }
          }
          if (!foundPlacement) setPieceList[i]({x: d.x, y: d.y})
        }
        else setPieceList[i]({x: d.x, y: d.y})
      }
      else console.log('drag error');
    }
  }

  return (
    <div className='demo1-container'>
      <div style={{height:'80px'}}/>
		  <div className='flipstrip'>
        <div className = 'placementSpot' />
        <div className = 'placementSpot' />
        <div className = 'placementSpot' />
        <div className = 'placementSpot' />
        <div className = 'placementSpot' />
        <div className = 'placementSpot' />
        <div className = 'placementSpot' />
      </div>
      <Draggable position={piece1Pos} positionOffset={{x:0,y:-180}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p0' className='hex' style={{backgroundColor:'rgb(20,200,200)'}}>
          {`x: ${piece1Pos.x} y: ${piece1Pos.y}`}
        </div>
      </Draggable>
      <Draggable position={piece2Pos} positionOffset={{x:0,y:-260}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p1' className='hex' style={{backgroundColor:'rgb(200,20,200)'}}>
          {`x: ${piece2Pos.x} y: ${piece2Pos.y}`}
        </div>
      </Draggable>
      <Draggable position={piece3Pos} positionOffset={{x:0,y:-340}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p2' className='hex' style={{backgroundColor:'rgb(200,200,20)'}}>
          {`x: ${piece3Pos.x} y: ${piece3Pos.y}`}
        </div>
      </Draggable>
      <Draggable position={piece4Pos} positionOffset={{x:0,y:-420}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p3' className='hex' style={{backgroundColor:'rgb(20,100,100)'}}>
          {`x: ${piece4Pos.x} y: ${piece4Pos.y}`}
        </div>
      </Draggable>
      <Draggable position={piece5Pos} positionOffset={{x:0,y:-500}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p4' className='hex' style={{backgroundColor:'rgb(100,20,100)'}}>
          {`x: ${piece5Pos.x} y: ${piece5Pos.y}`}
        </div>
      </Draggable>
      <Draggable position={piece6Pos} positionOffset={{x:0,y:-580}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p5' className='hex' style={{backgroundColor:'rgb(100,100,20)'}}>
          {`x: ${piece6Pos.x} y: ${piece6Pos.y}`}
        </div>
      </Draggable>
      <Draggable position={piece7Pos} positionOffset={{x:0,y:-660}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p6' className='hex' style={{backgroundColor:'rgb(100,200,100)'}}>
          {`x: ${piece7Pos.x} y: ${piece7Pos.y}`}
        </div>
      </Draggable>
	  </div>
  )
}

export default Demo1;