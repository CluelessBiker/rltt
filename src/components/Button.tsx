import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isDisabled: boolean;
}

const Buttons = styled.button<ButtonProps>`
  border: none;
  text-transform: uppercase;
  padding: var(--spacing-2);
  border-radius: var(--spacing-2);
  color: var(--palette-primary-cotton);
  font-size: var(--typography-size-caption);
  font-weight: var(--typography-weight-bold);
  font-family: var(--typography-face-primary);
  background-color: var(--palette-primary-darkGrey);
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
`;

type Props = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, disabled = false, onClick }) => {
  return (
    <Buttons onClick={onClick} disabled={disabled} isDisabled={disabled}>
      {text}
    </Buttons>
  );
};

export default Button;
