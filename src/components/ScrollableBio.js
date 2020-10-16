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
    <p>Education</p>
    <p>University of Toronto</p><p>Toronto, ON</p>
    <p>Sep 2012 - Apr 2017</p>
    <p>Mechanical Engineering, Bachelors of Applied Science</p>
    <p>Specialization in Solids and Mechatronics</p>
    <p>{''}</p>
    <p>Skills {'&'} Qualifications</p>
    <p>- Experience working with C, C{'#'}, Javascript</p>
    <p>- Experience working with VSCode and Visual Studio</p>
    <p>- Experience working with git and github</p>
    <p>- Excellent oral and written communication skills (fluent in English)</p>
    <p>- Work well both independently and as part of a group</p>
    <p>- Quick learner, easily capable of picking up new information</p>
    <p>- Experience with project management software (e.g. Solidworks PDM, CATIA 3DE)</p>
    <p>- Very familiar with Microsoft Office</p>
  </div>
)}

const page2 = {pageNum:2, info:(
  <div>
    <p>Professional Experience</p>
    <p>Design Engineer</p><p>Array Marketing</p><p>July 2017 - Mar 2020</p>
    <p>- Designed 3D display systems for use in retail environments with considerations 
      for ease of manufacturing/assembly, cost of materials, assembly complexity, and 
      overall aesthetics</p>
    <p>- Communicated with project managers and clients to ensure all client requirements 
      are met effectively and efficiently</p>
    <p>- Created detailed manufacturing and assembly instructions, as well as BOMs for use 
      in production and cost estimation</p>
    <p>- Worked together with department managers to improve department workflow and 
      efficiency</p>
    <p>- Worked together with model makers to create accurate prototypes and resolve any 
      potential issues</p>
    <p>{''}</p>
    <p>Review Engineering Assistant</p><p>Ministry of Environment and Climate Change</p>
    <p>Sep 2015 - Aug 2016</p>
    <p>- Reviewed Environmental Compliance Approcal (ECA) Applications for Noise</p>
    <p>- Drafted engineering assessments and ECA Certificates</p>
    <p>- Verified acoustic and vibration calculations submitted by engineering consultants</p>
    <p>- Engaged in professional communications with engineering consultants regarding their 
      applications</p>
  </div>
)}

const page3 = {pageNum:3, info:(
  <div>
    <p>Project Experience</p>
    <p>Project Lead {'&'} Front End Developer</p>
    <p>Flexible Upskilling Network (FUN) Program</p><p>Aug 2020 - Sep 2020</p>
    <p>- Assisted in the creation of a basic functional website for a prescription tracker 
      application using ReactJS</p>
    <p>- Ensured team stayed on top of project deliverables and deadlines</p>
    <p>- Initiated group discussions and distributed tasks to team members</p>
    <p>{''}</p>
    <p>Robotics Project Team Member</p>
    <p>Mechatronics Systems Course, University of Toronto</p><p>Jan 2017 - Mar 2017</p>
    <p>- Assisted in the design of pathing algorithm using proximity based sensors</p>
    <p>- Assisted in the design of algorithm using laser sensors to visually map an area</p>
  </div>
)}

export default ScrollableBio;