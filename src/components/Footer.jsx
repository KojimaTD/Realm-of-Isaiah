// src/components/Footer.jsx
import styles from "../styles/Footer.module.css";
import { APP_VERSION } from "../lib/version";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {year} Isaiah King</span>
        <span className={styles.muted}>Realm of Isaiah • {APP_VERSION}</span>
      </div>
    </footer>
  );
}
