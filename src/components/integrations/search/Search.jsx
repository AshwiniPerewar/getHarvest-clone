import React from 'react';
import styles from './search.module.css';
import { BsSearch } from 'react-icons/bs';
export const Search = () => {
  return (
    <div className={styles.searchContainer}>

      <div className={styles.searchDiv} >
        <BsSearch className={styles.searchIcon}/>
        <input type="search" />
      </div>
        
    </div>
  )
};

