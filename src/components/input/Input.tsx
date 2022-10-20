import React, { FC, ChangeEvent } from 'react';

//@ts-ignore
import styles from './Input.module.css';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
};

const Input: FC<InputProps> = (props) => {
  const { value, onChange, placeholder, disabled, title, error } = props;
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}
      <input
        className={styles.input}
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
