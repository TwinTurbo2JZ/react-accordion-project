import React, { useState } from "react";
import styles from "./css/Question.module.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const switchInfoState = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className={styles.border}>
      <div className={styles.collapse}>
        <h2>{title}</h2>
        <button className={styles.btn} onClick={switchInfoState}>
          {showInfo ? <p>less</p> : <p>more</p>}
        </button>
      </div>
      {showInfo && <h3>{info}</h3>}
    </div>
  );
};

export default Question;
