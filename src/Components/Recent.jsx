import React from "react";
import styles from "./Recent.module.css";

const Recent = () => {
  return (
    <div className={styles.recent}>
      <h5 className={styles.head}>Recently Activity</h5>
      <div className={styles.details}>
        <p>10.40 AM, Fri 10 Sept 2021</p>
        <h5 className={styles.head2}>You Posted a New Job</h5>
        <p>
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div className={styles.schedule}>
        <p>Schedule a call</p>
        <button>Schedule</button>
      </div>
    </div>
  );
};
export default Recent;
