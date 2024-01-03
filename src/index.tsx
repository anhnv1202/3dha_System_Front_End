import store from '@app/store';
import '@core/styles/global.scss';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
);
