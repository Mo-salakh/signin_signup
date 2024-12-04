import { useContext, useState } from 'react';
import { SignContext } from '../useContext';
import { TextInput } from './nameInput';

export function SignIn() {
  const context = useContext(SignContext);
  if (context === null) {
    throw new Error('Ошибка в useContext-e');
  }

  const { setIsError, signInValid } = context
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

function handleSubmitIn(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  let email = e.currentTarget.emailin.value;
  let password = e.currentTarget.passwordin.value;
  let loginData = { email, password };
  let isValid = signInValid(loginData);
  
  console.log(isValid);
  
  if (!isValid) {
    alert('Ошибка! Неправильно ввели логин или пароль');
    setIsError(true);
    setEmailError(true); // Установите состояние ошибки для email
    setPasswordError(true); // Установите состояние ошибки для пароля
  } else {
    setIsError(false);
    setEmailError(false); // Сбросьте состояние ошибки
    setPasswordError(false); // Сбросьте состояние ошибки
  }
}

return (
  <div className="signIn">
    <h1 className="signIn-title title">Вход</h1>
    <form onSubmit={handleSubmitIn} className='signin'>
      <TextInput
        label="Электронный адрес почты"
        placeHolder='Ваш электронный адрес почты'
        type='email'
        name='emailin'
        required
        error={emailError} // Передаем состояние ошибки
      />
      <TextInput
        label="Пароль"
        placeHolder='Ваш пароль'
        name='passwordin'
        type='password'
        required
        error={passwordError} // Передаем состояние ошибки
      />
      <button type="submit">Войти</button>
    </form>
  </div>
);
}
