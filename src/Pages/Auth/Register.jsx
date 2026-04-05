import { useForm } from "react-hook-form";
import styles from "./Register.module.css";
import hero from "../../assets/hero.svg";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main  className={styles.main} >
    <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>

      <div className={styles.logoWrapper}>
        <img src={hero} alt="logo" />
      </div>

      <h2>Create Account</h2>
      <p className={styles.sub}>Fill your details</p>

      <input className={styles.input} placeholder="Full Name" {...register("name")} />

      <input className={styles.input} placeholder="Email" {...register("email")} />

      <div className={styles.inputRow}>
        <span>+966</span>
        <input placeholder="Enter your phone number" {...register("phone")} />
      </div>

      <select className={styles.input} {...register("gender")}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input type="date" className={styles.input} {...register("dob")} />

      <button type="submit">Create Account</button>
    </form>
    </main>
  );
}