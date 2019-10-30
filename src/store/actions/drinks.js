import {createAction} from 'async-action-creator';
import ky from 'ky';

export const SEARCH_DRINKS = createAction('drinks/SEARCH_DRINKS');

export function searchDrinks(query) {
  return async function(dispatch) {
    dispatch(SEARCH_DRINKS.start());
    try {
      if (!query) {
        return dispatch(SEARCH_DRINKS.resolve([]));
      }
      const {drinks} = await ky(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          query,
        )}`,
      ).json();

      return dispatch(SEARCH_DRINKS.resolve(drinks));
    } catch (e) {
      return dispatch(SEARCH_DRINKS.reject(e));
    }
  };
}
