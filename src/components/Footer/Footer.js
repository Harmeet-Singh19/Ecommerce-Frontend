import React from "react";
import footerLogo from "../../assets/logo.png";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className = {styles.FooterMain}>
    <div className={styles.Footer}>
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />


    </div>

    (c) 2020 @ DUbookX 
    </div>
  );
};

const ColumnOne = () => {
  return (
    <div className={styles.Column}>
      <div className={styles.Title} style={{ marginBottom: "0rem" }}>
        CONTACT US
      </div>
      <br></br>
      <ul>
        <a href="tel:9910208293"><li>9910208293</li></a>
        <a href="tel:9953897446"><li>9953897446</li></a>
        <a href="mailto:dubookx@gmail.com"><li>dubookx@gmail.com</li></a>
      </ul>
    </div>
  );
};

const ColumnTwo = () => (
  <div className={styles.Column}>
    <div className={styles.Title}>ABOUT</div>
    <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
      
      <Link to="/about">
        <li> About</li>
      </Link>

    </ul>
  </div>
);

const ColumnThree = () => (
  <div className={styles.Column}>
    <div className={styles.Title}>SUPPORT</div>
    <ul>

      <Link to="/faq">
        <li> FAQs</li>
      </Link>
      <Link to="/disclaimer">
        <li> Disclaimer</li>
      </Link>
      <Link to="/privacy">
        <li> Privacy</li>
      </Link>
      <Link to="/terms">
        <li> Terms</li>
      </Link>
      <Link to="/returns">
        <li> Returns & Cancellation</li>
      </Link>
    </ul>
  </div>
);

export default Footer;
