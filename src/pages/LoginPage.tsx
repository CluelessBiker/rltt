import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import IconAccount from '../assets/svgs/IconAccount';
import IconClosedEye from '../assets/svgs/IconClosedEye';
import IconEye from '../assets/svgs/IconEye';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import { useSetCurrentUser } from '../context/CurrentUserContext';
import { User } from '../types/User';

const LoginPage = () => {
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<any>({});
  const [viewPass, setViewPass] = useState<boolean>(false);
  const [login, setLogin] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  useEffect(() => {
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, []);

  const onChange = (
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event?.target.value;
    setLogin((oldValue) => ({
      ...oldValue,
      [fieldName]: value,
    }));
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLogin();
    }
  };

  const handleLogin = () => {
    if (login.password.length > 4 && login.password.length < 16) {
      setErrors({});
      handleAPIRequest();
    }
    if (!login.email.includes('@')) {
      setErrors({ email: 'Please enter a valid email address' });
    }
    if (login.password.length < 4) {
      setErrors({ password: 'Password too short' });
    }
    if (login.password.length > 16) {
      setErrors({ password: 'Password too long' });
    }
  };

  const handleAPIRequest = async () => {
    try {
      const response = await fetch(
        'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(login),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data: User = await response.json();
      if (data) {
        setCurrentUser?.(data);
        navigate('/');
      }
    } catch (error: any) {
      setErrors({ error: error.message });
    }
  };

  const handleError = (data: any) => {
    if (!errors) return '';
    const found = errors[data];
    return found ? found : undefined;
  };

  return (
    <>
      <h2>Rapptr Labs</h2>
      <FormInput
        required
        type={'email'}
        label={'email'}
        value={login.email}
        error={handleError('email')}
        placeholder={'user@rapptrlabs.com'}
        icon={<IconAccount color={'var(--palette-primary-green)'} />}
        onChange={(value) => onChange('email', value)}
      />
      <FormInput
        required
        label={'password'}
        value={login.password}
        error={handleError('password')}
        type={viewPass ? 'text' : 'password'}
        placeholder={'Must be at least 4 characters'}
        onViewPassword={() => setViewPass(!viewPass)}
        icon={
          viewPass ? (
            <IconEye color={'var(--palette-primary-green)'} />
          ) : (
            <IconClosedEye color={'var(--palette-primary-green)'} />
          )
        }
        onChange={(value) => onChange('password', value)}
      />

      <Button
        text={'sign in'}
        onClick={handleLogin}
        disabled={login.email === '' || login.password === ''}
      />

      <ErrorMessage align={'center'} error={handleError('error')} />
    </>
  );
};

export default LoginPage;
