'use strict';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import Home from './containers/Home.js'
import NewFeed from './containers/NewFeed.js'

export const scenes = Actions.create(
  <Scene
    key="root"
    navigationBarStyle={{ backgroundColor:'#2977ba' }}
  >
    <Scene
      key="home"
      rightTitle="Add" onRight={()=>Actions.newFeed()}
      component={Home}
      rightButtonTextStyle={{color:'white'}}
      initial
    />
    <Scene
      key="newFeed"
      component={NewFeed}
      title="Feed"
      leftButtonIconStyle = {{ tintColor:'white'}}
      />
  </Scene>
);
