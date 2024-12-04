import { Texts } from './Texts'
import { Form } from './Form'
import { Info } from './Info'
import styles from './TouchWithUs.module.css'

export const TouchWithUs = () => {
  return (
    <section className={styles.container}>
      <Texts />

      <div className={styles.formContainer}>
        <Info />

        <Form />
      </div>
    </section>
  )
}
