import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  text-transform: uppercase;
  font-size: var(--typography-size-caption);
  font-family: var(--typography-face-primary);
`;

type Props = {
  label: string;
  htmlFor: string;
  required?: boolean;
};

const InputLabel: FC<Props> = ({ label, htmlFor, required = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor as string}>
      {label}
      {required && ' *'}
    </StyledLabel>
  );
};

export default InputLabel;
