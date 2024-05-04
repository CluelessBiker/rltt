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
  const [login, setLogin] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  useEffect(() => {
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, [login]);

  const onChange = (
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event?.target.value;
    let newErrors = { ...errors };

    switch (fieldName) {
      case 'username':
        if (value.length > 50) {
          newErrors = {
            ...newErrors,
            username: 'Username exceeds character limit',
          };
        } else {
          delete newErrors.username;
        }
        break;
      case 'password':
        if (value.length < 4) {
          newErrors = { ...newErrors, password: 'Password too short' };
        } else if (value.length > 16) {
          newErrors = { ...newErrors, password: 'Password too long' };
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);

    setLogin((oldValue) => ({
      ...oldValue,
      [fieldName]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });

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

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLogin();
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
        type={'username'}
        label={'username'}
        value={login.username}
        error={handleError('username')}
        placeholder={'user@rapptrlabs.com'}
        icon={<IconAccount color={'var(--palette-primary-green)'} />}
        onChange={(value) => onChange('username', value)}
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
        disabled={
          login.username === '' ||
          login.password === '' ||
          errors['username'] !== undefined ||
          errors['password'] !== undefined
        }
      />

      <ErrorMessage align={'center'} error={handleError('error')} />
    </>
  );
};

export default LoginPage;
