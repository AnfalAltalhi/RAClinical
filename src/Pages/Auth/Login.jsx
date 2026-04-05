import { useState } from "react";
import styles from "./Login.module.css";
import Welcome from "./Welcome";
import hero from "../../assets/hero.svg";
import { Navigate } from "react-router";
import { login } from "../../services/authService";

export default function Login() {
  const [form, setForm] = useState({
    phone: "",
  });

  const [iswelcome, setIsWelcome] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      phone: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const onSubmit = async (data) => {
  try {
      const Response = await login(data);
      console.log(Response);
      localStorage.setItem("token", Response.token);
      Navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

return (
  <main  className={styles.main} >
    {iswelcome === false ? (
      <Welcome setIsWelcome={setIsWelcome} />
    ) : (
      <form className={styles.card} onSubmit={handleSubmit}>

        <div className={styles.logoWrapper}>
          <img src={hero} alt="logo" />
        </div>

        <h2>Welcome</h2>
        <p className={styles.sub}>Login to continue</p>

        <div className={styles.inputRow}>
          <span>+966</span>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    )}
  </main>
);}