import React from 'react';
import st from './footer.m.css';
import logo from '@img/logo-footer.png';

const Footer = () => {
  return (<footer className={st.footer}>
      <div className={st.container}>
        <div className={st.footerTop}>
          <div className={st.contacts}>
            <span>Контакты</span>
            <ul className={st.contactsList}>
              <li className={st.listItemTel}><a href="tel:+79144233022">+7(914)-423-30-22</a></li>
              <li className={st.listItemMail}><a href="email:pd_pavl@mail.ru">pd_pavl@mail.ru</a></li>
            </ul>
          </div>

          <img src={logo} alt={logo}/>

          <div className={st.social}>
            <span className={st.inSocialText}>Мы в соцсетях</span>
            <ul className={st.socialList}>
              <li className={st.socialLostItem}>
                <a href="https://vk.com/id30847399" className={[st.link, st.vk].join(' ')}>
                </a>
              </li>
              <li className={st.socialLostItem}>
                <a href="https://www.google.com/" className={[st.link, st.google].join(' ')}>
                </a>
              </li>
              <li className={st.socialLostItem}>
                <a href="https://ok.ru/" className={[st.link, st.ok].join(' ')}>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={st.footerBottom}>
        <small className={st.footerCopy}>
          ©2022 Pavlenko Darya
        </small>
      </div>
    </footer>
  )
};

export default Footer;