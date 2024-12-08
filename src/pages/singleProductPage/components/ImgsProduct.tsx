import { ComponentProps } from "react";
import exampleImg from "../../../assets/example-img.png";
import styles from "./ImgsProduct.module.css";

export type ImgsProductsType = ComponentProps<"img"> & {
  img: string;
  altImg: string;
};

export const ImgsProduct = ({ img, altImg }: ImgsProductsType) => {
  return (
    <article className={styles.container}>
      <ul className={styles.imgList}>
        <figure className={styles.thumbnailImg}>
          <img
            src={`../../${img}` || exampleImg}
            alt={altImg}
            onError={(e) => (e.currentTarget.src = exampleImg)}
          />
        </figure>

        <figure className={styles.thumbnailImg}>
          <img
            src={`../../${img}` || exampleImg}
            alt={altImg}
            onError={(e) => (e.currentTarget.src = exampleImg)}
          />
        </figure>

        <figure className={styles.thumbnailImg}>
          <img
            src={`../../${img}` || exampleImg}
            alt={altImg}
            onError={(e) => (e.currentTarget.src = exampleImg)}
          />
        </figure>

        <figure className={styles.thumbnailImg}>
          <img
            src={`../../${img}` || exampleImg}
            alt={altImg}
            onError={(e) => (e.currentTarget.src = exampleImg)}
          />
        </figure>
      </ul>

      <figure className={styles.imgSelected}>
        <img
          src={`../../${img}` || exampleImg}
          alt={altImg}
          onError={(e) => (e.currentTarget.src = exampleImg)}
        />
      </figure>
    </article>
  );
};
