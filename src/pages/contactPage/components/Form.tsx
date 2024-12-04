import styles from './Form.module.css'

export const Form = () => {
  return (
    <form className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Your name</label>

        <input type="text" id='name' placeholder='Abc' className={styles.input} /> 
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email address</label>

        <input type="email" id='email' placeholder='Abc@def.com' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="subject" className={styles.label}>Subject</label>

        <input type="text" id='subject' placeholder='This is an optional' className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="message" className={styles.label}>Message</label>

        <input type="text" id='message' placeholder='Hi! i’d like to ask about' className={styles.input} />
      </div>

      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  )
}
