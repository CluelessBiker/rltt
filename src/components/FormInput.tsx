import React, { ChangeEvent, FC, ReactNode } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import InputLabel from './InputLabel';
import IconButton from './IconButton';

const InputBox = styled.div`
  display: flex;
  position: relative;
  gap: var(--spacing-1);
  flex-direction: column;
`;

type Props = {
  type?: string;
  label: string;
  value: string;
  error?: string;
  icon: ReactNode;
  required?: boolean;
  placeholder: string;
  onViewPassword?: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<Props> = ({
  type = 'text',
  icon,
  label,
  value,
  error,
  onChange,
  placeholder,
  required = false,
  onViewPassword,
}) => {
  return (
    <InputBox>
      <InputLabel htmlFor={value as string} label={label} required={required} />
      <Input
        type={type}
        value={value}
        error={error}
        ariaLabel={label}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
      <IconButton
        icon={icon}
        onClick={onViewPassword ? onViewPassword : () => console.log()}
      />

      {error && <ErrorMessage error={error} />}
    </InputBox>
  );
};

export default FormInput;
