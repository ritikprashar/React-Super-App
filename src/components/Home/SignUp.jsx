import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState("");

  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("inputName");
    const storedUserName = localStorage.getItem("inputUserName");
    const storedMail = localStorage.getItem("inputEmail");
    const storedMobile = localStorage.getItem("inputMobile");

    if (storedName) {
      setName(storedName);
    }
    if (storedUserName) {
      setUserName(storedUserName);
    }
    if (storedMail) {
      setEmail(storedMail);
    }
    if (storedMobile) {
      setMobile(storedMobile);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setUserNameError("");
  };
  const handleMailChange = (e) => {
    setEmail(e.target.value);
    setMailError("");
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMobileError("");
  };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (!e.target.checked) {
      setCheckboxError("Check this box if you want to proceed");
    } else {
      setCheckboxError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("inputName", name);
    localStorage.setItem("inputUserName", userName);
    localStorage.setItem("inputEmail", email);
    localStorage.setItem("inputMobile", mobile);

    let isValid = true;
    if (!name.match(/^[a-zA-Z]{2,30}$/)) {
      setNameError("Field is Required");
      isValid = false;
    } else {
      setNameError("");
    }
    if (!userName.match(/^[a-zA-Z0-9_]{3,20}$/)) {
      setUserNameError("Field is Required");
      isValid = false;
    } else {
      setUserNameError("");
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setMailError("Field is Required");
      isValid = false;
    } else {
      setMailError("");
    }
    if (!mobile.match(/^[0-9]{10}$/)) {
      setMobileError("Field is Required");
      isValid = false;
    } else {
      setMobileError("");
    }
    if (isChecked) {
    } else {
      setCheckboxError("Check this box if you want to proceed");
    }
    return isValid;
  };

  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("inputName");
      localStorage.removeItem("inputUserName");
      localStorage.removeItem("inputEmail");
      localStorage.removeItem("inputMobile");
    };
    window.onbeforeunload = handleUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Super app</h1>
      <p>Create your new account</p>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          style={{
            border: nameError && name === "" ? "1px solid #F00" : "none",
          }}
          value={name}
          type="text"
          placeholder="Name"
          name={name}
        />
        {nameError && <p className={styles.error}>{nameError}</p>}

        <input
          value={userName}
          onChange={handleUserNameChange}
          style={{
            border:
              userNameError && userName === "" ? "1px solid #F00" : "none",
          }}
          type="text"
          placeholder="UserName"
          name="username"
        />
        {userNameError && <p className={styles.error}>{userNameError}</p>}

        <input
          value={email}
          onChange={handleMailChange}
          style={{
            border: mailError && email === "" ? "1px solid #F00" : "none",
          }}
          type="email"
          placeholder="Email"
          name="mail"
        />
        {mailError && <p className={styles.error}>{mailError}</p>}

        <input
          value={mobile}
          onChange={handleMobileChange}
          style={{
            border: mobileError && mobile === "" ? "1px solid #F00" : "none",
          }}
          type="tel"
          placeholder="Mobile"
          name="mobile"
        />
        {mobileError && <p className={styles.error}>{mobileError}</p>}

        <label>
          <input
            checked={isChecked}
            onChange={handleCheckboxChange}
            type="checkbox"
            name="check"
          />
          Share my registration data with Superapp
        </label>
        {checkboxError && <p className={styles.error}>{checkboxError}</p>}

        <button onClick={(e) => handleSubmit(e)} type="submit">
          SIGN UP
        </button>
      </form>

      <footer className={styles.guide}>
        <p>
          By clicking on Sign up. you agree to Superapp
          <span style={{ color: " #72db73" }}>
            {" "}
            Terms and Conditions of Use
          </span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span style={{ color: " #72db73" }}> Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
}

export default SignUp;
