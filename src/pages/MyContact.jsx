
import  {FaCodepen } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";


function MyContact() {
  return (

    <div className='contactCard'>
        <div className='content'>
            <div className='top'>
                <div className='name'>Wenli Jia</div>
                <div className='profession'>Full-stack Developer</div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='email'>
                        <span>Email:</span>
                        <p>jiawenli618@gmail.com</p>
                    </div>
                    <div className='socials'>
                        <span>Socials: </span>
                    <a href="https://www.linkedin.com/in/wenli-jia-2462ab287/" title="link to linkedin">
            <PiLinkedinLogoBold className="socialIcon"/>
            </a>
            <a href="https://github.com/Wenli618" title="link to github">
            <FiGithub className="socialIcon"/>
            </a>
            <a href="https://codepen.io/your-work" title="link to codepen">
            <FaCodepen className="socialIcon"/>
            </a>

                    </div>
                </div>
                <div className='right'>
                    <FaMapMarkerAlt />
                    <div className='location'>Melbourne, Aus</div>
                </div>
            </div>
        </div>
        <div className='background'>
        <div className='slice'></div>
    </div>
</div>
  )
}

export default MyContact