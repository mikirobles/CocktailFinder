# CocktailFinder

```
This React Native app allows you to search for alcoholic drinks.
```

Make sure your environment is ready:  
https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment (React Native CLI Quickstart)

## How to install

```
> yarn
> cd ./ios
> pod install
```

## How to run

```
On iOS:
> yarn ios

On Android:
> yarn android
```

## Libraries used

- ky

Axios/fetch alternative for making requests to the API. I didn't choose Axios because it seems to be abandoned and I wanted to try this one out.

---

- react-native-linear-gradient

For the background gradient

---

- react-native-keyboard-aware-scroll-view

For the scroll list view in the results screen. It helps scroll to the bottom of the list when the keyboard is up.

---

- react-navigation

For the navigation betweeen the two screens. Might be a bit overkill for this app but it's what is generally used.

---

- async-action-creator

Reduces boilerplate for async redux actions. Might also been a bit overkill for this app.

---

- redux-devtools-extension

Made integrating redux devtools easier.

## Things to improve

- Cancel unfinished search requests when typing
- To make list more performant with big amounts of data, a FlatList can be used for rendering only what goes in the viewport at any given time.
