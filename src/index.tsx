import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Web3Provider } from '@ethersproject/providers';
import { SnackbarProvider } from 'notistack';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

const getLibrary = (provider: any, connector: AbstractConnector | undefined) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000
  return library
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={5}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Router />
        </Web3ReactProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
