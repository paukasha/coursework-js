import {setCurrentPhoto, setIsLoading, setOrDeleteLike, setStyleClass, setUser, setUserPhotos} from '../authReducer'
import {useParams, useSearchParams} from 'react-router-dom';
import axios from 'axios';
import {setPhotos} from '../mainPageReducer';


let oauthUrl = 'https://unsplash.com/oauth/token',
  client_id = 'avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo',
  client_secret = '5mvRrbXVYQDCpa7fYclguxWgFypVpz5ByKxI4CMAHoA',
  redirect_uri = 'https://paukasha.github.io/coursework-js/',
  code = '',
  grant_type = 'authorization_code',
  scope = 'public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections',
  response_type = 'code';
export const unsplashAuthLink = `https://unsplash.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`


export const setOrDeleteLikeByUser = (photo) => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
      try {
        if (photo.liked_by_user == false) {
          const res = await axios.post(`https://api.unsplash.com/photos/${photo.id}/like/`, null, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })

          dispatch(setOrDeleteLike(res.data.photo))
          dispatch(setCurrentPhoto(res.data.photo))
        } else {
              const res = await axios.delete(`https://api.unsplash.com/photos/${photo.id}/like/`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              })

          dispatch(setOrDeleteLike(res.data.photo))
          dispatch(setCurrentPhoto(res.data.photo))
        }

      } catch (e) {
        console.log(e)
      }

  }
}


export const getCurrentPhoto = (id) => {
  let accessToken = localStorage.getItem('accessToken')

  return async dispatch => {
    try {
        return await axios.get(`https://api.unsplash.com/photos/${id}`,  {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(res => {
         return  dispatch(setCurrentPhoto(res.data))
        })


    } catch (e) {
      console.log(e)
    }

  }
}

export const login = () => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
    if (accessToken) {
      try {
         await axios.get('https://api.unsplash.com/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(res => {
           dispatch(setUser(res.data))
         })

      } catch (e) {
        localStorage.removeItem('accessToken')
        console.log(e)
      }
    }
  }
}


export const auth = (codeSearchParam, cback) => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {

    if (codeSearchParam) {
      try {
       return await axios.post(oauthUrl, null, {
            params: {
              client_id: client_id,
              client_secret: client_secret,
              redirect_uri: redirect_uri,
              code: codeSearchParam,
              grant_type: 'authorization_code'
            }
          }
        ).then(response => {
          localStorage.setItem('accessToken', response.data.access_token)
          return axios.get('https://api.unsplash.com/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          }).then(response => {
            dispatch(setUser(response.data))
            cback()
          })
        })
      } catch (e) {
        localStorage.removeItem('accessToken')
        console.log(e)
      }
    } else if (accessToken) {
        dispatch(login())
    }
  }
}


export const getUserPhoto = (currentPage, isLoading) => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
    if (isLoading) {
      axios.get(`https://api.unsplash.com/photos/?page=${currentPage}&per_page=10`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res => {
        res.data.map(el => {
        })
        currentPage+= 1
        dispatch(setUserPhotos(res.data, currentPage, res.headers['x-total']))
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }
}


