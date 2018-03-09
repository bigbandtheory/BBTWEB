import {combineReducers} from 'redux';
import AppStateReducers from './AppStateReducers';
import ClientReducer from './ClientReducer';
import ArtistReducers from './ArtistReducers'
import MusicPlayerReducer from './MusicPlayerReducer';
import BookingReducers from './BookingReducers';
import { routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
  app: AppStateReducers,
  client : ClientReducer,
  artist : ArtistReducers,
  musicPlayer : MusicPlayerReducer,
  routing : routerReducer,
  booking : BookingReducers
});

export default allReducers;

