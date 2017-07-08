import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class Separator extends React.PureComponent {
  componentDidMount() {
    // console
  }

  render() {
    return (
      <View style={[{ flexDirection: 'row' }, this.props.style]}>
        <View
            style={{
              backgroundColor: this.props.color,
              height: this.props.size,
              flex: 1,
            }}
        />
      </View>
    );
  }
}

Separator.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Separator.defaultProps = {
  size: 0.3,
  color: '#D3D3D3',
};
