import App from './app';
import React from 'react'

import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux';



render(<Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
  </Provider>,  document.getElementById('root')
)

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
  module.hot.accept();
}