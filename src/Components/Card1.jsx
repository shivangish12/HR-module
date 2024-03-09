import React from "react";
import styles from "./Card1.module.css";

const Card1 = ({
  heading,
  number,
  details,
  backgroundColor,
  textColor,
  isShadow,
}) => {
  const boxShadow = isShadow ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none";
  return (
    <div className={styles.card1} style={{ backgroundColor, boxShadow }}>
      <div className={styles.content}>
        <p className={styles.heading}>{heading}</p>
        <h2>{number}</h2>
        <p className={styles.details} style={{ color: textColor }}>
          {details}
        </p>
      </div>
    </div>
  );
};

export default Card1;
