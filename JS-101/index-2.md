## Browser

The function of a browser is to retrieve the resources you want from the server and then display them in the browser window. Resources are usually HTML files, but could also be PDFs, images, or other types of content. The location of a resource is determined by the URI (Uniform Resource Identifier) ​​provided by the user.

### Rendering Process

Taking WebKit as an example:

![](./webkitflow.png)

1. Parse HTML into the DOM, parse CSS into CSSOM (CSS Object Model)

2. Combine the DOM and CSSOM into a render tree

3. Complete the layout of the render tree

4. Draw the render tree onto the screen

### Embedding JavaScript

#### Adding Code Blocks Directly JavaScript code can be directly embedded into a webpage using the `<script>` tag.

```javascript
<script>// write javascript code</script>
```

#### Loading External Scripts

```
<script src="index.js"></script>

```

#### Javascript Loading and Execution

Normal Web Page Loading Process:

1. The browser downloads and parses the HTML web page simultaneously.

2. During parsing, a script tag is encountered.

3. Parsing is paused, and control of web page rendering is transferred to the JavaScript engine.

4. If the script tag references an external script, the script is downloaded; otherwise, it is executed directly.

5. After execution, control is returned to the rendering engine, and parsing of the HTML web page resumes.

- defer

```
<script src="index.js" defer></script>

```

- async

```
<script src="index.js" async></script>

```

