import { FaHeart } from "react-icons/fa";

import styles from './Footer.module.scss'

import photo from '../assets/photo.png'

function Footer() {
  const  date = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.img}>
            <img src={photo} alt="photo of Wenli Jia" />
          </div>
      <div>
        <span>Made with</span>
        <FaHeart style={{color:'#E40046'}}/>
        <span> by</span>
        <span>Wenli</span>
        <span>&copy;{date}</span>
      </div>
    </footer>
  )
}

export default Footer