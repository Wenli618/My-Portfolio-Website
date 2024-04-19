import { FaAngleDoubleRight } from "react-icons/fa";


import styles from './ProjectCard.module.scss'
const baseUrl = window.location.origin;


function ProjectCard({name, imgUrl, stack, projectUrl}) {
    
  return (
    <div  className={styles.projectCard}>
      <img src={baseUrl+imgUrl} />
      <div className={styles.cardBody}>
        <p>{name}</p>
        <div className={styles.stackIcon}>
            {stack.map((item, index) => <img src={item} key={index} className='' style={{width:'25px', marginRight:'5px'}}/>)}
        </div>
        <div className={styles.projectLinkDiv}>
          <FaAngleDoubleRight className={styles.rightIcon}/>
          <a href={projectUrl} className={styles.projectLink}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;