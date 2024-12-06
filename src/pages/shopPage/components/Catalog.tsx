import { Options } from './products/Options'
import { Products } from './products/Products'
import styles from './Catalog.module.css'
import { useState } from 'react'

export const Catalog = () => {
  const [show, setShow] = useState<number>(16)

  return (
    <section className={styles.container}>
      <Options show={show} setShow={setShow} />

      <Products show={show} setShow={setShow} />
    </section>
  )
}
