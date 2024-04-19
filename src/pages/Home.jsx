import  {FaCodepen } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";

import CustomBtn from "../components/CustomBtn";

const baseUrl = window.location.origin;
const resumeURL = baseUrl+'/resume.pdf'


function Home() {
console.log('resumurl')
console.log(resumeURL)
  const downloadPdf=(url) => {
    console.log('url')
    console.log(url)
    const fileName = url.split('/').pop()
    console.log('filename')
    console.log(fileName)
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
            <a href="https://www.linkedin.com/in/wenli-jia-2462ab287/">
            <PiLinkedinLogoBold className="icon"/>
            </a>
            <a href="https://github.com/Wenli618">
            <FiGithub className="icon"/>
            </a>
            <a href="https://github.com/Wenli618">
            <FaCodepen className="icon"/>
            </a>
          </div>

          <div>
            <CustomBtn onClick={() =>{downloadPdf(resumeURL)}} > <span>Resume <IoMdDownload /></span>  </CustomBtn>
          </div>
      </div>  
  )
}

export default Home