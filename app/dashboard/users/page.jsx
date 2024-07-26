import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
const UserPage = () => {
    return (
      <div className={styles.containerFluid}>
        <div className={styles.top}>
          <Search />
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Ajouter</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nom</td>
              <td>Email</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/avatar.png" alt="" width={40} height={40} className={styles.userImage} />
                  John Doe
                </div>
              </td>
              <td>aka@gmail.com</td>
              <td>13.01.2022</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    )
  }
  
  export default UserPage