import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ContentContainer } from './components/ContentContainer';
import { useCurrentUser } from './context/CurrentUserContext';

function App() {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate('/login');
  });

  return (
    <div className={'bodyContainer'}>
      <ContentContainer>
        <Routes>
          <Route path={'/'} element={<h1>home</h1>} />
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </ContentContainer>
    </div>
  );
}

export default App;
