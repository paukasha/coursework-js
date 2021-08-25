import React from 'react';
import styles from './header.m.css';
import logo from '@img/logo.png';
import Location from '@components/Header/Location/Location';
import SignIn from '@components/Header/Signin/Signin';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><a className={styles.link} href="#">О нас</a></li>
          <li><a className={styles.link} href="#">Контакты</a></li>
        </ul>
      </nav>
      <Location />
      <SignIn />
    </header>
  )
}