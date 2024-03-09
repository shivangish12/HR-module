import React from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as Dashboard } from "../assets/dashboard.svg";
import { ReactComponent as Recruitment } from "../assets/recruitment.svg";
import { ReactComponent as Schedule } from "../assets/calendar.svg";
import { ReactComponent as Employee } from "../assets/employee.svg";
import { ReactComponent as Department } from "../assets/department.svg";
import { ReactComponent as Support } from "../assets/support.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>WeHR</h2>

      <ul className={styles.sidebarlist}>
        <h5 className={styles.main}>MAIN MENU</h5>
        <li>
          <Dashboard /> <span className={styles.dashboard}>Dashboard</span>
        </li>
        <li>
          <Recruitment />
          Recruitment
        </li>
        <li>
          <Schedule />
          Schedule
        </li>
        <li>
          <Employee />
          Employee
        </li>
        <li>
          <Department />
          Department
        </li>
        <h5 className={styles.main}>OTHER</h5>
        <li>
          <Support />
          Support
        </li>
        <li>
          <Settings />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
