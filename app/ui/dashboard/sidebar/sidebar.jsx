import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdPeople, MdSettings, MdShoppingBag, MdSupervisedUserCircle, MdWork } from "react-icons/md"
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink"
import Image from 'next/image'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Tableau de bord",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Utilisateurs",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Medecins",
        path: "/dashboard/products",
        icon: <FaUserDoctor />
      },
      {
        title: "Infirmier",
        path: "/dashboard/products",
        icon: <FaUserDoctor />
      },
      {
        title: "Hopitaux",
        path: "/dashboard/transaction",
        icon: <FaHospitalAlt />
      }
    ],
  },
  {
    title: "Analytiques",
    list: [
      {
        title: "Transactions",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Pourcentage",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Equipes",
        path: "/dashboard/teams",
        icon: <MdPeople />
      }
    ]
  },
  {
    title: "Plus",
    list: [
      {
        title: "Parametres",
        path: "/dashboard/settings",
        icon: <MdSettings />
      },
      {
        title: "Aide",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      }
    ]
  }
]
const Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <Image className={styles.userImage} src="/avatar.png" alt="" width="50" height="50"/>
          <div className={styles.userDetail}>
            <span className={[styles.userName]}>Albert Kala</span>
            <span className={styles.userTitle}>Administrateur</span>
          </div>
        </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>{cat.list.map((item) => (
              <MenuLink item={item} key={item.title}/>
            ))}

          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Deconnexion
      </button>
      </div>
    )
  }
  
  export default Sidebar