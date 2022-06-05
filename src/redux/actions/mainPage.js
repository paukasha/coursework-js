import axios from 'axios';
import {setPhotos, setLocation} from '../mainPageReducer';

export const getPhotos = () => {
  let url =  'https://api.unsplash.com/photos/';
  return async dispatch => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`
        }
      })

      let photosUrl = [...res.data].map(el => {
        return {
          id: el.id,
          url: el.urls.full}
      })
      dispatch(setPhotos(photosUrl))

    } catch(e) {
      console.log(e)
    }
  }
}

export const getLocation = () => {
  let url = 'https://ipinfo.io?token=e2f6ce2220f5e9'
  return async dispatch => {
    try {
      const res = await axios.get(url)
      dispatch(setLocation(res.data.city))
    } catch (e) {
      console.log(e)
    }
  }
}