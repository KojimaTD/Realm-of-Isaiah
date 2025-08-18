import styles from "../styles/Navbar.module.css";
import { NAV } from "../lib/constants";
import useScrollSpy from "../lib/useScrollSpy";

function Navbar() {
  const sectionIds = NAV.map((n) => n.id);
  const activeId = useScrollSpy(sectionIds, 88); // adjust if your header height changes

  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>⚔️ Isaiah King</div>
      <nav>
        <ul className={styles.navList}>
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? styles.active : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
