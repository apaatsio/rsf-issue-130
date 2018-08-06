import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReduxSagaFirebase from 'redux-saga-firebase';

new ReduxSagaFirebase();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
