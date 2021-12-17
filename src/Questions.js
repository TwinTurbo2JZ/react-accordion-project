import React from "react";
import dataAll from "./data";
import Question from "./Question";
import styles from "./css/Questions.module.css";

const Questions = () => {
  return (
    <div className={`${styles.questions}`}>
      <h1>List of questions</h1>
      {dataAll.map((data) => (
        <Question key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Questions;
