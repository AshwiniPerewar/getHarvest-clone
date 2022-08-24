import React from 'react'
import { Build } from '../../components/integrations/Build/Build';
import { Cards } from '../../components/integrations/cards/cards';
import { Hero } from '../../components/integrations/hero/Hero';
import { LeftIntegrations } from '../../components/integrations/leftIntegrations/LeftIntegrations';
import { Search } from '../../components/integrations/search/Search';
import { Start } from '../../components/integrations/start/Start';
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
      <Build/>
      <Start/>
    </div>
  )
};

