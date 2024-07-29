import React, { useState, FormEvent } from "react";
import Axios from "@/AxiosWrapper";
import { Link } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100vh",

  },
  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative" as "relative",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "80%",
    maxWidth: "600px",
    height: "auto",
    maxHeight: "90vh",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formContainer: {
    width: "100%",
    maxWidth: "450px",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    position: "relative" as "relative",
  },
  logo: {
    position: "absolute" as "absolute",
    top: "20px",
    left: "20px",
    width: "50px",
    height: "auto",
  },
  title: {
    margin: "0 0 20px 0",
    fontSize: "24px",
    color: "#333",
    textAlign: "center" as "center",
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  fieldContainer: {
    position: "relative" as "relative",
    marginBottom: "15px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center" as "center",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "0 10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
  },
  icon: {
    color: "#0078d4",
    marginRight: "10px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#0078d4",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  buttonHover: {
    backgroundColor: "#005a9e",
  },
  links: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    marginTop: "15px",
  },
  link: {
    color: "#0078d4",
    textDecoration: "none",
    margin: "5px 0",
  },
  termsContainer: {
    display: "flex",
    alignItems: "center" as "center",
    marginBottom: "15px",
  },
  termsCheckbox: {
    marginRight: "10px",
  },
  termsLabel: {
    color: "#333",
  },
};

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await Axios.post("/reset-password", {
        email,
        newPassword,
      });
      setSuccess(
        "Password reset successfully! Please log in with your new password."
      );
      setError("");
      // Redirect to login page or handle success as needed
      // window.location.href = '/login';
    } catch (error) {
      setError("Failed to reset password. Please try again.");
      setSuccess("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container} className="flex-col md:flex-row">
      <div style={styles.leftSide}>
        <div style={styles.formContainer}>
          <img
            src="https://your-logo-url.com/logo.png" // Replace with your logo URL
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>Reset Password</h1>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          {success && (
            <p style={{ color: "green", textAlign: "center" }}>{success}</p>
          )}
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-envelope" style={styles.icon}></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            {/* <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-lock" style={styles.icon}></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  style={styles.input}
                  required
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  style={styles.icon}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-lock" style={styles.icon}></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  style={styles.input}
                  required
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  style={styles.icon}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>

            <div style={styles.termsContainer}>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                style={styles.termsCheckbox}
              />
              <label htmlFor="terms" style={styles.termsLabel}>
                I agree to the terms and conditions
              </label>
            </div> */}

            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
            >
              <Link to="/verify-email">Reset Password</Link>
            </button>
          </form>
        </div>
      </div>
      <div style={styles.rightSide}>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/reset-password-9964677-8341655.png?f=webp"
          alt="Reset Password Background"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
