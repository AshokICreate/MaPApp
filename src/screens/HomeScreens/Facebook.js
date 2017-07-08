import React, {
  Component
} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  FBLoginButton,
} from '../../../appcomponents'

export default class Facebook extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <FBLoginButton />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
