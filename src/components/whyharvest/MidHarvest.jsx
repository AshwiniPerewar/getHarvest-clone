import React from "react";
import styles from './MidHarvest.module.css';

const MidHarvest = ({ info }) => {
  return info.id % 2 !== 0 ? (
    <div className={styles.mainMidContainer}>
      <div className={styles.contents}>
        <div className={ styles.leftMid}>
          <h4>{info.heading}</h4>
          <p>{info.para}</p>
          {info.points.map((i) => {
            return <p className= {styles.point}>{i.line}</p>;
          })}
          <button>Browse features</button>
        </div>
        <div className="rightMid">
          <div className= {styles.imgContainer}>
            <img src={info.img} alt="" />
          </div>
          <div className= {styles.quoteContainer}>
            <p>
              <em>"{info.quote}"</em>
            </p>
            <p>{info.quote_by}</p>
          </div>
        </div>
      </div>
      <div className= {styles.line}></div>
    </div>
  ) : (
    <div className= {styles.mainMidContainer}>
      <div className={styles.contents}>
        <div className={styles.rightMid}>
          <div className={styles.imgContainer}>
            <img src={info.img} alt="" />
          </div>
          <div className={styles.quoteContainer}>
            <p>
              <em>"{info.quote}"</em>
            </p>
            <p>{info.quote_by}</p>
          </div>
        </div>
        <div className= {styles.leftMid}>
          <h4>{info.heading}</h4>
          <p>{info.para}</p>
          {info.points.map((i) => {
            return <p className= {styles.point}>{i.line}</p>;
          })}
          <button>Browse features</button>
        </div>
      </div>
    </div>
  );
};

export default MidHarvest;
