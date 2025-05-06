import React from 'react';
import MyInput from "../myInput/MyInput.jsx";
import MyButton from "../myButton/MyButton.jsx";
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="loginForm">
            <MyInput name="login" type="text" placeholder="Введите логин" label="login"/>
            <MyInput name="email" type="email" placeholder="Ведите мейл" label="email"/>
            <MyInput name="password" type="password" placeholder="Введите пароль" label="password"/>
            <MyButton type='submit' text='Login'/>
        </div>
    );
}

export default LoginForm;