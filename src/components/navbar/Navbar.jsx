import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="Netflix Logo"/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My list</span>
            </div>
            <div className={styles.right}>
                <Search  className={styles.icon}/>
                <span>Kids</span>
                <Notifications  className={styles.icon}/>
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/79F2/production/_123381213_06.jpg"
                    alt="User Icon"/>
                <div className={styles.profile}>
                    <ArrowDropDown className={styles.icon}/>
                    <div className={styles.options}>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )          
}

export default Navbar