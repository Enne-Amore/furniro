import { Intro } from "./Intro";
import styles from "./Main.module.css";
import { Products } from "./Products";
import Range from "./Range";

export const Main = () => {
  return (
    <main className={styles.container}>
      <Intro />

      <Range />

      <Products />
    </main>
  );
};
