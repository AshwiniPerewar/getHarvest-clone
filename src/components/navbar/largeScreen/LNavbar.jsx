import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import harvest_logo from '../../../assets/harvest_logo.png';
import styles from './lnavbar.module.css';

const LNavbar = () => {
    const navigate = useNavigate();
      
  return (
    <div className={styles.lNavContainer}>

      <div className={styles.linkDiv}>
        <div className={styles.imgDiv}><NavLink to='/'><img className={styles.lnimage} src={harvest_logo} alt="harvest logo" /></NavLink></div>
        <NaveLink to={'/wharvest'}>Why Harvest?</NaveLink>
        <NaveLink to={'/features'}>Features</NaveLink>
        <NaveLink to={'/customers'}>Customers</NaveLink>
        <NaveLink to={'/integrations'}>Integrations</NaveLink>
        <NaveLink to={'/prcing'}>Pricing</NaveLink>
      </div>

      <div className={styles.buttonDiv}>
        <div><button className={styles.notActiveLink} onClick={()=> navigate('/signin')} >Sign in</button></div>
        <div><button className={styles.tryButton} onClick={()=> navigate('/signup')}>Try Harvest free</button></div>
      </div>

    </div>
  )
};

export default LNavbar;

const NaveLink = ({children, to}) => {
    return (
        <div><NavLink className={({isActive})=>isActive ? styles.activeLink : styles.notActiveLink} to={to}>{children}</NavLink></div>
    )
};
