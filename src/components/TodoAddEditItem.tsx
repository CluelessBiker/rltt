import React, { ChangeEvent, FC } from 'react';
import { InnerContainer } from './InnerContainer';
import Button from './Button';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import IconSave from '../assets/svgs/IconSave';
import IconButton from './IconButton';

type Props = {
  value: string;
  error: string;
  edit?: boolean;
  handleSave: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TodoAddEditItem: FC<Props> = ({
  value,
  edit = false,
  error,
  onChange,
  handleSave,
}) => {
  return (
    <>
      <InnerContainer>
        <Input
          value={value}
          error={error}
          variant={'todo'}
          onChange={onChange}
          ariaLabel={'add todo item'}
          placeholder={'e.g. cook dinner'}
        />
        {!edit && (
          <Button
            text={'save'}
            onClick={handleSave}
            padding={'var(--spacing-1)'}
          />
        )}
        {edit && (
          <IconButton
            icon={<IconSave />}
            onClick={handleSave}
            variant={'secondary'}
          />
        )}
      </InnerContainer>
      {error && <ErrorMessage error={error} align={'center'} />}
    </>
  );
};

export default TodoAddEditItem;
