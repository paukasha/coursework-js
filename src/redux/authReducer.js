const AUTH = 'AUTH',
      LOGIN = 'LOGIN',
      LOGOUT = 'LOGOUT',
  IS_LOADING = 'IS_LOADING',
  SET_USER_PHOTO = 'GET_USER_PHOTO',
  SET_OR_DELETE_LIKE = 'SET_OR_DELETE_LIKE',
  SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO';

const defaultState = {
  currentUser: {},
  userPhotos: [],
  photoTotalCount: 0,
  setLikeClassName: '',
  currentPhoto: '',
  currentPage: 1,
  isAuth: false,
  isLoading: true
}


export default function authReducer(state = defaultState, action) {

  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
        // isLoading: false
      }
    }


    case LOGOUT:
      localStorage.removeItem('accessToken')
    return {
      ...state,
        currentUser: {},
        isAuth: false,
      isLoading: false
    }

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_USER_PHOTO:
      return {
        ...state,
        userPhotos: [...state.userPhotos, ...action.payload.userPhotos],
        currentPage: action.payload.currentPage,
        photoTotalCount: action.payload.photoTotalCount,
        isLoading: false
      }

    case SET_OR_DELETE_LIKE:
      return {
        ...state,
        userPhotos: state.userPhotos.map(photo => {
          if (photo.id === action.payload.id) {
            return action.payload
          }
          return photo
        }),
        currentPhoto: action.payload
      }

    case SET_CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.payload
      }
    default: return state
  }
}

export const setUser = user => ({type: LOGIN, payload: user})

export const logout = () => ({type: LOGOUT})

export const setIsLoading = (bool) => ({type: IS_LOADING, payload: bool})

export const setUserPhotos = (userPhotos, currentPage, photoTotalCount) => ({type: SET_USER_PHOTO,
 payload: {userPhotos, currentPage, photoTotalCount}})

export const setOrDeleteLike = (photo) => ({type: SET_OR_DELETE_LIKE, payload: photo })

export const setCurrentPhoto = photo => ({type: SET_CURRENT_PHOTO, payload: photo})



