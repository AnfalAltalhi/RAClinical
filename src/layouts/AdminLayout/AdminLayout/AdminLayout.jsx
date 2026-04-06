import styles from "./AdminLayout.module.css";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Header />

        <div className={styles.main}>
          <Outlet />
        </div>
      </div>

    </div>
  );
}