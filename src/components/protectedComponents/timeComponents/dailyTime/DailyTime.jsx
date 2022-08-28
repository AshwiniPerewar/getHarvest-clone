import React, { useRef, useState } from "react";
import { PaginDate } from "../paginDate/PaginDate";
import { TrackTime } from "../trackTime/TrackTime";
import styles from "./dailyTime.module.css";

export const DailyTime = () => {
  const [dateData, setDateData] = useState({});  
  const [edit, setedit] = useState(false);
  const timerId = useRef(null);
  const [timer, setTimer] = useState(0);

  // console.log(dateData, edit);

  const start = () => {
    timerId= setInterval(() => {
        setTimer((timer)=> timer - 1);
    }, 1000);
  }

  const stop = () => {

  }
 
  return (
    <div className={styles.dailyContainer}>
      <PaginDate dateData={dateData} setDateData={setDateData} />

      <div className={styles.dailyMainContainer}>
        <div><TrackTime dateData={dateData} /></div>

        <div className={styles.dailyMainContainer1}>
          <div>
            <div>Mon</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Tue</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Wed</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Thu</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Fri</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Sat</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Sun</div>
            <div>0:00</div>
          </div>
          <div className={styles.weekTotalDiv}>
            <div>Week total</div>
            <div>0:00</div>
          </div>
        </div>

      </div>

      <div className={styles.outputContainer}>

        <div className={styles.outputDiv}>
          <div>
            <h1>Example Project</h1>
            <p>Design</p>
          </div>
          <div className={styles.outputDiv2}>
            <h1>0:41</h1>
            <div><button className={styles.outputbutton1}>Stop</button></div>
            {/* <div><button onClick={()=> setedit(!edit)} className={styles.outputbutton2}>Edit</button></div> */}
          </div>
        </div>

      </div>
    
    </div>
  );
};
