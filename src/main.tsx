import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Router from '@src/router.tsx';
import store from '@redux/store.ts';

import '@assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  </Provider>,
)
