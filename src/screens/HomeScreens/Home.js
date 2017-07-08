import React, { Component } from 'react';
import {
     StyleSheet,
     Text,
     View,
     ListView,
     TouchableHighlight
} from 'react-native';
import { navigation } from 'react-navigation';

class Home extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Apple Maps', 'Google Maps', 'Facebook Login']),
    };
  }

  _onPress = (sectionID, rowID) => {
    console.log('SectionID:- ' + sectionID + ' rowID:- ' +rowID)
    switch (rowID) {
        case "0":
            this.props.navigation.navigate('AppleMaps')
          break;
        case "1":
            this.props.navigation.navigate('GoogleMaps')
          break;
        case "2":
            this.props.navigation.navigate('Facebook')
          break;
        default:
          break;
      }
  }

  render() {
    return (
      <ListView style = {styles.container}
        dataSource={this.state.dataSource}
        renderRow={
          (rowData, sectionID, rowID) => <TouchableHighlight style = {styles.rowStyle} underlayColor = '#008b8b' onPress = {this._onPress.bind(this, sectionID, rowID)}>
                          <Text style = {styles.rowText}>{rowData}</Text>
                       </TouchableHighlight>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    rowText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    rowStyle: {
        backgroundColor: '#2F94DD',
        flex: 1,
        height: 100,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = Home
