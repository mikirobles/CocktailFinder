import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import {SafeAreaView} from 'react-navigation';
import SearchInput from '../components/SearchInput';
import ResultItem from '../components/ResultItem';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {searchDrinks, SEARCH_DRINKS} from '../store/actions/drinks';

const Search = ({navigation, drinks, search, loading}) => {
  const [searchInput, setSearchInput] = useState('');

  const clear = () => {
    setSearchInput('');
  };

  useEffect(() => {
    search(searchInput);
  }, [search, searchInput]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchInput
          value={searchInput}
          onChange={setSearchInput}
          onClear={clear}
          onBack={() => navigation.goBack()}
        />
      </SafeAreaView>
      <GradientBackground>
        {loading ? (
          <ActivityIndicator color="white" style={styles.spinner} />
        ) : searchInput && drinks && drinks.length === 0 ? (
          <Text style={styles.noResults}>No results</Text>
        ) : (
          <KeyboardAwareScrollView
            style={styles.resultsScrollView}
            contentContainerStyle={styles.resultsContainer}>
            {drinks && drinks.length > 0
              ? drinks.map(({strDrink, idDrink, strDrinkThumb}) => (
                  <ResultItem
                    key={idDrink}
                    name={strDrink}
                    image={strDrinkThumb}
                  />
                ))
              : null}
          </KeyboardAwareScrollView>
        )}
      </GradientBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  resultsContainer: {
    flexDirection: 'column',
    paddingVertical: 7,
  },
  resultsScrollView: {flex: 1},
  noResults: {
    fontSize: 20,
    color: 'white',
    marginVertical: 60,
    textAlign: 'center',
    width: '100%',
  },
  spinner: {
    marginVertical: 60,
  },
});

export default connect(
  state => ({
    drinks: state.drinks.byName,
    loading: SEARCH_DRINKS.getStatus(state) === 'pending',
  }),
  {search: searchDrinks},
)(Search);
