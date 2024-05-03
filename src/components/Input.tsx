import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

const StyledInput = styled.input<InputProps>`
  padding: var(--spacing-1);
  padding-left: 37px;
  border-radius: var(--spacing-1);
  color: var(--palette-primary-purple);
  font-size: var(--typography-size-caption);
  caret-color: var(--palette-primary-green);
  font-family: var(--typography-face-primary);
  border: 1px solid var(--palette-primary-purple);
  border: ${(props) =>
    props.error
      ? '2px solid var(--palette-primary-red)'
      : '1px solid var(--palette-primary-purple)'};
`;

type Props = {
  type?: string;
  value: string;
  error?: string;
  ariaLabel: string;
  required?: boolean;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  type = 'text',
  value,
  error,
  onChange,
  ariaLabel,
  required = false,
  placeholder,
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      id={value as string}
      placeholder={placeholder}
      error={error ? true : false}
      aria-label={`${ariaLabel} input field`}
    />
  );
};

export default Input;
