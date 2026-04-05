import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./Register.module.css";
import hero from "../../assets/hero.svg";


const schema = z.object({
  name: z.string().min(1, "Full name is required"),

  email: z.string().min(1, "Email is required").email("Invalid email"),

  phone: z
    .string()
    .min(9, "Phone must be at least 9 digits")
    .max(10, "Invalid phone number"),

  gender: z.string().min(1, "Gender is required"),

  dob: z.string().min(1, "Date of birth is required"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.main}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.logoWrapper}>
          <img src={hero} alt="logo" />
        </div>

        <h2>Create Account</h2>
        <p className={styles.sub}>Fill your details</p>

        {/* name */}
        <input
          className={styles.input}
          placeholder="Full Name"
          {...register("name")}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        {/* email */}
        <input
          className={styles.input}
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        {/* phone */}
        <div className={styles.inputRow}>
          <span>+966</span>
          <input
            placeholder="Enter your phone number"
            {...register("phone")}
          />
        </div>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

        {/* gender */}
        <select className={styles.input} {...register("gender")}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && (
          <p className={styles.error}>{errors.gender.message}</p>
        )}

        {/* dob */}
        <input
          type="date"
          className={styles.input}
          {...register("dob")}
        />
        {errors.dob && <p className={styles.error}>{errors.dob.message}</p>}

        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}