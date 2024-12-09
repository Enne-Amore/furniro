import { useFormsCheckout } from "../../../hooks/UseFormsCheckout";
import styles from "./Inputs.module.css";

export const Inputs = () => {
  const { register, errors } = useFormsCheckout();

  return (
    <div className={styles.container}>
      <div className={styles.twoInputsContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName" className={styles.label}>
            First name
          </label>

          <div className={styles.withErrorsContainer}>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className={styles.input}
            />

            {errors.firstName && (
              <span className={styles.errors}>{errors.firstName?.message}</span>
            )}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="lastName" className={styles.label}>
            Last name
          </label>

          <div className={styles.withErrorsContainer}>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className={styles.input}
            />

            {errors.lastName && (
              <span className={styles.errors}>{errors.lastName?.message}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="company" className={styles.label}>
          Company Name (Optional)
        </label>

        <input
          type="email"
          id="company"
          {...register("company")}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="zipCode" className={styles.label}>
          ZIP code
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="text"
            id="zipCode"
            {...register("zipCode")}
            className={styles.input}
          />

          {errors.zipCode && (
            <span className={styles.errors}>{errors.zipCode?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="country" className={styles.label}>
          Country / Region
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="text"
            id="country"
            {...register("country")}
            className={styles.input}
          />

          {errors.country && (
            <span className={styles.errors}>{errors.country?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="street" className={styles.label}>
          Street address
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="text"
            id="street"
            {...register("street")}
            className={styles.input}
          />
          {errors.street && (
            <span className={styles.errors}>{errors.street?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="city" className={styles.label}>
          Town / City
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="text"
            id="city"
            {...register("city")}
            className={styles.input}
          />

          {errors.city && (
            <span className={styles.errors}>{errors.city?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="province" className={styles.label}>
          Province
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="text"
            id="province"
            {...register("province")}
            className={styles.input}
          />

          {errors.province && (
            <span className={styles.errors}>{errors.province?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="address" className={styles.label}>
          Add-on address
        </label>

        <input
          type="text"
          id="address"
          {...register("address")}
          className={styles.input}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>

        <div className={styles.withErrorsContainer}>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={styles.input}
          />

          {errors.email && (
            <span className={styles.errors}>{errors.email?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          id="addInfo"
          {...register("addInfo")}
          placeholder="Additional information"
          className={styles.input}
        />
      </div>
    </div>
  );
};
