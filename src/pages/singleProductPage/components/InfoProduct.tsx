import { ComponentProps } from 'react';
import stars from '../../../assets/stars.png';
import facebookIcon from '../icons/facebook.svg';
import linkedinIcon from '../icons/linkedin.svg';
import twitterIcon from '../icons/twitter.svg';
import styles from './InfoProduct.module.css'

export type InfoProductType = ComponentProps<'h1'> & ComponentProps<'p'> & {
  name: string;
  mainDescription: string;
  price: number;
}

export const InfoProduct = ({ name, mainDescription, price }: InfoProductType) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>

      <span className={styles.price}>{price}</span>

      <div className={styles.nota}>
        <img src={stars} alt="4.5 stars" />

        <span className={styles.labelNota}>5 Customer Review</span>
      </div>

      <p className={styles.paragraph}>
        {mainDescription}
      </p>

      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.labelInput}>Size</label>

          <ul className={styles.radioContainer}>
            <input type="radio" name="size" id="l" />
            <input type="radio" name="size" id="xl" />
            <input type="radio" name="size" id="xs" />
          </ul>
        </div>
        
        <div className={styles.inputContainer}>
          <label className={styles.labelInput}>Color</label>

          <ul className={styles.radioContainer}>
            <input type="radio" name="color" id="blue" />
            <input type="radio" name="color" id="black" />
            <input type="radio" name="color" id="brown" />
          </ul>
        </div>
      </div>

      <div className={styles.inputAndBtn}>
        <input type="number" id="qtd" defaultValue={1} min={1} className={styles.qtdInput} />

        <button type="button" className={styles.btn}>Add To Cart</button>
      </div>

      <hr className={styles.line} />

      <table>
        <tr className={styles.trTexts}>
          <td className={styles.tdText}>SKU</td>

          <td className={styles.tdText}>:</td>

          <td className={styles.tdText}>SS001</td>
        </tr>

        <tr className={styles.trTexts}>
          <td className={styles.tdText}>Category</td>

          <td className={styles.tdText}>:</td>

          <td className={styles.tdText}>Sofas</td>
        </tr>

        <tr className={styles.trTexts}>
          <td className={styles.tdText}>Tags</td>

          <td className={styles.tdText}>:</td>

          <td className={styles.tdText}>Sofa, Chair, Home, Shop</td>
        </tr>

        <tr className={styles.trTexts}>
          <td className={styles.tdText}>Share</td>

          <td className={styles.tdText}>:</td>

          <td className={styles.socialMedia}>
            <a href="http://facebook.com" target='_blank' rel='external noreferrer'>
              <img src={facebookIcon} alt="Facebook icon" />
            </a>

            <a href="http://linkedin.com" target='_blank' rel='external noreferrer'>
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>

            <a href="http://twitter.com" target='_blank' rel='external noreferrer'>
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
          </td>
        </tr>
      </table>
    </div>
  )
}
