import { FaAngleDoubleRight } from "react-icons/fa";

import styles from './ProjectCard.module.scss'

function ProjectCard({name, imgUrl, stack, projectUrl}) {
    
  return (
    <div  className={styles.projectCard}>
      <img src={imgUrl} alt='project link'/>
      <div className={styles.cardBody}>
        <p>{name}</p>
        <div className={styles.stackIcon}>
            {stack.map((item, index) => (
              <img 
                src={item} 
                key={index} 
                style={{width:'25px', marginRight:'5px'}}
              />))}
        </div>
        <div className={styles.projectLinkDiv}>
          <FaAngleDoubleRight className={styles.rightIcon}/>
          <a href={projectUrl} className={styles.projectLink} title='project link'>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;