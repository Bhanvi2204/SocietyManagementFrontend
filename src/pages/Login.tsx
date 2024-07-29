import React from "react";
import useLogin from "@/hooks/UseLogin";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  leftSide: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  rightSide: {
    flex: "1",
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
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "50px",
    height: "auto",
  },
  title: {
    margin: "0 0 20px 0",
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  fieldContainer: {
    position: "relative",
    marginBottom: "15px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
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
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15px",
  },
  link: {
    color: "#0078d4",
    textDecoration: "none",
    margin: "5px 0",
  },
  rememberMeContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  rememberMeCheckbox: {
    marginRight: "10px",
  },
  rememberMeLabel: {
    color: "#333",
  },
};

const LoginPage: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
    error,
    success,
  } = useLogin();

  return (
    <div style={styles.container} className="flex-col md:flex-row">
      <div style={styles.leftSide}>
        <div
          style={styles.formContainer}
          className="flex flex-col justify-center"
        >
          <img
            src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png"
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>Log In</h1>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          {success && (
            <p style={{ color: "green", textAlign: "center" }}>{success}</p>
          )}
          <form style={styles.form}>
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

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-lock" style={styles.icon}></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

            <button
              type="submit"
              style={styles.button}
              onClick={(e) => handleSubmit(e)}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
            >
              Login
            </button>

            <div style={styles.links}>
              <Link to="/reset-password" style={styles.link}>
                Forgot password?
              </Link>
              <Link to="/signup" style={styles.link}>
                Don’t have an account? Create one!
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div style={styles.rightSide}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/205/841/original/login-and-password-concept-3d-illustration-computer-and-account-login-and-password-form-page-on-screen-3d-illustration-png.png"
          alt="Login Background"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default LoginPage;
