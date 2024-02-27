import React from "react";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from 'react-toastify'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./components/header";
import GlobalStyle from './styles/GlobalStyles'
import Routes from "./routes";
import history from "./services/history";
import store, {persistor} from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header/>
        <Routes/>
        <GlobalStyle/>
        <ToastContainer autoClose={3000} className='toast-container'/>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
