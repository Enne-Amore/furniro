import { ComponentProps } from "react";
import exampleImg from "../../../assets/img-example-description.png";
import styles from "./Description.module.css";

export type DescriptionType = ComponentProps<"p"> & ComponentProps<"img"> & {
  addDescription: string[];
  img: string;
  altImg: string;
};

export const Description = ({ addDescription, img, altImg }: DescriptionType) => {
  return (
    <article className={styles.container}>
      <div className={styles.titlesContainer}>
        <h2 className={styles.mainTitle}>Description</h2>

        <span className={styles.secundaryTitle}>Additional Information</span>
      </div>

      {addDescription.map((description) => (
        <p className={styles.paragraph}>{description}</p>
      ))}

      <div className={styles.imgsContainer}>
        <figure className={styles.exampleImg}>
          <img
            src={`../../${img}` || exampleImg}
            alt={altImg}
            onError={(e) => (e.currentTarget.src = exampleImg)}
          />
        </figure>

        <figure className={styles.exampleImg}>
          <img
            src={`../../${img}` || exampleImg}
            alt={altImg}
            onError={(e) => (e.currentTarget.src = exampleImg)}
          />
        </figure>
      </div>
    </article>
  );
};
