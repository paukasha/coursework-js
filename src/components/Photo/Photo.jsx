import React from 'react';
import st from './photo.m.css';
import '../Loader/spinner.m.css'
import { Link } from 'react-router-dom';
import Like from '../Like/Like';
import Spinner  from '../Loader/Spinner'

const Photo = ({photo, loading}) => {
  return (<div className={st.photoContent}>
      {loading ? <Spinner /> : <><Link to={`/coursework-js/photos/${photo.id}`} className={st.photoLink} />
        <img className={st.basePhoto} src={photo.urls.full} alt=""/>
        <Like  currentPhoto={photo}/>

        <div className={st.authorLink}>
        <a className={st.authorName}
        target='_blank'
        href={photo.user.links.html}>
        <img className={st.authorPhoto} src={photo.user.profile_image.medium} alt="author photo"/>
      {photo.user.name}</a>
        </div>
      </>
      }
    </div>
  );
};

export default Photo;

