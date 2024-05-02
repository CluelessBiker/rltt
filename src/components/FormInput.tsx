import React, { ChangeEvent, FC } from 'react';
import styles from '../styles/FormInput.module.css';

type Props = {
  type?: string;
  label: string;
  error?: string;
  required?: boolean;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<Props> = ({
  type = 'text',
  label,
  value,
  error,
  onChange,
  required = false,
}) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputLabel} htmlFor={value as string}>
        {label}
        {required && ' *'}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        id={value as string}
        className={styles.input}
        aria-label={`${label} input field`}
      />
      {error && <p className={styles.inputP}>{error}</p>}
    </div>
  );
};

export default FormInput;
