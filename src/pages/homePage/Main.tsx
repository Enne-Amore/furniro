import { Furniture } from "./components/Furniture";
import { Intro } from "./components/Intro";
import styles from "./Main.module.css";
import { Products } from "./components/Products";
import Range from "./components/Range";
import { RoomsInspiration } from "./components/RoomsInspiration";

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
