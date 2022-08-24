import React from 'react'
import { Cards } from '../../components/integrations/cards/cards';
import { Hero } from '../../components/integrations/hero/Hero';
import { LeftIntegrations } from '../../components/integrations/leftIntegrations/LeftIntegrations';
import { Search } from '../../components/integrations/search/Search';
import styles from './integrations.module.css';

export const Integrations = () => {  
 
  return (
    <div className={styles.container}>
      <Hero />  
      <Search/>    
      <div className={styles.cardsContainer}>
        <LeftIntegrations/>
        <Cards />
      </div>
      
    </div>
  )
};

