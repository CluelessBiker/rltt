import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  top: 27px;
  left: 8px;
  padding: 0;
  border: none;
  position: absolute;
  background-color: transparent;
  &.secondary {
    position: static;
  }
  &.search {
    top: 5px;
    right: 11px;
    width: 20px;
    left: initial;
  }
`;

type Props = {
  icon: ReactNode;
  variant?: string;
  onClick: () => void;
};

const IconButton: FC<Props> = ({ icon, onClick, variant }) => {
  return (
    <StyledButton className={variant} onClick={onClick}>
      {icon}
    </StyledButton>
  );
};

export default IconButton;
