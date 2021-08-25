import React from 'react';

import styles from '@components/Content/content.m.css';


export default function Content() {
  return (
      <div className="container">
        <section className={styles.aboutContainer}>
          <div className={styles.about}>
            <h2 className={styles.aboutTitle}>O нас</h2>
            <span className={styles.aboutTitleText}>
          Это веб-приложение сделано для&nbsp;защиты дипломного проекта курс
          «JavaScript с&nbsp;нуля» профессия «Веб-разраотчик» от&nbsp;SkillBox.
        </span>
          </div>

          <div className={styles.dosmth}>
            <h3 className={styles.dosmthTitle}>В этом приложении вы можете:</h3>
            <ul className={styles.dosmthList}>
              <li className={styles.dosmthItem}>
                Посмотреть фотографии с сайта <a href="https://unsplash.com/" className={styles.unsplashLink}>unsplash.com</a>.</li>
              <li className={styles.dosmthItem}>Посмотреть имя автора и дату публикации.</li>
              <li className={styles.dosmthItem}>Поставить лайк понравившейся фотографии.</li>
            </ul>
          </div>
        </section>
        <section className={styles.lookPhoto}>
          <span className={styles.lookPhotoText}>Чтобы просмотреть ленту фотографий нажмите «Смотреть ленту»</span>
          <button className={styles.lookPhotoButton}>Смотреть ленту</button>
        </section>
      </div>
  )
}
