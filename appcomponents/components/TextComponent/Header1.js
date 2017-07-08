import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: fonts.robotoRegular,
    fontSize: 20,
    color: colors.black,
  },
});

export default class Header1 extends React.PureComponent {
  componentDidMount() {
    // Unnecesary callback
  }

  render() {
    return (
      <Text {...this.props} style={[styles.defaultStyle, this.props.style]}>
        {this.props.text}
      </Text>
    );
  }
}

Header1.defaultProps = {
  text: 'Header1',
  style: styles.defaultStyle,
};


/*
Usage:
*/

/*
<Header1 text="Map App Mobile." />

<Header1
    text="Map App Mobile."
    style={{ color: 'red' }}
/>
*/
