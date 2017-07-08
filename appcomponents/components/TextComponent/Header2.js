import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: fonts.robotoRegular,
    fontSize: 18,
    color: colors.black,
  },
});

export default class Header2 extends React.PureComponent {
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

Header2.defaultProps = {
  text: 'Header2',
  style: styles.defaultStyle,
};


/*
Usage:
*/

/*
<Header2 text="Map App Mobile." />

<Header2
    text="Map App Mobile."
    style={{ color: 'red' }}
/>
*/
