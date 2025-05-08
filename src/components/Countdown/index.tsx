import styles from "./styles.module.css";

export function Countdown({ numero }: { numero: number }) {
  return <div className={styles.container}>{numero}</div>;
}
