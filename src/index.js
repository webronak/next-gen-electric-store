import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// for routing
import { BrowserRouter as Router } from 'react-router-dom';
// redux setup
import { Provider } from "react-redux";
// store redux
import  {store, persistor} from "./redux/store";
// redux persitor
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

