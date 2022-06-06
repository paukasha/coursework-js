import React from 'react';
import './like.m.css';
import like from '@/img/svg/heart.svg';
import {setOrDeleteLikeByUser} from '../../redux/actions/auth';
import {useDispatch} from 'react-redux';

const Like = ({currentPhoto}) => {
  const dispatch = useDispatch();
  let setLikeClassName = '';
  if (currentPhoto.liked_by_user) {
    setLikeClassName += 'likeByUser'
  }
  return (<div className={'photoLike '+setLikeClassName} onClick={() => dispatch(setOrDeleteLikeByUser(currentPhoto))}>
      <img  src={like} alt='like' />
      <span>{currentPhoto.likes}</span>
    </div>
  );
};

export default Like;