import { ComponentProps } from 'react'
import styles from './WherePage.module.css'

export type WherePageData = ComponentProps<'h1'> & ComponentProps<'span'> & {
  namePage: string;
}

export const WherePage = ({ namePage }: WherePageData) => {
  return (
    <article className={styles.container}>
      <h1 className={styles.namePage}>{namePage}</h1>

      <span className={styles.way}>
        <strong>Home {'>'} </strong>

        <span>{namePage}</span>
      </span>
    </article>
  )
}
