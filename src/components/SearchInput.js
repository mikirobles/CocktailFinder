import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../constants/images';

const SearchInput = ({value, onChange, onClear, onBack}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {!value || !focused ? (
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Image
            resizeMode="contain"
            style={styles.backArrow}
            source={images.leftArrow}
          />
        </TouchableOpacity>
      ) : null}
      <TextInput
        autoFocus
        placeholder="Search"
        value={value}
        onChangeText={onChange}
        style={styles.input}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
      {value ? (
        <TouchableOpacity style={styles.clearBtn} onPress={onClear}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    padding: 10,
  },
  clearBtn: {
    marginLeft: 15,
  },
  clearText: {color: 'red'},
  backBtn: {
    marginRight: 15,
  },
  backArrow: {
    width: 20,
    height: 15,
  },
});

export default SearchInput;
