import styles from './Inputs.module.css'

export const Inputs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.twoInputsContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName" className={styles.label}>First name</label>
          
          <input type="text" id='firstName' className={styles.input} />
        </div>
        
        <div className={styles.inputContainer}>
          <label htmlFor="lastName" className={styles.label}>Last name</label>
          
          <input type="text" id='lastName' className={styles.input} />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="company" className={styles.label}>Company Name (Optional)</label>

        <input type="email" id='company' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="code" className={styles.label}>ZIP code</label>

        <input type="text" id='code' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="contry" className={styles.label}>Country / Region</label>

        <input type="text" id='contry' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="street" className={styles.label}>Street address</label>

        <input type="text" id='street' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="city" className={styles.label}>Town / City</label>

        <input type="text" id='city' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="province" className={styles.label}>Province</label>

        <input type="text" id='province' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="address" className={styles.label}>Add-on address</label>

        <input type="text" id='address' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email address</label>

        <input type="email" id='email' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <input type="text" id='addInfo' placeholder='Additional information' className={styles.input} />
      </div>

      <button type="submit" className={styles.btn}>Submit</button>
    </div>
  )
}
