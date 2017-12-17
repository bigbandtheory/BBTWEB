import {combineReducers} from 'redux';
import AppStateReducers from './AppStateReducers';
import ClientReducer from './ClientReducer';
import ArtistReducers from './ArtistReducers'
import MusicPlayerReducer from './MusicPlayerReducer';

const allReducers = combineReducers({
  app: AppStateReducers,
  client : ClientReducer,
  artist : ArtistReducers,
  musicPlayer : MusicPlayerReducer
});

export default allReducers;

