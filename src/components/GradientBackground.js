import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({children, ...props}) => (
  <LinearGradient
    colors={['#E33D2F', '#CC269A']}
    style={styles.wrapper}
    start={{x: 0, y: 1}}
    end={{x: 1, y: 0}}
    {...props}>
    {children}
  </LinearGradient>
);
const styles = StyleSheet.create({
  wrapper: {flex: 1},
});

export default GradientBackground;
