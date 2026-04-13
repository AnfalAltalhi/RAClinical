import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../Services/AuthService";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import hero from "../../assets/hero.svg";

const schema = z
  .object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z
      .string()
      .min(9, "Phone must be at least 9 digits")
      .max(10, "Invalid phone number"),
    gender: z.string().min(1, "Gender is required"),
    dob: z.string().min(1, "Date of birth is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        fullName: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: "0" + data.phone,
        gender: Number(data.gender),
        dateOfBirth: data.dob + "T00:00:00",
      };

      console.log("Sending:", payload);

      await registerUser(payload);

      alert("Account created successfully ✅");
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.logoWrapper}>
          <img src={hero} alt="logo" />
        </div>

        <h2>Create Account</h2>
        <p className={styles.sub}>Fill your details</p>

        {/* 🔥 Grid */}
        <div className={styles.grid}>

          <div>
            <input
              className={styles.input}
              placeholder="Full Name"
              {...register("name")}
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>

          <div>
            <input
              className={styles.input}
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              className={styles.input}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className={styles.phoneRow}>
            <span>+966</span>
            <input
              placeholder="Phone"
              {...register("phone")}
            />
          </div>
          <div>
            <select className={styles.input} {...register("gender")}>
              <option value="">Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
            {errors.gender && (
              <p className={styles.error}>{errors.gender.message}</p>
            )}
          </div>

          <div className={styles.fullWidth}>
            <input
              type="date"
              className={styles.input}
              {...register("dob")}
            />
            {errors.dob && <p className={styles.error}>{errors.dob.message}</p>}
          </div>

        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>

        
        <div className={styles.loginBox}>
          <span>Already have an account?</span>
          <Link to="/auth" className={styles.loginLink}>
            Login
          </Link>
        </div>

      </form>
    </main>
  );
}