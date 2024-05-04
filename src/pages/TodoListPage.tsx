import React, { ChangeEvent, useEffect, useState } from 'react';
import { ContentContainer } from '../components/ContentContainer';
import { Todo } from '../types/Todo';
import TodoListItem from '../components/TodoListItem';
import SearchInput from '../components/SearchInput';
import { InnerContainer } from '../components/InnerContainer';
import Button from '../components/Button';
import TodoAddEditItem from '../components/TodoAddEditItem';

const TodoListPage = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [updateItem, setUpdateItem] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [displayInput, setDisplayInput] = useState<boolean>(false);
  const [item, setItem] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [errorEdit, setErrorEdit] = useState<string>('');

  /** CHECK LOCAL STORAGE FOR PREVIOUSLY SAVED TODO LIST */
  useEffect(() => {
    const storage = localStorage.getItem('TodoList');
    const savedList = storage ? JSON.parse(storage) : null;
    if (!savedList) return;
    setList(savedList);
  }, []);

  /** CREATE NEW LIST ITEM */
  const handleNewTodo = () => {
    if (item.length > 25) {
      setError('Character limit is 25');
    } else if (item.length < 1) {
      setError('You must enter a task name');
    } else {
      const todo: Todo = {
        item: item,
        editable: false,
        id: Date.now().toString(),
      };
      setList([...list, todo]);
      handleUpdateStorage([...list, todo]);
      setDisplayInput(false);
      setItem('');
    }
  };

  /** UPDATE OBJECT KEY/VALUE PAIR TO MAKE ITEM EDITABLE */
  const handleEdit = (object: Todo) => {
    const updatedObject = list.map((data: Todo) => ({
      ...data,
      editable: data.id === object.id ? true : false,
    }));
    setUpdateItem(object.item);
    setList(updatedObject);
  };

  /** SAVE UPDATED LIST ITEM */
  const handleUpdate = (id: string) => {
    if (updateItem.length === 0) {
      setErrorEdit('You must enter a task name');
      return;
    }
    if (updateItem.length > 25) {
      setErrorEdit('Character limit is 25');
      return;
    }
    const updatedObject = list.map((data: Todo) =>
      data.id === id ? { ...data, item: updateItem, editable: false } : data,
    );
    setUpdateItem('');
    setList(updatedObject);
    handleUpdateStorage(updatedObject);
    setErrorEdit('');
  };

  /** DELETE LIST ITEM */
  const handleDelete = (id: string) => {
    const updatedList = list.filter((list) => list.id !== id);
    setList(updatedList);
    handleUpdateStorage(updatedList);
  };

  /** UPDATE LOCAL STORAGE WITH UPDATED LIST */
  const handleUpdateStorage = (array: Todo[]) => {
    localStorage.setItem('TodoList', JSON.stringify(array));
  };

  /** SEARCH LIST ITEMS */
  const searchList: Todo[] = list.filter((list: Todo) =>
    list.item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h2>My To-Do List</h2>
      <InnerContainer>
        <SearchInput
          value={search}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
        <Button
          padding={'var(--spacing-1)'}
          text={displayInput ? 'cancel' : 'new'}
          onClick={() => setDisplayInput(!displayInput)}
        />
      </InnerContainer>
      {displayInput && (
        <TodoAddEditItem
          value={item}
          error={error}
          handleSave={handleNewTodo}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setItem(event.target.value)
          }
        />
      )}
      <ContentContainer className={'outlined'}>
        {searchList.length > 0 &&
          searchList.map((data: Todo) => (
            <TodoListItem
              key={data.id}
              item={data.item}
              error={errorEdit}
              value={updateItem}
              editable={data.editable}
              handleEdit={() => handleEdit(data)}
              handleDelete={() => handleDelete(data.id)}
              handleUpdate={() => handleUpdate(data.id)}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUpdateItem(event.target.value)
              }
            />
          ))}
      </ContentContainer>
    </>
  );
};

export default TodoListPage;
