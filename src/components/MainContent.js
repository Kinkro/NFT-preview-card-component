import React from 'react'
import ETHicon from '../images/icon-ethereum.svg'
import clockIcon from '../images/icon-clock.svg'
import styles from './MainContent.module.css'

function MainContent(){
    return (
        <div className={styles.container}>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className={styles.iconContainer}>
                <div className={styles.verticalAlignment}>
                    <img src={ETHicon} alt=""/>
                    <span className={styles.cyan}><strong>0.041 ETH </strong></span>
                </div>
                <div  className={styles.verticalAlignment}>
                    <img src={clockIcon} alt=""/>
                    <span>3 days left </span>
                </div>
            </div>
            <div className={styles.underline}></div>
        </div>
    )
}


export default MainContent;