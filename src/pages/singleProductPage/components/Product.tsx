import { ImgsProduct } from "./ImgsProduct";
import { InfoProduct } from "./InfoProduct";
import { Description } from "./Description";
import { useParams } from "react-router-dom";
import { productFetch } from "../../../api/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./Product.module.css";

export const Product = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [mainDescription, setMainDescription] = useState<string>("");
  const [addDescription, setAddDescription] = useState<string[]>([]);
  const [img, setImg] = useState<string>("");
  const [altImg, setAltImg] = useState<string>("");
  const [legend, setLegend] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [oldPrice, setOldPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [qtd, setQtd] = useState<string>("1");

  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await productFetch.get(`/products/${id}`);
      const data = response.data;

      setName(data.name);
      setPrice(data.currentPrice);
      setMainDescription(data.mainDescription);
      setAddDescription(data.addDescription);
      setImg(data.img);
      setAltImg(data.altImg);
      setLegend(data.legend);
      setCurrentPrice(data.currentPrice);
      setOldPrice(data.oldPrice);
      setDiscount(data.discount);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const addCart = async () => {
    const productSelected: object = {
      name,
      legend,
      currentPrice,
      oldPrice,
      img,
      altImg,
      discount,
      mainDescription,
      addDescription,
      qtd,
    };

    try {
      const response = await productFetch.post("/cart", {
        ...productSelected,
      });

      toast.success('Product added to cart successfully', {
        position: "top-center",
        autoClose: 1500
      })

      return response.data;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.infoMain}>
        <ImgsProduct img={img} altImg={altImg} />

        <InfoProduct
          name={name}
          mainDescription={mainDescription}
          price={price}
          qtd={qtd}
          setQtd={(e) => setQtd(e.target.value)}
          addCart={addCart}
        />
      </div>

      <hr className={styles.line} />

      <Description addDescription={addDescription} img={img} altImg={img} />

      <hr className={styles.line} />
    </section>
  );
};
