import { useNavigate } from "react-router-dom"

import CustomBtn from "../components/CustomBtn"

import notFoundImg from '../assets/notfound.svg'

function NotFound() {
  const navigate = useNavigate()
  const backToHomePage = () => {
    navigate('/')
  }
  return (
    <div className="notFound">
      
      <img src={notFoundImg} alt="not found image" />
      
      <CustomBtn onClick={backToHomePage} label='back to home button'><span>Go Back</span></CustomBtn>

    </div>
  )
}

export default NotFound