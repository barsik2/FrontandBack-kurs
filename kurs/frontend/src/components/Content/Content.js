import React, {useState} from 'react';
import './content.css'

const Content = () => {

    const user = {
        name: 'arslan.bovaeff@gmail.com',
        pass: '1234'
    };

    const news1 = {
        id: 1,
        articleName: 'Новость 1',
        textNews: 'Новость о спрорте'
    };


    const news2 = {
        id: 2,
        articleName: 'Торговый бот на Node.js и Tinkoff API (Часть 2) Кластеры',
        textNews: 'В этой части статьи про торгового бота мы сначала посмотрим на алгоритм сравнения двух комбинаций, а потом на разные методы сбора комбинаций в кластеры. Разберем как работает сам метод сбора кластеров и некоторые вспомогательные функции. Увидим как меняется формат данных после обработки разными методами.'
    };

    const arrayNews = [news1, news2];





    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [isAuth, setIsAuth] = useState(true); // false
       

    //input email
    const handleChangeEmail = (e) => {
        setEmailText(e.target.value);
    };
      

    // input password
    const handleChangePassword = (e) => {
        setPasswordText(e.target.value);
    };
      

    // button sing in
    const btnSingIn = () => {
        console.log( `sing in; email: ${emailText}; password: ${passwordText}`);

        if(emailText === user.name && passwordText === user.pass)
        {
            setIsAuth(true);
        }
        else {
            alert('Такого пользователя не существует! Зарегистрируйтесь')
        }
    
        const data = {login: emailText, password: passwordText}
      
        fetch('/login', {data: data});
    };
      

    // button registration
    const btnRegistration = () => {
        console.log( `Registration; email: ${emailText}; password: ${passwordText}`);
    };


    //button exit
    const btnExit = () => {
        setIsAuth(false);
    };


    return (
        <div className='content'>
            {!isAuth && (
                <div>
                    <p className='textEmailForm'>Введите электронную почту</p><input
                    className='emailForm'
                    type='text'
                    placeholder='Введите email'
                    value={emailText}
                    onChange={handleChangeEmail} /><p className='textPassword'>Введите пароль</p><input
                        className='passwordForm'
                        type='password'
                        placeholder='Введите пароль'
                        value={passwordText}
                        onChange={handleChangePassword} /><div className='buttons1'>
                        <button
                            className='signIn'
                            onClick={btnSingIn}
                            disabled={!emailText || !passwordText}
                        >
                            Войти
                        </button>
                    </div><div className='buttons2'>
                        <button
                            className='logIn'
                            onClick={btnRegistration}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
            )}
            
          {isAuth && (
              <div className='authConteiner'>
                    <div className='newsContainer'>
                        <div className = 'news1'>
                        <p className='newsTitle'>
                            Последняя новость о JavaScript
                        </p>
                        <div className='newsContent'>
                        26 октября 2021 года вышел новый релиз Node.JS 16.13.0 который стал Active LTS. Как мы переводили на него наш сервис мониторинга и анализа логов PostgreSQL и с какими проблемами столкнулись — в статье ниже.
                        </div>
                        <img
                                src = 'imageNews1.png'
                                alt='JavaScript'
                              />
                        </div>
                        <div className = 'news2'>
                              <p className='newsTitle2'>
                                  Торговый бот на Node.js и Tinkoff API (Часть 2) Кластеры
                              </p>
                              <div className='newsContent2'>
                                  В этой части статьи про торгового бота мы сначала посмотрим на алгоритм сравнения двух комбинаций, а потом на разные методы сбора комбинаций в кластеры. Разберем как работает сам метод сбора кластеров и некоторые вспомогательные функции. Увидим как меняется формат данных после обработки разными методами.
                              </div>
                              <div>
                                  <img 
                                      src = 'imageNews2.png'
                                      className='newsImage2'
                                      alt = 'NodeJs'
                                  />
                              </div>
                      </div>
                    </div>
                        <div>
                        <button 
                            className='btnExit'
                            onClick={btnExit}
                        >
                        Выйти
                        </button>
                        </div>
              </div> 
          )}
      </div>
      
    )
}

export default Content