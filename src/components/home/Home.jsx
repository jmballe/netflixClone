import React from 'react'
import Navbar from '../navbar/Navbar'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.home}>
        <Navbar/>
    </div>
  )
}

export default Home