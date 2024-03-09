import React from "react";
import styles from "./Navbar.module.css";
import Search from "./Search";
import { ReactComponent as Notification } from "../assets/ic_round-notifications.svg";
import { ReactComponent as Messages } from "../assets/bi_chat-left-dots-fill.svg";
import { ReactComponent as More } from "../assets/Frame 10.svg";
import ProfileImage from "../assets/image.png";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Search placeholder={"Search"} searchData={searchData}></Search>
      <div className={styles.profile}>
        <Notification />
        <Messages />
        <img src={ProfileImage} alt="Profile" />
        <p>Admirra John</p>
        <More />
      </div>
    </nav>
  );
}

export default Navbar;
