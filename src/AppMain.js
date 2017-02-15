'use strict';
import React,{ Component } from 'react';
import { Provider,StatusBar } from 'react-redux';
import configureStore from './store/configure-store';
import RouterMain from './RouterMain';
import codePush from "react-native-code-push";

class AppMain extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <RouterMain />
      </Provider>
    )
  }
}

let CodePushApp=AppMain;
if (!__DEV__) {
  CodePushApp = codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_RESUME })(AppMain);
}
export default CodePushApp;
