import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
    FETCH_WEATHER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    case FETCH_WEATHER:
        let weatherArray=[];
        if(state.weathers){
          weatherArray=state.weathers.concat(action.payload.data);
        }else{
          weatherArray.push(action.payload.data);
        }
        return {...state, weathers: weatherArray};
  }

  return state;
}
