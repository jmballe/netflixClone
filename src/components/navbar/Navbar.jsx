import { useState } from "react";
import {
  ArrowDropDown,
  Notifications,
  Search,
  Settings
} from "@mui/icons-material";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} `}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My list</span>
        </div>
        <div className={styles.right}>
          <Search className={styles.icon} />
          <span>Kids</span>
          <Notifications className={styles.icon} />
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/79F2/production/_123381213_06.jpg"
            alt="User Icon"
          />
          <div className={styles.profile}>
            <ArrowDropDown className={styles.iconArrow} />
            <div className={styles.options}>
                <div className={styles.containerOptions}>
                    <Settings />
                    <span>Settings</span>
                </div>
              
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
