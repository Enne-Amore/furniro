import { Form } from './Form'
import { PurchaseDetails } from './PurchaseDetails'
import styles from './InfoAll.module.css'

export const InfoAll = () => {
  return (
    <section className={styles.container}>
      <h1>Billing details</h1>

      <div>
        <Form />

        <PurchaseDetails />
      </div>
    </section>
  )
}
