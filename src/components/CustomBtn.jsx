

import styles from './CustomBtn.module.scss'


function CustomBtn({onClick, children,label}) {
    
  return (
    <button className={styles.customBtn} onClick={onClick} type="button" ariaria-label={label}>
        {children}
    </button>
  )
}

export default CustomBtn 