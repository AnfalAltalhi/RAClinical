import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div>
      <h2>إحصائيات عامة</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <p>الإيرادات الشهرية</p>
          <h3>150,590</h3>
        </div>

        <div className={styles.card}>
          <p>الحجوزات اليومية</p>
          <h3>3,590</h3>
        </div>

        <div className={styles.card}>
          <p>عدد الأخصائيين</p>
          <h3>156</h3>
        </div>

        <div className={styles.card}>
          <p>عدد العيادات</p>
          <h3>55</h3>
        </div>
      </div>

      <div className={styles.table}>
        <h3>الحجوزات اليومية</h3>
        <table>
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>اسم المستفيد</th>
              <th>رقم الجوال</th>
              <th>العيادة</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}