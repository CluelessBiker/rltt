import React, { ChangeEvent, FC } from 'react';
import Input from './Input';
import IconButton from './IconButton';
import IconSearch from '../assets/svgs/IconSearch';
import styled from 'styled-components';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <StyledDiv>
      <Input
        value={value}
        variant={'search'}
        onChange={onChange}
        placeholder={'search'}
        ariaLabel={'search bar'}
      />
      <IconButton
        variant={'search'}
        icon={<IconSearch />}
        onClick={() => console.log}
      />
    </StyledDiv>
  );
};

export default SearchInput;
