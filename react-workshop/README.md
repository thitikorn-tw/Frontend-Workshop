# react-workshop

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br> Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in the console.

# React

## Hello React

```javascript
render(<p>hello, world</p>, document.querySelector("#app"));
```

## JSX Syntax

### What is JSX?

JSX is an extension of JavaScript syntax. Using JSX, you can effectively describe UI elements within JavaScript.

```
js const element = <h1>Hello, world!</h1>;`

```

### Why Choose JSX

- Stone Age

![](https://github.com/traveloka/soya/wiki/old-mindset.png)

- Bronze Age

![](https://github.com/traveloka/soya/wiki/new-mindset.png)

- Iron Age

![](https://github.com/traveloka/soya/wiki/new-mindset-react.png)

The core idea of ​​React is to integrate all the logic and UI parts, packaging them into independent components with complete functionality. React itself doesn't require the use of JSX syntax, but the concepts of JSX and React are surprisingly compatible.

```
js const element = <h1>Hello, world!</h1>;`

```

### Why Choose JSX

## Stone Age

## Stone Age

## Stone Age

# Bronze Age

# Bronze Age

# Bronze Age

# Bronze Age

# Bronze Age

# React Core Idea

## Stone Age

# React Core Idea

# React Core Idea

# React Core Idea

# React Core Idea

The core idea of ​​React is to integrate all the logic and UI parts, packaging them into independent components with complete functionality. React itself doesn't require the use of JSX syntax, but JSX and React's core ideas are surprisingly compatible. - Future (Mechanical Age)

