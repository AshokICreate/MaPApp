import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  LoginManager,
} = FBSDK;

export default class FBLoginButton extends React.PureComponent {
  componentDidMount() {
    // console
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* Login Button + Access Token */}
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
          {/*OR Requesting additional permissions with Login Manager*/}
          {/*
          // Attempt a login using the Facebook login dialog asking for default permissions.
          LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
              if (result.isCancelled) {
                alert('Login cancelled');
              } else {
                alert('Login success with permissions: '
                  +result.grantedPermissions.toString());
              }
            },
            function(error) {
              alert('Login fail with error: ' + error);
            }
          );
          */}
        </View>
    );
  }
}
