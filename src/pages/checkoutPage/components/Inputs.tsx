import { ComponentProps, useState } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormCheckout } from "../../../schema/FormCheckout";
import axios from "axios";
import styles from "./Inputs.module.css";

export type InputsType = ComponentProps<'input'> & ComponentProps<'span'> & {
  register: UseFormRegister<FormCheckout>;
  errors: FieldErrors<FormCheckout>;
  setValue: UseFormSetValue<FormCheckout>;
}

export const Inputs = ({ register, setValue, errors }: InputsType) => {
  const [zipCode, setZipCode] = useState<string>("");
  
  const searchZipCode = async (value: string) => {
    const zipCode = value.replace(/\D/g, "");
    if (zipCode.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${zipCode}/json/`
        );

        if (response.data.error) {
          console.error(`Error: ${response.data.error}`);
          return;
        }
        
        const { regiao, logradouro, localidade, uf } = response.data;
        setValue("country", regiao);
        setValue("street", logradouro);
        setValue("city", localidade);
        setValue("province", uf);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
  };

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
          type="text"
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
            value={zipCode}
            onChange={(e) => {
              const value = e.target.value;
              setZipCode(value);
              setValue("zipCode", value);
            }}
            onBlur={() => searchZipCode(zipCode)}
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
            onChange={(e) => {
              const value = e.target.value;
              setValue("country", value);
            }}
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
            onChange={(e) => {
              const value = e.target.value;
              setValue("street", value);
            }}
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
            onChange={(e) => {
              const value = e.target.value;
              setValue("city", value);
            }}
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
            onChange={(e) => {
              const value = e.target.value;
              setValue("province", value);
            }}
            className={styles.input}
          />

          {errors.province && (
            <span className={styles.errors}>{errors.province?.message}</span>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="addAddress" className={styles.label}>
          Add-on address
        </label>

        <input
          type="text"
          id="addAddress"
          {...register("addAddress")}
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
