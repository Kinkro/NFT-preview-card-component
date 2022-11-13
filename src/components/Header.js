import React from 'react';
import Equilibrium from '../images/image-equilibrium.jpg'
import styles from './Header.module.css'
import hoverStyles from './App.module.css'
import iconView from '../images/icon-view.svg'

function Header(){
    return(
        <div>
            <div>
                <img className = {styles.eye} src={iconView} alt=""/>
                <div className={`${styles.imgContainer}`}>
                    <img className = {`${styles.img} ${hoverStyles.imgHover}`} src={Equilibrium} alt="NFT-img"/>
                </div>
            </div>
            <h1 className = {`${styles.heading} ${hoverStyles.cyan}`}>Equilibrium #3429</h1>
        </div>
    )
}

export default Header;