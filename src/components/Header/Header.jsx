import React from 'react';
import  st from './header.m.css';
import logo from '@img/logo.png';
import Location from '@/components/Header/Location/Location';
import SignIn from '@/components/Header/Signin/Signin';
import Profile from '@/components/Profile/Profile';
import {useSelector} from 'react-redux';

const Header = () => {

  const isAuth = useSelector(state => state.user.isAuth)

  return (<div className='container'>
        <header className={st.header}>
          <img src={logo} className={st.logo} alt="logo" />
          <nav>
            <ul className={st.list}>
              <li><a className={st.link} href="#">О нас</a></li>
              <li><a className={st.link} href="#">Контакты</a></li>
            </ul>
          </nav>
          <Location />
          {isAuth ? <Profile /> : <SignIn />}
        </header>
      </div>
  )
};

export default Header;