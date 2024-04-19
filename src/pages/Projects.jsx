import ProjectCard from "../components/ProjectCard"

import svelteProjectImage from '../assets/project_svelte toggles.png'
import movieExpressImage from '../assets/project_movie express.png'
import modenMeImage from '../assets/Project_E-commercial shop.png'
import ozTripImage from '../assets/project_Trip plan by geminiAPI.png'

import react from '../assets/react-svgrepo-com.svg'
import bootstrap from '../assets/bootstrap-fill-svgrepo-com.svg'
import sass from '../assets/sass-svgrepo-com.svg'
import vanillaExtract from '../assets/vanilla-extract-svgrepo-com.svg'
import node from '../assets/node-js-svgrepo-com.svg'
import express from '../assets/express-svgrepo-com.svg'
import mongoDB from '../assets/mongo-svgrepo-com.svg'
import firebase from '../assets/firebase-svgrepo-com.svg'
import svelte from '../assets/svelte-icon-svgrepo-com.svg'
import geminiIcon from '../assets/google-gemini-icon.png'


function Projects() {
  const  projects = [

    {name:'E-commertial Shop', imgUrl:modenMeImage, stack:[react, vanillaExtract, firebase], projectUrl: 'https://github.com/Wenli618/ModenMe'},

    {name:'MovieExpress', imgUrl:movieExpressImage, stack:[mongoDB, react, bootstrap], projectUrl: ''},

    {name:'OzTrip-Gemini API', imgUrl:ozTripImage, stack:[react, bootstrap, geminiIcon], projectUrl:''},

    {name:'Svelte Toggles', imgUrl:svelteProjectImage, stack:[svelte], projectUrl:'https://sveltetoggles.onrender.com/'}
  ]
  console.log(projects)
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="cardsContainer">
        {projects.map((project,index) => <ProjectCard key={index}
          name={project.name} 
          imgUrl={project.imgUrl}
          stack={project.stack}
          projectUrl={project.projectUrl}/>)}
        </div>
    </div>
  )
}

export default Projects