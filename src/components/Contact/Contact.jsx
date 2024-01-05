import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a >shivam069info@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href='https://www.linkedin.com/in/shivam069/'>linkedin.com/in/shivam069</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon1.png")} alt="Github icon" />
          <a href="https://github.com/ShivamRanjan069">github.com/ShivamRanjan069</a>
        </li>
      </ul>
    </footer>
  );
};
