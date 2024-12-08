import { ImgsProduct } from './ImgsProduct'
import { InfoProduct } from './InfoProduct'
import { Description } from './Description'
import { useParams } from 'react-router-dom'
import { productFetch } from '../../../api/config'
import styles from './Product.module.css'
import { useEffect, useState } from 'react'

export const Product = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [mainDescription, setMainDescription] = useState<string>("");
  const [addDescription, setAddDescription] = useState<string[]>([]);
  const [img, setImg] = useState<string>("");
  const [altImg, setAltImg] = useState<string>("");

  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await productFetch.get(`/products/${id}`);
      const data = response.data;
      setName(data.name);
      setPrice(data.currentPrice);
      setMainDescription(data.mainDescription);
      setAddDescription(data.addDescription);
      setImg(data.img)
      setAltImg(data.altImg)

    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <section className={styles.container}>
      <div className={styles.infoMain}>
        <ImgsProduct img={img} altImg={altImg} />

        <InfoProduct name={name} mainDescription={mainDescription} price={price} />
      </div>

      <hr className={styles.line} />

      <Description addDescription={addDescription} img={img} altImg={img} />

      <hr className={styles.line} />
    </section>
  )
}
