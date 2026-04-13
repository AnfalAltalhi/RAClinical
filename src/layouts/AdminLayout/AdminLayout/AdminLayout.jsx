import styles from "./AdminLayout.module.css";
import ClientSidebar from "../../../Pages/ClientLayout/ClientSidebar";
import Header from "../../../Pages/Header/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <ClientSidebar />
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