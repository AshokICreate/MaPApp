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

export default class Title extends React.PureComponent {
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

Title.defaultProps = {
  text: 'Title',
  style: styles.defaultStyle,
};


/*
Usage:
*/

/*
<Title text="Map App Mobile." />

<Title
    text="Map App Mobile."
    style={{ color: 'red' }}
/>
*/