[Javascript defer vs async](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

## DOM (Document Object Model)

> The DOM (Document Object Model) is an API for HTML and XML documents. The DOM depicts a hierarchical tree of nodes, allowing developers to add, delete, and modify parts of a page.

- Browsers parse structured documents (such as HTML and XML) into a series of nodes based on the DOM model, and these nodes are then arranged into a tree structure (DOM Tree).

- Every element in a document is part of the Document Object Model (DOM) to which the document belongs. JavaScript can access and manipulate content stored in the DOM.

- The DOM is a specification, independent of programming languages.

### Node

> The smallest unit of the DOM is called a node. The tree structure of a document (DOM tree) is composed of various types of nodes.

There are 12 types of nodes:

- `Document`: The top-level node of the entire document tree

- `Element`: Various HTML tags of a webpage (such as `<body>`, etc.)

- `Attribute`: The attributes of webpage elements

- `Text`: The text between or contained within tags

- ......

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1 class="heading">This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

All DOM node types inherit from the browser's native Node object, thus sharing some common properties and methods.

### window object

> In a browser, the window object refers to the current browser window. It is also the top-level object of all objects.

> "Top-level object" refers to the highest-level object; all other objects are its subordinates. JavaScript stipulates that all global variables of the browser environment are properties of the window object.

#### Common Properties and Methods

**window.location** -- Gets the URL information of the current window.

**window.innerHeight / window.innerWidth** -- Returns the height/width of the visible portion of the webpage within the current window.

**window.outerHeight / window.outerWidth** -- Returns the height and width of the browser window.

**window.screen** -- Returns information about the display device.

**window.onload** -- Specifies a function to be called when the browser window finishes loading.

```javascript
window.onload = function () {
  console.log("Load done!");
};
```

### document object

> The document object is the root node of the document. Each webpage has its own document object.

> Obtain this object through document or window.document.

#### Common Properties and Methods

**document.cookie** -- Used to manipulate browser cookies.

**document.createElement(name)** -- Used to create an element node and return that node.

**document.getElementsByTagName(name)** -- Searches for HTML tag names and returns elements that match the specified criteria.

**document.getElementsByClassName(name)** -- Returns all elements whose class names match the specified criteria.

**document.getElementById(id)** -- Returns the element node that matches the specified id attribute.

**document.querySelector(selector)** -- Accepts a CSS selector as an argument and returns the element nodes that match that selector.

**document.querySelectorAll(selector)** -- Similar to querySelector, but returns a collection of all nodes that match the given selector.

> Exercise: Open NGBE and find the element with `id=submit_button` on the Flight page.

### Element

> The Element object corresponds to the HTML element of the webpage. Every HTML element is converted into an Element node object in the DOM tree.

#### Common Properties and Methods

**Element.id**

**Element.tagName**

**Element.innerHTML** -- Returns the HTML code contained within this element.

**Element.outerHTML** -- Returns the HTML code of the specified element node, including itself and its child elements.

**Element.querySelector()**

**Element.querySelectorAll()**

**Element.getElementsByTagName()**

**Element.getElementsByClassName()**

**Element.append()** -- Inserts a node inside the current element.

**Element.remove()** -- Removes the current element node from the DOM tree.

Exercise: Open NGBE and delete the element with `id=submit_button` on the Flight page.

### Event

#### Event Types

- Mouse, keyboard, form, drag and drop, document events...

#### How to Bind an Event

- Binding in HTML code

```html
<button onclick="func()"></button>
```

- Binding via JS

- addEventListener(eventType, handler, useCapture): Binds a listener function

- removeEventListener(eventType, handler, useCapture): Removes a listener function

```javascript
const elem = document.getElementById("hello");

elem.addEventListener("click", () => {
  console.log("Hello");
});
```

[Mini-Exercise](https://codepen.io/anlihuer/pen/bvaxBv?editors=1010)

#### Event Bubbling

When an event is triggered, the event flow starts from the target node and bubbles upwards layer by layer until it reaches the root node.

[Mini-Funny🌰](https://codepen.io/anlihuer/pen/GxQMYz?editors=1011)

#### Event Capturing

When an event is triggered, the event flow starts from the root node and bubbles downwards layer by layer until it reaches the target node.

[Little Little Little Little 🌰](https://codepen.io/anlihuer/pen/eMVGxv)

#### Event Delegation

> By binding relevant events to the parent element of the target element, when an operation is performed on the target element, the event stream bubbles up to the parent element to which the event was bound. By checking the event's target element (e.target), the event is indirectly (for now, let's understand it this way) bound to the target element.

The purpose of event delegation: When target elements (which may be a group of elements) are continuously added or deleted, all target elements can successfully bind events without needing to re-bind events for each newly added target element.

[小小小小小🌰](https://codepen.io/anlihuer/pen/OvzwzR?editors=1111)

<!--#### Event Loop

Bound two events to the same DOM element, order?-->

<!--
#### Some Tips

##### Event.preventDefault()

If an event is not explicitly handled, its default behavior is prevented. However, the event will continue to bubble unless one of its event listeners calls `stopPropagation()` or `stopImmediatePropagation()`. Furthermore, if the event's property `cancelable=false`, it indicates that the event has no default behavior, and calling this method will have no effect.

Understanding the default behavior of events:

- 🌰
	A `button` element with `type="submit"` will automatically submit the form when its click event is triggered.

``html

<button id='btn' type='submit'></button>

```

``javascript

document.getElementById('btn').onclick = function(e) {

e.preventDefault();

});

```
Using `preventDefault` can prevent the form from automatically submitting.

- 🌰
	A `<a></a>` element, with its attribute `src='***'`, automatically redirects to the specified page when a user clicks the link. Now, there's a requirement: the user clicking the link should open a new page, not redirect within the current page.

``html

<a id='link' src="www.google.com"></a>

```

``javascript

document.getElementById('link').onclick = function(e) {

e.preventDefault();

window.open(this.href);

});

```

##### Event.stopPropagation()

> Prevents event bubbling

##### return false

- event.preventDefault()

- event.stopPropagation()

- Exits the current function/loop, preventing execution of subsequent logic.

-->

## Debug

## Recommendation

1. [How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)

[Chinese version](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork)

2. [Introduction to browser rendering principles](https://coolshell.cn/articles/9666.html)

3. [Overview of the DOM model](http://javascript.ruanyifeng.com/dom/node.html)

4. [Javascript defer vs async](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
