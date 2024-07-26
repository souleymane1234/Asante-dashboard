import styles from "./paginations.module.css"
const Pagination = () => {
    return (
    <div className={styles.container}>
        <button className={styles.button} disabled>Precedent</button>
        <button className={styles.button}>Suivant</button>
    </div>
    )
  }
  
  export default Pagination