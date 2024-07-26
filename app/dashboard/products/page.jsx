// import styles from "@/app/ui/dashboard/products/products.module.css"
import styles from "./product.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
const ProductPage = () => {
    return (
      <div className={styles.containerFluid}>
        <div className={styles.top}>
          <Search />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Ajouter</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image src="/avatar.png" alt="" width={40} height={40} className={styles.productImage} />
                  Iphone
                </div>
              </td>
              <td>Desc</td>
              <td>10.000fcfa</td>
              <td>13.01.2024</td>
              <td>72</td>
              <td>
                <Link href="/dashboard/products/test">
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
  
  export default ProductPage