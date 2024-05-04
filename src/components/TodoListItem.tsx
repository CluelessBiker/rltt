import React, { ChangeEvent, FC } from 'react';
import IconButton from './IconButton';
import IconEdit from '../assets/svgs/IconEdit';
import IconDelete from '../assets/svgs/IconDelete';
import { InnerContainer } from './InnerContainer';
import TodoAddEditItem from './TodoAddEditItem';

type Props = {
  item: string;
  value: string;
  error: string;
  editable: boolean;
  handleEdit: () => void;
  handleDelete: () => void;
  handleUpdate: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TodoListItem: FC<Props> = ({
  error,
  item,
  value,
  editable,
  onChange,
  handleEdit,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      {!editable && (
        <InnerContainer className={'padded'}>
          <p>{item}</p>
          <InnerContainer>
            <IconButton
              icon={<IconEdit />}
              onClick={handleEdit}
              variant={'secondary'}
            />
            <IconButton
              icon={<IconDelete />}
              variant={'secondary'}
              onClick={handleDelete}
            />
          </InnerContainer>
        </InnerContainer>
      )}
      {editable && (
        <TodoAddEditItem
          value={value}
          error={error}
          edit={editable}
          onChange={onChange}
          handleSave={handleUpdate}
        />
      )}
    </>
  );
};

export default TodoListItem;
