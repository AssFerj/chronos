import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="#">
        Entenda como funciona técnica de Pomodoro
      </a>
      <div className={styles.link}>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Desenvolvido por{" "}
        <a
          className={styles.linkA}
          href="http://assisjuniorwm.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Assis Junior W&M
        </a>
      </div>
    </footer>
  );
}
