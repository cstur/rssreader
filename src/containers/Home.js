'use strict';
import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Image,
  View,
  ListView ,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DataList from '../components/DataList';

class Home extends Component {

  constructor() {
    super();
  }

  onFeedSelect(feed) {
    //Actions.feedDetail({});
  }

  renderRow(item) {
    console.log(item)
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => { this.onFeedSelect(item) }}
        key={item.length}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.smallText}>{item.url}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { feedList } = this.props;
    console.log(feedList);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = feedList ? ds.cloneWithRows(feedList) : ds.cloneWithRows([]);
    return (
      <ScrollView style={{ flex:1,backgroundColor:'white' }} contentContainerStyle={{paddingTop: 64}} contentInset={{ bottom:50 }} >
        <View>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections={true}
          />
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { feeds } = state;
  console.log(feeds)
  return {
    feedList:feeds.feedList
  }
}

var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  title: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: "#B4AEAE",
    fontSize: 12,
    marginBottom: 5,
  },
  smallText: {
    fontSize: 11,
    textAlign: 'right',
    color: "#B4AEAE",
  }
});

export default connect(mapStateToProps)(Home);
