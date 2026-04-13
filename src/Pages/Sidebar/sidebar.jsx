import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../assets/hero.svg";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo || undefined} alt="logo"  />
      </div>

      <nav>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/clinics"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Clinics
        </NavLink>

        <NavLink
          to="/dashboard/doctors"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Doctors
        </NavLink>

        <NavLink
          to="/dashboard/bookings"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Bookings
        </NavLink>
      </nav>

      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}