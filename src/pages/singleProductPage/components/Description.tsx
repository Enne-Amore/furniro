import exampleImg from '../../../assets/img-example-description.png';
import styles from './Description.module.css'

export const Description = () => {
  return (
    <article className={styles.container}>
      <div className={styles.titlesContainer}>
        <h2 className={styles.mainTitle}>Description</h2>

        <span className={styles.secundaryTitle}>Additional Information</span>
      </div>

      <p className={styles.paragraph}>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>

      <p className={styles.paragraph}>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </p>

      <div className={styles.imgsContainer}>
        <figure className={styles.exampleImg}>
          <img src={exampleImg} alt="" />
        </figure>
        
        <figure className={styles.exampleImg}>
          <img src={exampleImg} alt="" />
        </figure>
      </div>
    </article>
  )
}
