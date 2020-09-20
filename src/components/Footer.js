import React from 'react';
import '../css/App.css';

function onClick() {
  window.scrollTo(0,0);
}

function Footer(props) {

  return (
    <div className = 'footer'>
      <p></p>
      <p>Site in progress</p>
      <button onClick={onClick}>Back to Top</button>
    </div>
  );
}

export default Footer;