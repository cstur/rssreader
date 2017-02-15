'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,Button ,Text,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Actions, NavBar } from 'react-native-router-flux';

export default class CustomNavBar extends NavBar {

  renderRightButton () {
    return (
      <Button title="Button" onPress={()=>{
        console.log('abc')
        Actions.newFeed}}>
          <Text >Logout</Text>
      </Button>
    );
  }
}

var styles = StyleSheet.create({

});
