import React, {useEffect} from 'react';
import st from './photoPage.m.css';
import {useParams, useNavigate} from 'react-router-dom';
import Like from '../../components/Like/Like';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPhoto} from '../../redux/actions/auth';

const PhotoPage = () => {
  const {photoId} = useParams(),
         dispatch = useDispatch(),
         navigate = useNavigate();

  const currentPhoto = useSelector(state => state.user.currentPhoto);
  const data =  currentPhoto?.promoted_at?.split('T')[0].split('-').reverse().join('.');

  const goBack = () => { navigate(-1)}

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



