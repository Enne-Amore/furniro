import { Options } from './products/Options'
import { Products } from './products/Products'
import { useState } from 'react'
import { Pagination } from './products/Pagination'
import styles from './Catalog.module.css'

export const Catalog = () => {
  const [show, setShow] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalProducts = 32;
  const startingPosition = (currentPage - 1) * show;

  return (
    <section className={styles.container}>
      <Options show={show} setShow={setShow} />

      <Products show={show} setShow={setShow} startingPosition={startingPosition} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(totalProducts / show)}
      />
    </section>
  )
}
