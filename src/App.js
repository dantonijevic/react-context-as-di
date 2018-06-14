import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { AppContext } from './app-context';
import FormCmp from './FormCmp';
import FormDataProvider from './FormDataProvider';

class App extends Component {
  render() {
    return (
      <FormDataProvider>
        <div>
          <AppContext.Consumer>
            {
              ctx => (
                <FormCmp {...ctx} />
              )
            }
          </AppContext.Consumer>
        </div>
      </FormDataProvider>
    );
  }
}

export default App;
