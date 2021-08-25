import React from "react";
import styles from './mainscreen.m.css';

import img1 from '@img/main-photo1.jpg';
import img2 from '@img/main-photo2.jpg';
import img3 from '@img/main-photo3.jpg';

import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import '@import/swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination, Navigation, A11y]);

export default function MainScreen() {
  const images = [
    {id: img1},
    {id: img2},
    {id: img3}
  ];
  return (
    <section className={styles.mainscreenContainer}>
      <div className={styles.mainContainer}>
        <Swiper pagination={{clickable: true}} spaceBetween={30} slidesPerView={1} loop>
          {images.map(img => <SwiperSlide key={img.id}>
            <img src={img.id} alt="main photo"/>
            <span className={styles.mainTitle}>Приложение для просмотра фотографий</span>
          </SwiperSlide>)}
        </Swiper>
        <h1 className="visually-hidden">Приложение для просмотра фотографий</h1>
      </div>
    </section>
  )
}