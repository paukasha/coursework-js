import React, {useEffect, useState} from 'react';
import st from './photoPage.m.css';
import like from '../../img/svg/heart.svg';
import {useParams, useNavigate, useSearchParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import {dateFormat} from '@/helpers/dateFormat';
import Like from '../../components/Like/Like';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPhoto, setIsLoading} from '../../redux/authReducer';
import {getCurrentPhoto} from '../../redux/actions/auth';

const PhotoPage = () => {
  let {photoId} = useParams();
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const isAuth = useSelector(state => state.user.isAuth)
  const goBack = () => { navigate(-1)}

  const currentPhoto = useSelector(state => state.user.currentPhoto)
  let data =  currentPhoto?.promoted_at?.split('T')[0].split('-').reverse().join('.')
  useEffect(() => {
    dispatch(getCurrentPhoto(photoId))

  },[])

  return (<div className='container'>
      <button onClick={goBack} className={'btn-reset ' + st.backBtn}>Вернуться назад</button>
      <div className={st.fullPhotoWrapper}>
        <img src={currentPhoto?.urls?.raw} alt=""/>
        <div className={st.fullPhotoInfo}>
          <div className={st.fullPhotoDescr}>
            <span className={st.fullPhotoDescr}>Автор</span>
            <br/>
            <a target="_blanks" href={currentPhoto.user?.links.html}>{currentPhoto?.user?.name}</a></div>
          <div className={st.fullPhotoDescr}>
            <span>Дата публикации</span>
            <br/>
            <span className={st.dateOfCreated}>{data}</span>
          </div>
          <div className={`${st.fullPhotoDescr} ${st.fullPhotoLikeBlock}`}>
            <Like currentPhoto={currentPhoto}/>
          </div>

        </div>
      </div>


    </div>
  );
};

export default PhotoPage;



