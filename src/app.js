import React, {useEffect} from 'react';
import {Route, Routes, useNavigate, useSearchParams} from 'react-router-dom';
import './styles.css'
import MainPage from '@/routes/MainPage/MainPage';
import {useDispatch} from 'react-redux';
import {auth} from './redux/actions/auth';
import {getLocation, getPhotos} from './redux/actions/mainPage';
import ProfileContent from '@/routes/ProfileContent/ProfileContent';
import NotFound from '@/routes/NotFound/NotFound';
import PhotoPage from './routes/PhotoPage/PhotoPage';
import Layout from './components/Layout/Layout';

import {PrivateAuth} from './hoc/PrivateAuth'


const App = () => {
  const navigate = useNavigate(),
    [searchParams, setSearchParams] = useSearchParams(),
    dispatch = useDispatch();


  const codeSearchParam = searchParams.get('code')

  useEffect(() => {
    dispatch(auth(codeSearchParam, () => navigate('/photos'), {replace: true}))
    dispatch(getLocation())
    dispatch(getPhotos())
  }, [])


  return (<>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="photos" element={<PrivateAuth>
            <ProfileContent/>
          </PrivateAuth>}/>

          <Route path="photos/:photoId" element={<PrivateAuth>
            <PhotoPage/>
          </PrivateAuth>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
