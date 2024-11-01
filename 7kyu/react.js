var React = require("react");

const element1 = createElement('Hello World'); // creates a <div>Hello World</div>
const element2 = createUnorderedList(['apples', 'oranges', 'bananas']); // creates a <ul> with <li> elements

// Function to create a React element
function createElement(content, tag = 'div', props = {}) {
  const children = Array.isArray(content) ? content : [content];
  return React.createElement(tag, props, ...children);
}

// Function to create an unordered list
function createUnorderedList(list) { 
  const listItems = list.map((item, index) => 
    createElement(item, 'li', { key: index })
  );
  return createElement(listItems, 'ul');
}

