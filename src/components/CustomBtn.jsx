

import styles from './CustomBtn.module.scss'


function CustomBtn({onClick, children}) {
    
  return (
    <button className={styles.customBtn} onClick={onClick}>
        {children}
    </button>
  )
}

export default CustomBtn