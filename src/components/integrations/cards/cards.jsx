import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './card.module.css';

export const Cards = () => {  
  const dispatch = useDispatch();  
  const data = useSelector((state)=> state.integration);

//   useEffect(()=> {
//     dispatch(getIngegrationAPI());
//   }, []);

  return (
    <div className={styles.cardContainer}>

      <div>
        <div>
            <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" alt="sd" />
        </div>

        <div>
            <h1>Asana</h1>
            <p>Track time right from your Asana task without switching to Harvest.</p>
        </div>
      </div>

      <div>
        <div>
            <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" alt="sd" />
        </div>

        <div>
            <h1>Asana</h1>
            <p>Track time right from your Asana task without switching to Harvest.</p>
        </div>
      </div>

      <div>
        <div>
            <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" alt="sd" />
        </div>

        <div>
            <h1>Asana</h1>
            <p>Track time right from your Asana task without switching to Harvest.</p>
        </div>
      </div>

    </div>
  )
};

