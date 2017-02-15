'use strict';
import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, Image, View,TextInput ,Text,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { fetchFeeds } from '../actions/feeds';

class NewFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isLoading: false
    }
  }

  addFeed(url) {
    this.props.dispatch(fetchFeeds(url));
  }

  render() {
    return (
     <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({input: text})}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.addFeed(this.state.input)}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { entities } = state;

  return {

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 80,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    padding: 5,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#183E63',
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps)(NewFeed);