![](https://github.com/traveloka/soya/wiki/new-mindset-react-webpack.png)

### Basic Syntax

```
js
const element = <div tabIndex="0"></div>;

//Use double quotes to represent strings

const element = <img src={user.avatarUrl}></img>;

//Use curly braces to represent JS expressions

const element = <span classNames="foo" />;

const tabItem = <span tabIndex="1" />;

//Use camelCase naming to replace some native HTML attributes class->classNames tabindex->tabIndex
```

## React Elements

### Element Generation

The JSX syntax we commonly use is actually transpiled by Babel into the following code.

```
js
const element = <h1 className="greeting">Hello, world!</h1>;

//babeled
const element = React.createElement(
    "h1",

    { className: "greeting" },

    "Hello, world!",
);
//React.createElement will eventually generate an object like this

// Note: this structure is simplified
const element = {
    type: "h1",
    props: {
        className: "greeting",

        children: "Hello, world!",
    },
};
```

React uses this Object to construct the DOM and keep the DOM updated.

## React Components

### From Elements to Components

We've mentioned React elements before, but we'll hear more often about React components. In fact, React elements are the smallest building blocks of React components.

``js` ``js

// A React element is also a unit of React component.

const foo = <h1>Hello, world</h1>;

// React component

const Bar = () => (

<div>
<Foo />
<Foo />
</div>

);

// Naming convention: React components must start with a capital letter and be named in camelCase.

`````

### Component Mounting

How are React components actually mounted on our actual browser DOM?

```

// index.html

// Create a node

<div id="root"></div>

```

``js

const Component = <h1>Hello, world</h1>;

s;

// Mount our component to the corresponding node

ReactDOM.render(Component, document.getElementById("root"));

```

### Component Updates

As mentioned when discussing React elements, for React, our JSX syntax is ultimately transpiled into React Objects. Updating a component is actually updating these Objects.

#### Updating Components Using Props

##### What are Props?

````![Props](http://qlt.com/images/detailed/1/new-props.png)

Components are puppets; the puppet's decoration and behavior are determined by Props.

**!!! Props are read-only**

### Try time

#### functional component

``` const Hello = props => <p>Hello, my world. {JSON.stringify(props)}</p>;

render(<Hello a="1" b={Date.now()} />, document.querySelector('#app'));

`````

#### class component

[class property](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=ATDGBsEMGduAhA9gJwNbA N4CgQgPR4AKyiADgKbIAuAnsAJYB29V9k49AXpcNDY1UgAPHLibRBjUOWJlKtYAF5gAIgBGKVCoDcokBoCujACYAxI6FaJGS4AAoAlEoB8mPbmTk qB5DaoALemgAOnFJaVkKahpdXGAAX3d3CBhoAFkvf0RjRzc4kFBraERwcmDwRABzOwCggBpgAHIAM0RERodY3ET3AgBlQVZQMChYYFISKNZyaHc JSCHeQfpQSPk6ZXVINXJwAEloAGE28B055eH5ofMpKxtlZos73Ox84E9vXwRNYKuVteiXRAiWBWFEpSowAAtjQkGhbIxyAB3b5oXSiAgAhRMFhsD jcZBwSCeYCMRCQ6zAALkcYkKjkmgUYKiQqMYqlcpVOwwuGoYIAfX5E3JiEFwUMJhulno1k6wAIwFcRmM5GaTHIxjB-DwSGVwEetxlbOAxJpEuMV MQVP8NJSYzCkCkZRZRRKZQq1R5P3NURuwVA7HAdmVqvVxgccoVrnUmhUWvleAGCxW-qeRuA5CEQSocEp1JGqWZBVdHI9dl5vwuvqNjkjeEVqjU21 2B2OJTjQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-0&prettier=false&targets=&version=6.26.0&envVersion=)

```
import React, { Component } from 'react';
import { render } from 'react-dom';

class Welcome extends Component {
render() {
return <p>Hello, welcome to my world. {JSON.stringify(this.props)}</p>;
}
}

render(<Welcome a="1" b={Date.now()} />, document.querySelector('#app'));
```

#### Composing Components

```
class Welcome extends Component {
render() {
return <p>Hello, welcome to my world. {JSON.stringify(this.props)}</p>;
}
}

const WelcomeTheTeam = () => (
<div>
<Welcome name="zhangsan" />
<Welcome name="lisi" />
<Welcome name="wangmazi" /> </div>

);
render(<WelcomeTheTeam />, document.querySelector('#app'));

```

#### Updating Components Using State

Components acquire certain behaviors by receiving Props from their parent components, while the component maintains its own state to control its own behavior.

![](https://cdn-images-1.medium.com/max/1200/1*ZKm9tPsTGzlCUXBJ-wST-A.jpeg)

##### We want to update the timestamp

To become a component with state, a component must derive from React.Component

```
class Welcome extends Component {
render() {
return <p>Hello, welcome to my world. {Date.now()}</p>;

}
}
render(<Welcome />, document.querySelector('#app'));

```

##### Use state and setState to update UI (by clicking the button)

`````
class Welcome extends Component {

state = {

time: Date.now(),

};

render() {

return <p>

Hello, welcome to my world. {this.state.time}

<br/>

<button onClick={() => this.setState({ time: Date.now() })}>update</button>

</p>;

}
}
``

props and state are actually updates to our React Object. By updating the React Object, React internally performs efficient browser DOM diff updates.

## Event Handling

React events are very similar to native HTML events; all you need to do is declare the event handler function and bind the event.

```
js

//Native HTML

<button onclick="activateLasers()">

Activate Lasers

</button>

//React event binding

<button onClick={activateLasers}>

Activate Lasers

</button>

```

[Detailed introduction to React Events](https://reactjs.org/docs/events.html)

### Component Lifecycle

Once a React component is declared using ES6 classes, that component has a complete React lifecycle.

````![](https://rangle.github.io/react-training/img/reactjs_component_lifecycle_functions.png)
[http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

##### automachine: use setinterval and lifecycle to update state

```
class Welcome extends Component {
state = {
time: Date.now(),
};

componentDidMount() {
setInterval(() => this.setState({ time: Date.now() }), 1000);
}

render() {
return <p>
Hello, welcome to my world. {parseInt(this.state.time / 1000)}
</p>;
}
}
```

## Conditional rendering

```
const LoggedIn = ({ name, onClick }) => (
<p>
Hi, {name}. you already logged in. want{' '}
<button onClick={onClick}>Logout</button>
?
</p>
);

const LoggedOut = ({ onClick }) => (
<p>
Hi, come on <button onClick={onClick}>Login</button>
</p>
);

class Welcome extends Component {
state = {
isLoggedIn: false,
};

login = () => {
this.setState({ isLoggedIn: true });
};

logout = () => {
this.setState({ isLoggedIn: false });
};

render() {
return (
<span>
{this.state.isLoggedIn && 'yay... '} {this.state.isLoggedIn ? (
<LoggedIn onClick={this.logout} />

) : (
<LoggedOut onClick={this.login} />

)}

</span>

);

}
}
``

## Rendering Multiple Duplicate Elements

Sometimes we have this requirement

![15234635810547.jpg](http://oax4654gb.bkt.clouddn.com/2018/4/12/15234635810547.jpg)

Each post is actually a reusable React component, only the content it contains is different.

In this case, we can use an array of objects (each object contains the specific content of each post) to build our post list.

```
const apple = (
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACKUEx URUdwTGiYNm6MOmmaNXKZQG6VPI+yZ3idSHSUQYCjUmeXNHCePnJVKI6xZW2fOWRDG5CzZ1o4F1qGLGdDHn20P6zUf3K7JLHXhbfajr3emMPhocnkq6bQeG ibMoXEQXzAMo3HT3a3LpXKXJ3NaXaqQG6iOX6tUIm2WlqNL3q2N5zCcpPAZZS2alAxDkhhy0YAAAAUdFJOUwDLQ5Ua995eDTOyfPyq4fj2s+iCxMw9HQAAB G9JREFUWMPVmOlyokAUhcPaCCIacQ0YlWaR5f1fb+7tBRoFJDNTNTWXipU/fJ5zN2g/Pv77MBc6IWSxcP6I4uiGZrFYuR5nOb+FcT+LOE1pxsMHYcQwf84x EEMRk+d5na+z3LYzf86d281m0SXHLRROXlVVXWfZmszgbJqm2cgcOMABVwAKGamqygr+sWc404OmCZbyG72CpUcqAkEZzet6jrOP7RJCSNJZmhEUZiFay1 JaJbW9mJVdRtKFsThFEk9SSOM0A2+1P6/65gZAWyFIiRgxVVLl8wTh/egN02kIABcFWaqwark3u3dIsAzAm6kVhchR1pY/z/35zehsgmALrVgUsmi05WSzj WEsgmDjkOLTg+lg/QhdxKuW2fqPBmMbBEQryIcDn5hlOWiZ/16PYy4I8YjOxlsPgs9Cg+F0VzEzaLF0a+Rt4U3i2+t1Xa/Xto/zvWmCYrWiaXqL91C2GFaI 4elv0+wQGyBlWUbwBzTbtgAETi6X7+89RJrG1ozVsfDXdRntdrvDAT4ipGVBU1T3+/XKSbcHTWPtXZ51GzGHLpC2bKwoUUlhGq+mtwcBjsAcjy3KAhAjgTs GektaCM5RxgEtHupmCaAKJQlSCEO7GndnAkfFACcqYaTyYMnG4irMIQhI2mgf+UwPQ5xYHA9RCXunaJoipjAVd0USuHNHOomsBefUBiPRYrksYG0kCcu3B IWpNZwm068jhXOGC1HgryyrMopEvlnhGAjMmSOCWs5ZBkNhAVlTJT1vY5KEoB7nLFW1INUbjd3B0kOGuCAEfEEIElPESJilrm4gaTVQOFKXQpDkCJQgDYJi MuWsxTDSszeeJA6i8evOdvxaOFMEMUmDoJsAGUNdvWudqYq4t+FshwM92eW6B/qSHfBsjZct1cZAL4q+phVpf0vRlLXT/GSP5ujFW7+PdokE3R6jVZOgHqm bNgRFXUNO9BErf2/Wvs59DnY2G//9ZGdjQ+5mTH8fNDBrAIp26l47i4WkCnpaI+HgQvJgz8rFf1J2ZDf7QtB0rvmilaTT8YUTDQgaHH58FEUtSY2DMKZs2i lnbGXvOOnQx0jOs6BhZ5CknD3zVdShw0RJoj6z+coefkTqWR1x0tOzX+p5EeQOv5OYWp5IErDYJTEtpydo7OnvZUhqUZIywhl7qmHdVtk9Yaioz0n6HFn7 8Xdsg+ZAQhSDMS0S03LeC0JJ4fWOKM4SFMB0HGlsIkPshEiRxFkyBOaJQ0dfRYQkerkyFMDuyLhfJeaJY02/RHophbvghep6ZxeGgpEcyLTx5t3YjW8XjOt FQlpMp2c609JcfIMbL5zAKYIj647Tar0/hZA43n8rsZdqFM5UCylpAhKLlvGEwZfHOcc0x5CkYQxwtHnHtD7phhQFE844PrQkcJfeWDwefcqPOJjxFZzvHi Fe/aCzfckl51qAwjsplQyIeQesJ3sanszxnBennIFHPpf8/Nci03M1zTXg0+IMw5txbBxhmfj9pk4MwyB/9kvYP4lfovMdXV5nBr8AAAAASUVORK5CYII=" />
);

const PeopleWantMessage = ({ icon, name }) => (

<p>

{name} want eat {icon}

</p>

);

const wantApple = ['zhangsan', 'lisi', 'wangmazi'];

const Apples = ({ peoples }) =>

peoples.map((name, index) => (

<PeopleWantMessage icon={apple} name={name} key={`${name}${index}`} />

));

render(<Apples peoples={wantApple} />, document.querySelector('#app'));

```

## Forms

If you've ever tried writing a component that uses input and expecting its default behavior to be consistent with HTML, you'll get disappointing results.

React is a unidirectional data flow, so filling out forms in React is a cumbersome task.

![](https://image.slidesharecdn.com/react-150410184943-conversion-gate01/95/react-52-638.jpg?cb=1428692033)

```
js
class TodoMvc extends Component {
state = {
todos: [],
newItem: "",
};

handleSubmit = (e) => {
e.preventDefault();
alert(this.state.newItem);
};

handleChange = (e) => this.setState({ newItem: e.target.value });

render() {
return (
<form onSubmit={this.handleSubmit}>
<header className="header">
<h1>todos</h1>
<input
className="new-todo"
placeholder="What needs to be done?"
autofocus onChange={this.handleChange}

value={this.state.newItem}

/>
</header>

</form>

);

}
}

render(<TodoMvc />, document.querySelector("#app"));

```

[Another option, uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html)

## Component Data Passing and Design Ideas

- Passing data down through props

- Informing parent components of changes through callbacks

- Enabling better communication between peer components and other components through state management

- Dumy UI component

- Container component

# WorkShop Time TODOMVC

[http://todomvc.com/examples/react/#/](http://todomvc.com/examples/react/#/)

HTML template: `src/index.html`

# React dev tool

[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

#Futherreading

https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a
`````
