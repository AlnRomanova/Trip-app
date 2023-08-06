import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App';

const rootElement = document.getElementById('root');

const renderApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);


if (createRoot) {
 createRoot(rootElement).render(renderApp());
} else {
  ReactDOM.render(renderApp(), rootElement);
}
