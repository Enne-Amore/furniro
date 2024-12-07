import { ComponentProps } from "react";
import styles from "./WherePage.module.css";

export type WherePageData = ComponentProps<"h1"> &
  ComponentProps<"span"> & {
    namePage: string;
  };

export const WherePage = ({ namePage }: WherePageData) => {
  return (
    <article className={styles.container}>
      <h1 className={styles.namePage}>{namePage}</h1>

      <span className={styles.way}>
        <strong className={styles.strong}>
          <span>Home</span>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
          </svg>
        </strong>

        <span>{namePage}</span>
      </span>
    </article>
  );
};
