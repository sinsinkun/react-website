import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../css/Demo1.css';

function Demo1() {

  const [piece1Pos, setPiece1Pos] = useState({x:30, y:250, flipped:false})
  const [piece2Pos, setPiece2Pos] = useState({x:30, y:340, flipped:false})
  const [piece3Pos, setPiece3Pos] = useState({x:110, y:200, flipped:false})
  const [piece4Pos, setPiece4Pos] = useState({x:110, y:290, flipped:false})
  const [piece5Pos, setPiece5Pos] = useState({x:110, y:380, flipped:false})
  const [piece6Pos, setPiece6Pos] = useState({x:190, y:250, flipped:false})
  const [piece7Pos, setPiece7Pos] = useState({x:190, y:340, flipped:false})

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
              setPieceList[i]({x: placementSpots[j].x, y: 90, flipped:true})
              foundPlacement = true;
            }
          }
          if (!foundPlacement) setPieceList[i]({x: d.x, y: d.y, flipped:false})
        }
        else setPieceList[i]({x: d.x, y: d.y, flipped:false})
      }
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
        <div id='p0' className={piece1Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece1Pos.flipped ? '' : '\u265A'}
        </div>
      </Draggable>
      <Draggable position={piece2Pos} positionOffset={{x:0,y:-260}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p1' className={piece2Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece2Pos.flipped ? '' : '\u265C'}
        </div>
      </Draggable>
      <Draggable position={piece3Pos} positionOffset={{x:0,y:-340}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p2' className={piece3Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece3Pos.flipped ? '' : '\u265E'}
        </div>
      </Draggable>
      <Draggable position={piece4Pos} positionOffset={{x:0,y:-420}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p3' className={piece4Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece4Pos.flipped ? '' : '\u2660'}
        </div>
      </Draggable>
      <Draggable position={piece5Pos} positionOffset={{x:0,y:-500}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p4' className={piece5Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece5Pos.flipped ? '' : '\u2663'}
        </div>
      </Draggable>
      <Draggable position={piece6Pos} positionOffset={{x:0,y:-580}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p5' className={piece6Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece6Pos.flipped ? '' : '\u2665'}
        </div>
      </Draggable>
      <Draggable position={piece7Pos} positionOffset={{x:0,y:-660}}
        bounds={{left:0,top:0,right:640,bottom:400}} onStop={onStop}>
        <div id='p6' className={piece7Pos.flipped ? 'hex flipped' : 'hex'}>
          {piece7Pos.flipped ? '' : '\u2666'}
        </div>
      </Draggable>
	  </div>
  )
}

export default Demo1;