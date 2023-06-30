import React from "react";
import styles from "./footer.module.scss"
import gitlabLogo from "../../assets/icons/gitlab-logo.png";
import gitHubLogo from "../../assets/icons/github-logo.png";
import linkedinLogo from "../../assets/icons/linkedin-logo.png";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://gitlab.com/JeisielRamos"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitlabLogo} alt="ícone do gitlab"  height="20"/>
        </a>
        <a
          href="https://github.com/JeisielRamos"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHubLogo} alt="ícone do github" height="20" />
        </a>
        <a
          href="https://www.linkedin.com/in/jeisiel-ramos-a76953108/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="ícone do linkedin" height="20"/>
        </a>
      </div>
      <p>Desenvolvido por JeisielRamos@2023.</p>
    </footer>
  );
}