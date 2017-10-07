import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgJFiCxrobUAeLWRlzQVcaaiXnAns3BVY',
      authDomain: 'authentication-c600a.firebaseapp.com',
      databaseURL: 'https://authentication-c600a.firebaseio.com',
      projectId: 'authentication-c600a',
      storageBucket: 'authentication-c600a.appspot.com',
      messagingSenderId: '17135355021'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
