import  {FaCodepen } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";

import CustomBtn from "../components/CustomBtn";

const baseUrl = window.location.origin;
const resumeURL = baseUrl+'/resume.pdf'


function Home() {

  const downloadPdf=(url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = resumeURL
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag) 
    aTag.click() 
    aTag.remove()
  }

  return (
      <div className="sectionAbout">
          <div className="introduce">
            <h1>Hi, I am Wenli</h1>
            <h1 className="hightLight">A Full Stack Developer</h1>
            <p>I thrive on crafting seamless digital experiences that prioritize user needs and preferences. Currently <span> seeking opportunities in junior-level roles.</span></p>
          </div>
          <div className="socialLink">
            <a href="https://www.linkedin.com/in/wenli-jia-2462ab287/" title="link to linkedin">
            <PiLinkedinLogoBold className="icon"/>
            </a>
            <a href="https://github.com/Wenli618" title="link to github">
            <FiGithub className="icon"/>
            </a>
            <a href="https://codepen.io/your-work" title="link to codepen">
            <FaCodepen className="icon"/>
            </a>
          </div>
          <div>
            <CustomBtn onClick={() =>{downloadPdf(resumeURL)}} label="download resume button"> <span>Resume <IoMdDownload /></span>  </CustomBtn>
          </div>
      </div>  
  )
}

export default Home