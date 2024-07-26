import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"
const Card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle  size={24}/>
        <div className={styles.texts}>
            <span className={styles.title}>Utilisateur</span>
            <span className={styles.number}>10.038</span>
            <span className={styles.details}>
                <span className={styles.positive}>12%</span>Plus d'utilisateurs
            </span>
        </div>
    </div>
  )
}

export default Card