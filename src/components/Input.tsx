import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

const StyledInput = styled.input<InputProps>`
  flex: 1;
  padding: var(--spacing-1);
  padding-left: 37px;
  border-radius: var(--spacing-1);
  color: var(--palette-primary-purple);
  font-size: var(--typography-size-caption);
  caret-color: var(--palette-primary-green);
  font-family: var(--typography-face-primary);
  border: ${(props) =>
    props.error
      ? '2px solid var(--palette-primary-red)'
      : '2px solid var(--palette-primary-purple)'};
  &.search {
    width: 100%;
    padding: var(--spacing-1);
    border-radius: var(--spacing-2);
    border: 2px solid var(--palette-primary-green);
  }
  &.todo {
    padding: var(--spacing-1);
    border: 2px solid var(--palette-primary-blue);
  }
`;

type Props = {
  type?: string;
  value: string;
  error?: string;
  variant?: string;
  ariaLabel: string;
  required?: boolean;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  type = 'text',
  value,
  error,
  variant,
  onChange,
  ariaLabel,
  required = false,
  placeholder,
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      className={variant}
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
