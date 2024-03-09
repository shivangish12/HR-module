import React from "react";
import styles from "./Announcements.module.css";
import AnnouncementCard from "./AnnouncementCard";
import { ReactComponent as Icon } from "../assets/Frame 10.svg";

const Announcements = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h6>Announcement</h6>
          <div className={styles.right}>
            <p>Today, 13 Sep 2021</p>
            <Icon />
          </div>
        </div>
        <div className={styles.announcement}>
          <AnnouncementCard
            title="Outing schedule for every department"
            time="5 Minutes ago"
          />
          <AnnouncementCard
            title="Meeting HR Department"
            time="Yesterday, 12:30 PM"
          />
          <AnnouncementCard
            title="IT Department need two more talents for UX/UI Designer position"
            time="Yesterday, 09:15 AM"
          />
        </div>
        <div className={styles.all}>
          <p>See All Announcement</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
