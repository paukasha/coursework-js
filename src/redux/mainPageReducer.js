const GET_PHOTOS = 'GET_PHOTOS',
 GET_LOCATION = 'GET_LOCATION',
  IS_LOADING ='IS_LOADING'

const defaultState = {
  photos: [],
  location: '',
  isLoading: true,
}

export default function mainPageReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload
      }

    case GET_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export const setLocation = location => ({type: GET_LOCATION, payload: location})
export const setPhotos = photo => ({type: GET_PHOTOS, payload: photo})

export const setIsLoading= (bool) => ({type: IS_LOADING, payload: bool})