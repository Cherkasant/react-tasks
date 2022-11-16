import React, { FC, ChangeEvent } from 'react';

import styles from './Input.module.css';
import classNames from 'classnames';
import { useThemeContext } from '../../Context/Theme';
import { Theme } from '../../Constants/@types';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
  className?: string;
  type?: string;
};

const Input: FC<InputProps> = (props) => {
  const {
    value,
    onChange,
    placeholder,
    disabled,
    title,
    error,
    className,
    type,
  } = props;
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const { theme } = useThemeContext();
  return (
    <div className={styles.container}>
      {title && (
        <div
          className={classNames(styles.title, {
            [styles.darkContainer]: theme === Theme.Dark,
          })}
        >
          {title}
        </div>
      )}
      <input
        className={classNames(className, styles.input)}
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
