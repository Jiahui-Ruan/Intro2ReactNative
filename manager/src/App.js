import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
