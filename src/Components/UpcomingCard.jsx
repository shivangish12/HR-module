import React from "react";
import styles from "./UpcomingCard.module.css";
import { ReactComponent as Dots } from "../assets/dots.svg";
const UpcomingCard = ({ title, time }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{time}</p>
      </div>
      <div className={styles.more}>
        <Dots />
      </div>
    </div>
  );
};

export default UpcomingCard;
