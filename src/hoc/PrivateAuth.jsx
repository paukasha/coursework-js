import React from 'react';
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux';

const PrivateAuth = ({children}) => {
  const isAuth = useSelector(state => state.user.currentUser)
  if (!isAuth) {
    return (<Navigate to='/' />)
  }
  return   children

};

export {PrivateAuth};