import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class Loader extends React.Component {
  componentDidMount() {
    // Useless function to avaoid eslint error.
  }

  render() {
    const backgroundColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : 'transparent';
    return (
      <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor,
          }}
      >
        <ActivityIndicator />
      </View>
    );
  }
}
