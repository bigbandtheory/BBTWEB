import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/css/index.css';
import App from './js/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
