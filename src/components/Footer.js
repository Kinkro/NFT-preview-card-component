import React from 'react'
import avatar from '../images/image-avatar.png'
import styles from './Footer.module.css'
import hoverStyles from './App.module.css'

function Footer(){
    return(
        <div className={styles.container}>
            <img className = {styles.avatar} src={avatar} alt="" />
            <span className={styles.darkBlue}>Creation of <strong className={`${styles.white} ${hoverStyles.cyan}`}>Jules Wyvern</strong></span>
        </div>
    )
}

export default Footer;