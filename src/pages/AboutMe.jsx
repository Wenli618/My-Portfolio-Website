import html from '../assets/html-5-svgrepo-com.svg' 
import css from '../assets/css-3-svgrepo-com.svg'
import javaScript from '../assets/javascript-svgrepo-com.svg'
import react from '../assets/react-svgrepo-com.svg'
import next from '../assets/next-dot-js-svgrepo-com.svg'
import bootstrap from '../assets/bootstrap-fill-svgrepo-com.svg'
import sass from '../assets/sass-svgrepo-com.svg'
import vanillaExtract from '../assets/vanilla-extract-svgrepo-com.svg'
import node from '../assets/node-js-svgrepo-com.svg'
import express from '../assets/express-svgrepo-com.svg'
import mongoDB from '../assets/mongo-svgrepo-com.svg'
import firebase from '../assets/firebase-svgrepo-com.svg'
import svelte from '../assets/svelte-icon-svgrepo-com.svg'
import postman from '../assets/postman-icon-svgrepo-com.svg'

function AboutMe() {
  const sillList = [
    {name:'HTML', url:html},
    {name:'CSS', url:css},
    {name:'JavaScript', url:javaScript},
    {name:'React', url:react},
    {name:"Next.JS", url:next},
    {name:'Svelte',url:svelte},
    {name:'Bootstrap', url:bootstrap},
    {name:'Sass', url:sass},
    {name:'Vanilla Extract', url:vanillaExtract},
    {name:'Node.js', url:node},
    {name:'EXPRESS', url:express},
    {name:'MongoDB', url:mongoDB},
    {name:'Firebase',url:firebase},
    {name:'Postman',url:postman},
  ]

  return (
    <div className="aboutContainer">
      <div className="about">
        <h1 >A Bit About Me</h1>
        <p>I am currently studying for a Diploma of Information Technology at Holmesglen, with a major in full-stack web development. Prior to this, I completed a 12-week web development bootcamp offered by General Assembly in 2023. Throughout my learning journey, I have completed several projects related to frontend and backend development. </p>
      </div>
      <div className="splitLine"></div>
     
      <div className="skillContainer">
        <h2 className="title">Skills</h2>
        <p>Through dedicated study and hands-on project experiences, I have cultivated proficiency in a diverse array of programming languages, frameworks, libraries, and development tools. Below are my current skills, and my tech stack continues to expand...</p>
        <ul className='skillList'>
          {sillList.map( (item, index )=> <li key={index}><img className='skillIcon' src={item.url} alt={item.name} /></li>)}
        </ul>
      </div>
    </div>
  )
}

export default AboutMe