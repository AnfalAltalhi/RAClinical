import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <input placeholder="Search..." />
      <div className={styles.user}>
        <img src="" />
      </div>
    </div>
  );
}