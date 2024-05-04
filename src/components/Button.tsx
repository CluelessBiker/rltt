import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  padding: string;
  isDisabled: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  text-transform: uppercase;
  border-radius: var(--spacing-2);
  color: var(--palette-primary-cotton);
  font-size: var(--typography-size-caption);
  font-weight: var(--typography-weight-bold);
  font-family: var(--typography-face-primary);
  background-color: var(--palette-primary-darkGrey);
  padding: ${(props) => props.padding};
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
`;

type Props = {
  text: string;
  padding?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, padding, disabled = false, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      isDisabled={disabled}
      padding={padding ? padding : 'var(--spacing-2)'}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
