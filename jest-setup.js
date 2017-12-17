import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
require('babel-core').transform('code', {
  presets: ['jest'],
});

configure({ adapter: new Adapter() });