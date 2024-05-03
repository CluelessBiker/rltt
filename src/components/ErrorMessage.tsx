import React, { FC } from 'react';
import styled from 'styled-components';

interface TextProps {
  align: string;
}

const StyledText = styled.p<TextProps>`
  color: var(--palette-primary-red);
  font-size: var(--typography-size-caption);
  text-align: ${(props) => props.align};
`;

type Props = {
  error: string;
  align?: string;
};

const ErrorMessage: FC<Props> = ({ error, align = 'left' }) => {
  return <StyledText align={align}>{error}</StyledText>;
};

export default ErrorMessage;
