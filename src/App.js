import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Announcements from "./Components/Announcements";
import Recent from "./Components/Recent";
import styles from "./App.module.css";
import Upcoming from "./Components/Upcoming";

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.left}>
            <Dashboard />
            <Announcements />
          </div>
          <div className={styles.right}>
            <Recent />
            <Upcoming />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
