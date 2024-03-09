import React from "react";
import Card1 from "./Card1"; // Import the SmallCard component
import Card2 from "./Card2";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h4>Dashboard</h4>
      <div className={styles.cards}>
        <Card1
          heading="Available Position"
          number={24}
          details="4 Urgently needed"
          backgroundColor="#FFEFE7"
          textColor="#FF5151"
        />
        <Card1
          heading="Job Open"
          number={10}
          details="4 Active hiring"
          backgroundColor="#E8F0FB"
          textColor="#3786F1"
          isShadow={true}
        />
        <Card1
          heading="New Employees"
          number={24}
          details="4 Department"
          backgroundColor="#FDEBF9"
          textColor="#EE61CF"
        />
      </div>
      <div className={styles.card2}>
        <Card2
          heading="Total Employees"
          number={216}
          men="120 Men"
          women="96 Women"
          details="+2% Past month"
        />
        <Card2
          heading="Talent Request"
          number={16}
          men="6 Men"
          women="10 Women"
          details="+5% Past month"
        />
      </div>
    </div>
  );
};

export default Dashboard;
