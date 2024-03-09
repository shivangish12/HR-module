import React from "react";
import styles from "./Card2.module.css";
import { ReactComponent as Graph } from "../assets/Vector 3.svg";

const Card2 = ({ heading, number, men, women, details }) => {
  return (
    <div className={styles.card2}>
      <div className={styles.contents}>
        <div className={styles.left}>
          <p className={styles.heading}>{heading}</p>
          <h2>{number}</h2>
          <p className={styles.men}>{men}</p>
          <p className={styles.women}>{women}</p>
        </div>
        <div className={styles.right}>
          <Graph />
          <p className={styles.details}>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
