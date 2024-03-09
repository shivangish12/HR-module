import React from "react";
import styles from "./AnnouncementCard.module.css";
import { ReactComponent as Pin } from "../assets/pin.svg";
import { ReactComponent as Dots } from "../assets/dots.svg";
const AnnouncementCard = ({ title, time }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{time}</p>
      </div>
      <div className={styles.more}>
        <Pin />
        <Dots />
      </div>
    </div>
  );
};

export default AnnouncementCard;
