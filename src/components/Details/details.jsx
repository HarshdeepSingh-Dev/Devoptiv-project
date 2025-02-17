import DevDetails from "../DeveloperDetailsSection/developerDetails";
import ProjectDetails from "../ProjectDetailsSection/projectDetails";
import styles from './details.module.css'

function Details(){
    return(
        <div className={styles.details}>
            <ProjectDetails/>
            <DevDetails/>
        </div>
    )
}

export default Details;