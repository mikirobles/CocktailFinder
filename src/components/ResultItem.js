import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultItem = ({image, name}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 7,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontSize: 20,
  },
});

export default ResultItem;
