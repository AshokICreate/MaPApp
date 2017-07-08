import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    color: colors.black,
  },
});

export default class Header3 extends React.PureComponent {
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

Header3.defaultProps = {
  text: 'Header3',
  style: styles.defaultStyle,
};


/*
Usage:
*/

/*
<Header3 text="Map App Mobile." />

<Header3
    text="Map App Mobile."
    style={{ color: 'red' }}
/>
*/
