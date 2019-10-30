import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import images from '../constants/images';
import {SCREENS} from '../navigation';
import GradientBackground from '../components/GradientBackground';

const Home = ({navigation}) => (
  <GradientBackground>
    <SafeAreaView style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.Search)}
        style={styles.mockInput}>
        <Image style={styles.searchIcon} source={images.magnifyingGlass} />
        <Text>Search your favourite cocktail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </GradientBackground>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    marginBottom: 20,
  },
  mockInput: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    // width: '90%',
    // maxWidth: 250,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
});

export default Home;
