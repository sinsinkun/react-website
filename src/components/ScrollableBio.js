import React, { useState, useEffect, useRef} from 'react';
import '../css/ScrollableBio.css'

function ScrollableBio() {

  const [curPage, setCurPage] = useState(1);
  const mainDiv = useRef();

  useEffect(() => {
    [...document.getElementsByTagName('button')].forEach((btn) => {
      if (btn.id === curPage) btn.className = 'button-clicked';
      else btn.className = '';
    })
  }, [curPage])

  const navHandle = (btn) => {
    setCurPage(btn.id);
  }

  return (
    <div className = 'scrollable-container'>
      <ul className = 'scroll-nav'>
        <button id = '1' onClick = {(e) => navHandle(e.target)} />
        <button id = '2' onClick = {(e) => navHandle(e.target)} />
        <button id = '3' onClick = {(e) => navHandle(e.target)} />
      </ul>
      <div className = 'scroll-main' ref={mainDiv} >
        <div>
          <p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p>
          <p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p>
          <p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p>
          <p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p><p>Text</p>
        </div>
      </div>
    </div>
  )
}

export default ScrollableBio;