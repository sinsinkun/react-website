import React, { useState, useRef } from 'react';
import '../css/ScrollableBio.css'

function ScrollableBio() {

  const [shownPage, setShownPage] = useState(page1);
  const mainDiv = useRef();
  const pageList = [page1, page2, page3];

  const navHandle = (btn) => {
    const curPage = btn.id;
    [...mainDiv.current.getElementsByTagName('button')].forEach((btn) => {
      if (btn.id === curPage) btn.className = 'button-clicked';
      else btn.className = '';
    })
    setShownPage(pageList[curPage]);
  }

  return (
    <div className = 'scrollable-container' ref={mainDiv}>
      <ul className = 'scroll-nav'>
        <button id = '0' className = 'button-clicked' onClick = {(e) => navHandle(e.target)} />
        <button id = '1' onClick = {(e) => navHandle(e.target)} />
        <button id = '2' onClick = {(e) => navHandle(e.target)} />
      </ul>
      <div className = 'scroll-main'>
        {shownPage.info}
      </div>
    </div>
  )
}

const page1 = {pageNum:1, info:(
  <div>
    <h3>Education</h3>
    <table cellSpacing='0'>
      <th colSpan='2'><p>University of Toronto</p></th>
      <tr>
        <td><p>Toronto, ON</p></td>
        <td><p>Sep 2012 - Apr 2017</p></td>
      </tr>
    </table>
    <p>Mechanical Engineering, Bachelors of Applied Science</p>
    <p>Specialization in Solids and Mechatronics</p>
    <div style={{height:'10px'}}/>
    <h3>Skills {'&'} Qualifications</h3>
    <table>
      <tr><p>- Experience working with C, C{'#'}, Javascript</p></tr>
      <tr><p>- Experience working with VSCode and Visual Studio</p></tr>
      <tr><p>- Experience working with git and github</p></tr>
      <tr><p>- Excellent oral and written communication skills (fluent in English)</p></tr>
      <tr><p>- Work well both independently and as part of a group</p></tr>
      <tr><p>- Quick learner, easily capable of picking up new information</p></tr>
      <tr><p>- Experience with project management software (e.g. Solidworks PDM, CATIA 3DE)</p></tr>
      <tr><p>- Highly proficient in Solidworks and AutoCAD</p></tr>
      <tr><p>- Very familiar with Microsoft Office</p></tr>
    </table>
  </div>
)}

const page2 = {pageNum:2, info:(
  <div>
    <h3>Professional Experience</h3>
    <table cellSpacing='0'>
      <th colSpan='2'><p>Design Engineer</p></th>
      <tr>
        <td><p>Array Marketing</p></td>
        <td><p>July 2017 - Mar 2020</p></td>
      </tr>
    </table>
    <table>
      <tr><p>- Designed 3D display systems for use in retail environments with 
        considerations for ease of manufacturing/assembly, cost of materials, 
        assembly complexity, and overall aesthetics</p></tr>
      <tr><p>- Communicated with project managers and clients to ensure all 
        client requirements are met effectively and efficiently</p></tr>
      <tr><p>- Created detailed manufacturing and assembly instructions, as well 
        as BOMs for use in production and cost estimation</p></tr>
      <tr><p>- Worked together with department managers to improve department 
        workflow and efficiency</p></tr>
      <tr><p>- Worked together with model makers to create accurate prototypes 
        and resolve any potential issues</p></tr>
    </table>
    <div style={{height:'10px'}}/>
    <table cellSpacing='0'>
      <th colSpan='2'><p>Review Engineering Assistant</p></th>
      <tr>
        <td><p>Ministry of Environment and Climate Change</p></td>
        <td><p>Sep 2015 - Aug 2016</p></td>
      </tr>
    </table>
    <table>
      <tr><p>- Reviewed Environmental Compliance Approcal (ECA) Applications 
        for Noise</p></tr>
      <tr><p>- Drafted engineering assessments and ECA Certificates</p></tr>
      <tr><p>- Verified acoustic and vibration calculations submitted by 
        engineering consultants</p></tr>
      <tr><p>- Engaged in professional communications with engineering 
        consultants regarding their applications</p></tr>
    </table>
  </div>
)}

const page3 = {pageNum:3, info:(
  <div>
    <h3>Project Experience</h3>
    <table cellSpacing='0'>
      <th colSpan='2'><p>Project Lead {'&'} Front End Developer</p></th>
      <tr>
        <td><p>Flexible Upskilling Network (FUN) Program</p></td>
        <td><p>Aug 2020 - Sep 2020</p></td>
      </tr>
    </table>
    <table>
      <tr><p>- Assisted in the creation of a basic functional website 
        for a prescription tracker application using ReactJS</p></tr>
      <tr><p>- Ensured team stayed on top of project deliverables and 
        deadlines</p></tr>
      <tr><p>- Initiated group discussions and distributed tasks to 
        team members</p></tr>
    </table>
    <div style={{height:'10px'}}/>
    <table cellSpacing='0'>
      <th colSpan='2'><p>Robotics Project Team Member</p></th>
      <tr>
        <td><p>Mechatronics Systems Course, University of Toronto</p></td>
        <td><p>Jan 2017 - Mar 2017</p></td>
      </tr>
    </table>
    <table>
      <tr><p>- Assisted in the design of pathing algorithm using proximity 
        based sensors</p></tr>
      <tr><p>- Assisted in the design of algorithm using laser sensors to 
        visually map an area</p></tr>
    </table>
  </div>
)}

export default ScrollableBio;