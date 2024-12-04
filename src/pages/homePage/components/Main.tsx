import { Furniture } from "./Furniture";
import { Intro } from "./Intro";
import styles from "./Main.module.css";
import { Products } from "./Products";
import Range from "./Range";
import { RoomsInspiration } from "./RoomsInspiration";

export const Main = () => {
  return (
    <main className={styles.container}>
      <Intro />

      <Range />

      <Products />

      <RoomsInspiration />

      <Furniture />
    </main>
  );
};
