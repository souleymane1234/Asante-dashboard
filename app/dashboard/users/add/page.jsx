import styles from "@/app/ui/dashboard/users/addUserPage/addUserPage.module.css"
const addUserPage = () => {
    return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="nom et prenom" name="title" required />
            <input type="email" placeholder="email" name="email" required />
            <input type="password" placeholder="password" name="password" required />
            <input type="phone" placeholder="phone" name="phone" required />
            <select name="isAdmin" id="isAdmin">
                <option value={false} selected>Est Admin?</option>
                <option value={true}>Oui</option>
                <option value={false}>Non</option>
            </select>
            <select name="isActive" id="isActive">
                <option value={true} selected>Est Active?</option>
                <option value={true}>Oui</option>
                <option value={false}>Non</option>
            </select>
            <textarea name="adresse" id="adresse" rows="16" placeholder="adresse"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
  }
  
  export default addUserPage