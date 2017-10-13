import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDF_9AAtjNvL-4tU5DuQaTnJ_iVFLsCmPM",
      authDomain: "manager-95ea6.firebaseapp.com",
      databaseURL: "https://manager-95ea6.firebaseio.com",
      projectId: "manager-95ea6",
      storageBucket: "",
      messagingSenderId: "623669027876"
    };

    firebase.initializeApp(config);
  }

  render() {
    // second args here is the preset value of state => SSR
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
