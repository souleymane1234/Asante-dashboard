import { MdPlayCircle, MdPlayCircleFilled, MdReadMore } from "react-icons/md"
import styles from "./rightbar.module.css"
import Image from "next/image"

const Rightbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.bgContainer}>
                <Image src="/avatar.png" alt="" fill className={styles.bg}/>
            </div>
            <div className={styles.texts}>
                <span className={styles.notification}>Available Now</span>
                <h3 className={styles.title}>How to use a new version</h3>
                <span className={styles.subtitle}>Task 4 minutes</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo, tempora maiores quaerat modi eligendi aliquid quos ad magni eos, dolor molestias dolorem, officiis ullam repudiandae nemo mollitia dolore laboriosam.</p>
                <button className={styles.button}>
                    <MdPlayCircleFilled />
                    Watch
                </button>
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.text}>
                <span className={styles.notification}>Coming soon</span>
                <h3 className={styles.title}>How to use a new version</h3>
                <span className={styles.subtitle}>Task 4 minutes</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo, tempora maiores quaerat modi eligendi aliquid quos ad magni eos, dolor molestias dolorem, officiis ullam repudiandae nemo mollitia dolore laboriosam.</p>
                <button className={styles.button}>
                    <MdReadMore />
                    Learn
                </button>
            </div>
        </div>
      </div>
    )
  }
  
  export default Rightbar