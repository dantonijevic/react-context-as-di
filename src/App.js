import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import FormCmp from './FormCmp';
import { data, AppContext } from './app-context';

class App extends Component {
  render() {
    return (
      <AppContext.Provider value={data}>
        <div>
          <AppContext.Consumer>
            {
              ctx => (
                <FormCmp {...ctx} />
              )
            }
          </AppContext.Consumer>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
