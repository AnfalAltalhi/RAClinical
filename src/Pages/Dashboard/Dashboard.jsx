import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard Overview</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <p>Monthly Revenue</p>
          <h3>$150,590</h3>
        </div>

        <div className={styles.card}>
          <p>Daily Bookings</p>
          <h3>3,590</h3>
        </div>

        <div className={styles.card}>
          <p>Total Doctors</p>
          <h3>156</h3>
        </div>

        <div className={styles.card}>
          <p>Total Clinics</p>
          <h3>55</h3>
        </div>
      </div>

      <div className={styles.table}>
        <h3>Recent Bookings</h3>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Phone</th>
              <th>Clinic</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>2025-01-01</td>
              <td>John Doe</td>
              <td>+966 512345678</td>
              <td>Dental Clinic</td>
              <td className={styles.active}>Completed</td>
            </tr>

            <tr>
              <td>2025-01-02</td>
              <td>Sarah Ali</td>
              <td>+966 598765432</td>
              <td>Skin Clinic</td>
              <td className={styles.pending}>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}