import styles from "./Welcome.module.css";
import hero from "../../assets/Rectangle 1.svg";
import { useNavigate } from "react-router-dom";

export default function Welcome({  setIsWelcome, setPage }) {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div
        className={styles.top}
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      <div className={styles.body}>
        <h1>Welcome</h1>
        <p>Login to continue</p>

        <button
          className={styles.primary}
          onClick={() => setIsWelcome(true)}
        >
          Login
        </button>

         <button
        className={styles.primary}
        onClick={() => navigate("/auth/register")}
      >
        Create Account
      </button>
      
      </div>
    </div>
  );
}