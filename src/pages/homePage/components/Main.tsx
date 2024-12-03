import { Intro } from "./Intro";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.container}>
      <Intro />
    </main>
  );
};
