import React from "react";
import styles from "./Upcoming.module.css";
import UpcomingCard from "./UpcomingCard";
import { ReactComponent as Icon } from "../assets/Frame 10.svg";
const Upcoming = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h6>Upcoming Schedule</h6>
          <div className={styles.right}>
            <p>Today, 13 Sep 2021</p>
            <Icon />
          </div>
        </div>
        <div className={styles.announcement}>
          <p>Priority</p>
          <UpcomingCard
            title="Review candidate applications"
            time="5 Minutes ago"
          />
          <p>Other</p>
          <UpcomingCard
            title="Interview with candidates"
            time="Yesterday, 12:30 PM"
          />
          <UpcomingCard
            title="Short meeting with product designer from IT Departement"
            time="Yesterday, 09:15 AM"
          />
        </div>
        <div className={styles.all}>
          <p>Create a new schedule</p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
