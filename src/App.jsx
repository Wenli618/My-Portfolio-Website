import {Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import MyContact from './pages/MyContact'
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout  />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<AboutMe />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='contact' element={<MyContact />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
    </Routes>
  
  )
}

export default App