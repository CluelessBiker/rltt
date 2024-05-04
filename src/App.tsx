import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ContentContainer } from './components/ContentContainer';
import {
  useCurrentUser,
  useSetCurrentUser,
} from './context/CurrentUserContext';
import Button from './components/Button';
import TodoListPage from './pages/TodoListPage';

function App() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate('/login');
  });

  return (
    <div className={'bodyContainer'}>
      <ContentContainer>
        {currentUser && (
          <div className={'logoutButton'}>
            <Button
              text={'logout'}
              padding={'var(--spacing-1)'}
              onClick={() => setCurrentUser?.(null)}
            />
          </div>
        )}
        <Routes>
          <Route path={'/'} element={<TodoListPage />} />
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </ContentContainer>
    </div>
  );
}

export default App;
