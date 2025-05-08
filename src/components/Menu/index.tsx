import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = string | "light" | "dark";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon: Record<AvailableThemes, React.ReactNode> = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    return () => {
      localStorage.getItem("theme");
    };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        data-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        data-label="Ver Hisórico"
        title="Ver Hisórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        data-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        data-label="Alterar Tema"
        title="Alterar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
