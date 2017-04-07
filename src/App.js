import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCCtKtuCZhDljR9fhYIbygSKdZ59G-VqD8",
      authDomain: "auth-c0430.firebaseapp.com",
      databaseURL: "https://auth-c0430.firebaseio.com",
      storageBucket: "auth-c0430.appspot.com",
      messagingSenderId: "771869196075"
    });
  }

  render() {
    return(
      <View>
        <Header title="Header FtW" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
