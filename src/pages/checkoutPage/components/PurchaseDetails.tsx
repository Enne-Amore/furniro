import styles from './PurchaseDetails.module.css'
import { TableData } from './TableData'
import { RadioInputs } from './RadioInputs'

export const PurchaseDetails = () => {
  return (
    <div className={styles.container}>
      <TableData />

      <hr className={styles.line} />

      <RadioInputs />
    </div>
  )
}
