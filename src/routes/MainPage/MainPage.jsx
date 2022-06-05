import React from 'react';
import st from './mainPage.m.css';


import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import '@import/swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination, Navigation, A11y]);
import {useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom';
import {unsplashAuthLink} from '../../redux/actions/auth';

function MainPage() {

  const photos = useSelector(state => state.mainPage.photos)
  return (<section>
      <div className={st.photosContainer}>
        <div className={st.mainContainer}>
          <Swiper pagination={{clickable: true,  dynamicBullets: true,
            dynamicMainBullets: 4}} spaceBetween={30} navigation={true}
                  slidesPerView={1}>
            {photos.map(el => {
                return (<SwiperSlide key={el.id}>
                  <img src={el.url} alt="main photo"/>
                  <span className={st.mainTitle}>Приложение для&nbsp;просмотра фотографий</span>
                </SwiperSlide>)
              })
            }

          </Swiper>
        </div>
      </div>

      <div className="container">
        <div className={st.aboutContainer}>
          <div className={st.about}>
            <h2 className={st.aboutTitle}>O нас</h2>
            <span className={st.aboutTitleText}>
          Это веб-приложение сделано для&nbsp;защиты дипломного проекта курс
          «JavaScript с&nbsp;нуля» профессия «Веб-разраотчик» от&nbsp;SkillBox.
        </span>
          </div>

          <div className={st.dosmth}>
            <h3 className={st.dosmthTitle}>В этом приложении вы можете:</h3>
            <ul className={st.dosmthList}>
              <li className={st.dosmthItem}>
                Посмотреть фотографии с сайта <a href="https://unsplash.com/"
                                                 className={st.unsplashLink}>unsplash.com</a>.
              </li>
              <li className={st.dosmthItem}>Посмотреть имя автора и дату публикации.</li>
              <li className={st.dosmthItem}>Поставить лайк понравившейся фотографии.</li>
            </ul>
          </div>
        </div>
        <div className={st.lookPhoto}>
          <span className={st.lookPhotoText}>Чтобы просмотреть ленту фотографий нажмите «Смотреть ленту»</span>
          <a href={unsplashAuthLink} className={st.lookPhotoButton}>Смотреть ленту</a>
        </div>
      </div>

    </section>
  );
}

export default MainPage