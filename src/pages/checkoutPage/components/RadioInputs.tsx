import styles from "./RadioInputs.module.css";

export const RadioInputs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.radioAndParagraphContainer}>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="directBank"
            name="pay"
            checked
            className={styles.input}
          />

          <label htmlFor="directBank" className={styles.label}>
            Direct Bank Transfer
          </label>
        </div>

        <p className={styles.aboutOption}>
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
      </div>

      <div className={styles.radioContainer}>
        <input
          type="radio"
          id="directBankTransfer"
          name="pay"
          className={styles.input}
        />

        <label htmlFor="directBankTransfer" className={`${styles.label} ${styles.otherLabel}`}>
          Direct Bank Transfer
        </label>
      </div>

      <div className={styles.radioContainer}>
        <input
          type="radio"
          id="cashDelivery"
          name="pay"
          className={styles.input}
        />

        <label htmlFor="cashDelivery" className={`${styles.label} ${styles.otherLabel}`}>
          Cash On Delivery
        </label>
      </div>

      <p className={styles.paragraph}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <strong>privacy policy.</strong>
      </p>

      <button type="submit" className={styles.btn}>
        Place order
      </button>
    </div>
  );
};
