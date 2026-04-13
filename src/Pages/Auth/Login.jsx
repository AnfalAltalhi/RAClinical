import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import Welcome from "./Welcome";
import hero from "../../assets/hero.svg";
import { login } from "../../Services/AuthService";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [iswelcome, setIsWelcome] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const Response = await login(data);

      console.log("LOGIN RESPONSE:", Response);

      const token = Response.token || Response.data?.token;

      if (!token) {
        console.error("No token ❌");
        return;
      }

      localStorage.setItem("token", token);

      // 🔥 يرجع مثل أول (سريع)
      navigate("/dashboard");

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className={styles.main}>
      {!iswelcome ? (
        <Welcome setIsWelcome={setIsWelcome} />
      ) : (
        <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
          
          <div className={styles.logoWrapper}>
            <img src={hero} alt="logo" />
          </div>

          <h2>Welcome</h2>
          <p className={styles.sub}>Login to continue</p>

          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <div className={styles.inputRow}>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <div className={styles.registerBox}>
            <span className={styles.registerText}>
              Don't have an account?
            </span>

            <Link to="/register" className={styles.registerLink}>
              Create Account
            </Link>
          </div>

        </form>
      )}
    </main>
  );
}