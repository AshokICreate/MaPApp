import React from 'react';
import { View } from 'react-native';

export default props => (
  <View style={{ padding: 15, ...props.style }}>
    {props.children}
  </View>
);
