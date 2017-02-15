import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text,TouchableHighlight,Image} from 'react-native';

export default class DataList extends Component {
  constructor() {
    super();
  }

  render() {
    const {listdata} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = listdata ? ds.cloneWithRows(listdata) : ds.cloneWithRows([]);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.props.renderRow.bind(this)}
        enableEmptySections={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
