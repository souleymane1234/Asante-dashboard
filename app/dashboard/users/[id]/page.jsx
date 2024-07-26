import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image"
const addUserPage = () => {
    return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
            <Image src="/avatar.png" alt="" fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label>Username</label>
                <input type="text" name="username" placeholder="John Doe" />
                <label>Email</label>
                <input type="email" name="email" placeholder="John@gmail.com" />
                <label>Password</label>
                <input type="password" name="password" placeholder="John Doe" />
                <label>Phone</label>
                <input type="text" name="phone" placeholder="12345678" />
                <label>Adresse</label>
                <textarea type="text" name="adresse" placeholder="New York"/>
                <label>Es admin?</label>
                <select name="esAdmin" id="esAdmin">
                    <option value={true}>Oui</option>
                    <option value={false}>Non</option>
                </select>
                <label>Es Active?</label>
                <select name="esActive" id="esActive">
                    <option value={true}>Oui</option>
                    <option value={false}>Non</option>
                </select>
            </form>
        </div>
    </div>
    )
  }
  
  export default addUserPage