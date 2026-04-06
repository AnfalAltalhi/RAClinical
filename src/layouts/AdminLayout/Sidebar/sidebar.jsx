import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../../assets/hero.svg";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav>
  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link
    }
  >
    الرئيسية
  </NavLink>

  <NavLink
    to="/dashboard/clinics"
    className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link
    }
  >
    العيادات
  </NavLink>

  <NavLink
    to="/dashboard/doctors"
    className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link
    }
  >
    الأخصائيين
  </NavLink>

  <NavLink
    to="/dashboard/bookings"
    className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link
    }
  >
    الحجوزات
  </NavLink>
</nav>

      <button className={styles.logout}>تسجيل الخروج</button>
    </div>
  );
}