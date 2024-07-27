import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS (if needed)

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  leftSide: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
  },
  rightSide: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "80%",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formWrapper: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
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
  },
  link: {
    color: "#0078d4",
    textDecoration: "none",
    marginTop: "10px",
  },
  message: {
    textAlign: "center",
    marginBottom: "20px",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};

const SignupPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [batchYear, setBatchYear] = useState<string>("");
  const [enrollmentNo, setEnrollmentNo] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://societybackend-go.onrender.com/signup",
        {
          FirstName: firstName,
          LastName: lastName,
          Password: password,
          Branch: branch,
          BatchYear: batchYear,
          Email: email,
          EnrollmentNo: enrollmentNo,
        }
      );
      console.log(response);
      console.log("Working signup");

      if (response.status === 200) {
        navigate("/verify-email");
        setSuccess("OTP Sent Succesfully");
        setError("");
      }
    } catch (error) {
      setError("Failed to register. Please try again.");
      setSuccess("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <div style={styles.formWrapper}>
          <img
            src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png" // Replace with your logo URL
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>Sign Up</h1>

          {error && (
            <p style={{ ...styles.message, ...styles.error }}>{error}</p>
          )}
          {success && (
            <p style={{ ...styles.message, ...styles.success }}>{success}</p>
          )}

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-user" style={styles.icon}></i>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-user" style={styles.icon}></i>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  style={styles.input}
                  required
                />
              </div>
            </div>

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

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-lock" style={styles.icon}></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
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
                <i className="fas fa-building" style={styles.icon}></i>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  placeholder="Enter your branch"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-calendar" style={styles.icon}></i>
                <input
                  type="text"
                  id="batchYear"
                  name="batchYear"
                  value={batchYear}
                  onChange={(e) => setBatchYear(e.target.value)}
                  placeholder="Enter your batch year"
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-id-badge" style={styles.icon}></i>
                <input
                  type="text"
                  id="enrollmentNo"
                  name="enrollmentNo"
                  value={enrollmentNo}
                  onChange={(e) => setEnrollmentNo(e.target.value)}
                  placeholder="Enter your enrollment number"
                  style={styles.input}
                  required
                />
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
              Sign Up
            </button>

            <div style={styles.links}>
              <Link to="/login" style={styles.link}>
                Already have an account? Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div style={styles.rightSide}>
        <img
          src="https://img.freepik.com/premium-vector/3d-account-login-password-form_165488-4522.jpg"
          alt="Signup Background"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default SignupPage;
