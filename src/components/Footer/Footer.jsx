import styles from "./Footer.module.css";
import "@fontsource/poppins";

const Footer = () => {
  return (
    <div id="footer" className={styles.container}>
      <nav className={styles.footer}>
        <div>
          <h2 className={styles.footer__brand}>Covid ID</h2>
          <a
            href="https://github.com/shofiesyrrr"
            className={styles.footer__socials}
          >
            Developed by @shofiesyrrr
          </a>
        </div>
        <div className={styles.footer__socials}>
          <h2>
            <a
              href="https://www.linkedin.com/in/shofi-syahria-mahram-10a371206/"
              className={styles.footer__linkedin}
            >
              Linkedin
            </a>
          </h2>
          <a
            href="https://www.instagram.com/shofiesyrr__/"
            className={styles.footer__instagram}
          >
            Instagram
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
