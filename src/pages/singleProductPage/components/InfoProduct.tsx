import stars from '../../../assets/stars.png';
import facebookIcon from '../icons/facebook.svg';
import linkedinIcon from '../icons/linkedin.svg';
import twitterIcon from '../icons/twitter.svg';
import styles from './InfoProduct.module.css'

export const InfoProduct = () => {
  return (
    <div className={styles.container}>
      <h1>Asgaard sofa</h1>

      <span>Rs. 250,000.00</span>

      <div>
        <img src={stars} alt="4.5 stars" />

        <span>5 Customer Review</span>
      </div>

      <p>
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
      </p>

      <div>
        <div>
          <label>Size</label>

          <ul>
            <input type="radio" name="size" id="l" />
            <input type="radio" name="size" id="xl" />
            <input type="radio" name="size" id="xs" />
          </ul>
        </div>
        
        <div>
          <label>Color</label>

          <ul>
            <input type="radio" name="color" id="blue" />
            <input type="radio" name="color" id="black" />
            <input type="radio" name="color" id="brown" />
          </ul>
        </div>
      </div>

      <input type="number" id="qtd" />

      <button type="button">Add To Cart</button>

      <hr />

      <table>
        <tr>
          <td>SKU</td>

          <td>:</td>

          <td>SS001</td>
        </tr>

        <tr>
          <td>Category</td>

          <td>:</td>

          <td>Sofas</td>
        </tr>

        <tr>
          <td>Tags</td>

          <td>:</td>

          <td>Sofa, Chair, Home, Shop</td>
        </tr>

        <tr>
          <td>Share</td>

          <td>:</td>

          <td>
            <a href="http://facebook.com">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>

            <a href="http://linkedin.com">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>

            <a href="http://twitter.com">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
          </td>
        </tr>
      </table>
    </div>
  )
}
