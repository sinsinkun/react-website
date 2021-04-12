import profileImg from '../../media/profile.jpg';
import resumePdf from '../../media/JingChang_Xiao_Resume.pdf';

function About() {
  return(
    <div className="container">
      <div style={{ width:"80%"}}>
        <h1>About Me</h1>
        <img src={profileImg} className="profile-img" alt="profile" />
        <p>
          I am a graduate from the University of Toronto with a Bachelor's 
          degree in Mechanical Engineering, with a keen interest in software 
          design and development. Recently I underwent a rigorous training program
          for full stack web development, where I learned about many essential tools
          that are critical to creating a fully functional website.
        </p>
        <p>
          <a href={resumePdf} target="_blank" rel="noreferrer">Click here</a> to open a 
          copy of my resume. It covers in more detail my educational and professional 
          background, as well as other skills that may be less relevant to developers.
        </p>
      </div>

      <div style={{ width:"80%"}}>
        <h3>Contact Me</h3>
        <p>You can contact me through any of the below channels: </p>
        <ul>
          <li><b>Email: </b>chang.x1994@gmail.com</li>
          <li><b>Phone Number: </b>416-834-7055</li>
          <li><b>Github: </b> 
            <a href="https://github.com/sinsinkun" target="_blank" rel="noreferrer">
              https://github.com/sinsinkun
            </a>
          </li>
          <li><b>LinkedIn: </b> 
            <a href="https://www.linkedin.com/in/jingchang-xiao/" target="_blank" rel="noreferrer">
              https://www.linkedin.com/in/jingchang-xiao/
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default About;