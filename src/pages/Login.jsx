import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <MyInput type='text' placeholder='Введите логин' />
            <MyInput type='text' placeholder='Введите пароль' />
            <MyButton>Войти</MyButton>
        </div>
    );
};

export default Login;
