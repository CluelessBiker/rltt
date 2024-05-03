import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  top: 27px;
  left: 8px;
  padding: 0;
  border: none;
  position: absolute;
  background-color: transparent;
`;

type Props = {
  icon: ReactNode;
  onClick: () => void;
};

const IconButton: FC<Props> = ({ icon, onClick }) => {
  return <StyledButton onClick={onClick}>{icon}</StyledButton>;
};

export default IconButton;
