/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import AppNavigator from './navigation';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default App;
