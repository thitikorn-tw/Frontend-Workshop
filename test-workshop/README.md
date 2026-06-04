# Testing

## Guideline

1. **Introduction to Jest and Enzyme**

2. **Test Script Writing**

3. **Executing and Debugging Tests**

4. **Testing Practices in Projects**

5. **Review**

6. **References**

## 0. Before Start

[code base](https://github.com/jungleli/workshop-test)

vscode plugin (jest)

Q:

What does front-end testing test?

## 1. Jest , Enzyme

### Jest

🃏 Delightful JavaScript Testing

> Jest is used by Facebook to test all JavaScript code including React applications

React friendly, snapshot, built-in assertion library, built-in Mock library, test runner, report

_[Test React Apps](https://facebook.github.io/jest/docs/en/tutorial-react.html)_

- #### Common methods

- Methods
- beforeEach / beforeAll
- afterEach/afterAll
- describe / describe.skip
  -test/test.skip

-asserts
-expect

- .toBe(value)
- .toEqual(value)
- .toContain(item)
- .toMatch(regexOrString)
- .toMatchSnapshot()
- .toHaveBeenCalled()
- [more [asserts](https://facebook.github.io/jest/docs/en/expect.html#methods)

- Mock a function

- `jest.fn()`

- `mockFn.mockReturnValue(value)`

- `mockFn.mockImplementation(fn)`

- `jest.disableAutomock()`

- [more](https://facebook.github.io/jest/docs/en/mock-functions.html#mock-property)

### Enzyme

> Enzyme is a JavaScript testing tool for React that simplifies assertions, manipulations, and iterating over the output of your React components.

_[react test utils](https://reactjs.org/docs/test-utils.html)_, _[jsdom](https://github.com/jsdom/jsdom)_, _[cheerio](https://github.com/cheeriojs/cheerio)_

Render Methods:

1. Shallow Rendering

2. Full DOM Rendering

3. Static Rendering

####1. Shallow Rendering

This method only renders the current component, without considering the rendering of child components. It's a recommended rendering method, testing only the current component and reducing dependencies between components.

Example

```js
const ButtonWithIcon = ({ icon, children }) => (
  <button>
    <Icon icon={icon} />
    {children}
  </button>
);
```

Result rendered on the page

```js
<button>
  <i class="icon icon_coffee"></i>
  Hello Jest!
</button>
```

Result of shallow render:

```js
<button>
  <Icon icon="coffee" />
  Hello Jest!
</button>
```

Child component Icon not rendered

​

#### 2. Render (Static Rendering)

The output of the render method is a static HTML structure. Enzyme uses the third-party HTML parsing library [Cheerio](https://github.com/cheeriojs/cheerio) to complete the rendering. The rendering returns a [Cheerio](https://github.com/cheeriojs/cheerio) object. (Trap: Most enzyme APIs are unavailable)

#### 3. Mount (Full DOM Rendering)

Renders the component along with its child components, requiring all dependencies to be provided. The `mount` method depends on the DOM; the `jsdom` library can be used to simulate a browser environment. Use cases: Tests components with DOM interactions and lifecycles, such as click events or state changes.

Note:

- The `mount` method actually mounts the component to the DOM, meaning tests between components under the same parent node may interfere with each other. After a test, `.unmount()` can be used to clean up.

- `jsdom` is essentially a headless browser implemented entirely in JavaScript.

#### Common Methods

- simulate: Simulate events, such as onClick, onChange

- html: Returns the rendered HTML

- state: Gets the component's state object

- props: Gets the component's props

- update: Forces a re-render, simulating changes in the component's state caused by external events

- mount/unmount: Simulates the component's life cycle, componentWillMount/componentWillUnmount

#### Selectors (DOM Search)

**Usage:** `.find(selector)`

- class(.foo, .foo-bar), element(div, button), id(#foo), attribute([href="foo"])

- props

```js
const wrapper = mount(
  <div>
    <span foo={3} bar={false} title="baz" />
  </div>,
);

wrapper.find("[foo=3]");
wrapper.find("[bar=false]");

wrapper.find('[title="baz"]');
```

[more selectors](http://airbnb.io/enzyme/docs/api/selector.html)

## 2. Write your tests

Open the counter folder, follow the README to start writing your tests.

- #### UI Testing

- #### Component Rendering

- #### Props

- #### Event Handling

- #### Reducer Testing

```js
test("should handle INCREMENT action", () => {
  expect(counter(1, { type: "INCREMENT" })).toBe(2);
});
```

​

Reference: [Reducer Tests](https://cn.redux.js.org/docs/recipes/WritingTests.html)

## 3. Jest CLI — Run tests

1. #### Run all tests

- `jest`

- VS Code (Plugin: Jest)

2. #### Run single test

- Fuzzy matching of test filename and path `jest fileName or Path`

3. #### Debug test

4. #### Update snapshot

- `jest -u`

5. #### Test coverage

Test coverage tool Istanbul\*

```js
  jest --coverage
```

- coverage folder

- coverage report

![coverage report](images/coverge.png)

## 4. Test conventions in our project

1. #### NGBE

- Folder

- `Web.JasmineTests/Components`, `Web.JasmineTests/dataStore`,

- Naming

- `XXXTest.js`

2. #### MMB

- Folder

- `__test__`

- Naming

- Files with `.test.js` suffix.

- JCL

- Test code and source code are placed in the same folder, based on proximity.

- Filenames end with `.test.js`.

- Coverage

- Component (basic UI)

- Datastore (90%+)

- Utils (90%+)

## 5. Review

- Why Jest: Simple configuration, React-friendly, supports DOM API, parallel execution of test cases, snapshots, built-in assertion library, built-in report, automatic mock ES modules, user-friendly CLI,

- Front-end testing focus

- The generated snapshot is also part of the project code and needs to be properly committed and reviewed.

- Snapshots should not rely on uncertain code.

- For example, `Date.now()` should be mocked if it returns an uncertain value: `Date.now = jest.fn(() => 1482363367071);`

- Snapshot test names should be meaningful.

- Test-driven with snapshot?

## 6. References

1. [Jest](https://facebook.github.io/jest/docs/en/getting-started.html)

2. [Enzyme API](http://airbnb.io/enzyme/docs/api/)

3. [Jest Configure](https://facebook.github.io/jest/docs/en/configuration.html)

4. [Reducer Tests](https://cn.redux.js.org/docs/recipes/WritingTests.html)
