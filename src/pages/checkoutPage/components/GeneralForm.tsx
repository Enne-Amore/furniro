import { Inputs } from './Inputs'
import { PurchaseDetails } from './PurchaseDetails'
import styles from './GeneralForm.module.css'

export const GeneralForm = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Billing details</h1>

      <form className={styles.generalFormContainer}>
        <Inputs />

        <PurchaseDetails />
      </form>
    </section>
  )
}
