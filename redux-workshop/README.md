#redux-workshop

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

---

# Why do we need Redux?

![you might not need redux](http://blog.isquaredsoftware.com/presentations/2018-03-redux-fundamentals/static/media/you-might-not-need-redux.6ed95d25.png)

## What's the problem?

### Interaction between jQuery and React

https://codesandbox.io/s/0my672voxn

### State sharing across multiple components

```js
App
ProductHouse (updateHouseSelection price)

Total
ProductCar (updateCarSelection price)

Total
SummaryPage (subscribeProductChange)

ProductDetails

Total
```

#### Should all of these be organized into components at the App level? For scalability?

#### What method should be used to trigger a product price update?

`this.props.updateProduct({ name: 'car', price: 0 })`

#### How to reuse the logic for calculating productTotal

```js
const total = _.sumBy(state.product, "price");
```

Should this code be placed in each `<Total />` component?

#### What if the entire application's data needs to be stored on the client side (localStore)?

Where should this storage logic be written? Is centralized data management necessary? If data is distributed across many container components, how can you store all the data for the entire application?

## As data becomes increasingly abundant and complex, you need a centralized data management solution to ensure your View remains lightweight and provides feedback/rendering: react(data) => page

# What is Redux?

## Redux Principles

### Single Data Source

![6024ef30-312a-4c7c-bfd2-eb72fba097ef](md/6024ef30-312a-4c7c-bfd2-eb72fba097ef.png)

### State is read-only

### Deriving state from pure functions

![1_wLRhZ0wtI0duLsigdxL1CA](md/1_wLRhZ0wtI0duLsigdxL1CA.png)

## Basic Concepts

### Actions

1. An Action is a Plain Object

2. Actions must be declared type

```js
const ADD_TODO = "ADD_TODO";

const action = {
  type: ADD_TODO,

  text: "Build my first Redux app",
};
```

### Reducers

A Reducer is a pure function

A Reducer responds to different Actions

```js
(previousState, action) => newState;
```

#### Never Do

1. Mutate its arguments;

2. Perform side effects like API calls and routing transitions;

3. Call non-pure functions, e.g., Date.now() or Math.random().

### Store

- The repository that stores the application state

- Accessed via `getState()`;

- Updated our state via `dispatch(action)`;

- Responded to store changes via `subscribe(listener)`;

## Data Flow

![redux-data-flow-with-angular-2-19-638](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f) 6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f333634383 1322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

## Using with React

### Presentation & Container

![container-and-presentational](md/container-and-presentational.jpg)

### React-Redux

1. Provider

Provider provides injection into the Store

2. Connect(mapStateToProps, mapDispatchToProps)

Connects React components to the Store

3. mapStateToProps

Syntactic sugar for store.getState()

4. mapDispatchToProps

Syntactic sugar for store.dispatch()

# A heartfelt summary

## Well, Redux is just a pattern

```js
import React, { Component } from "react";

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

class Counter extends Component {
  state = counter(undefined, {});

  dispatch(action) {
    this.setState((prevState) => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
```

# what is dataStore

# Further reading

[redux official docs](https://redux.js.org/)

[Redux author Dan Abramov egghead videos](https://egghead.io/instructors/dan-abramov)

#RecommendedTools

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?pli=1)
