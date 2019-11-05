let sleep = milliSeconds => {
  console.log('sleeping for ' + milliSeconds);
  return new Promise(resolve => setTimeout(resolve, milliSeconds));
};

let addCSSClass = (element, className) => {
  element.classList.add(className);
};

let setElementColor = (element, color) => {
  element.style.backgroundColor = color;
};

let getElementColor = (element) => {
  return element.style.backgroundColor;
};

let setElementHeight = (element, height) => {
  element.style.height = height + "px";
};

let getElementHeight = (element) => {
  return parseInt(element.style.height.split('px')[0]);
};

let createDivElement = () => {
  return document.createElement('DIV');
};

let getRandomHeight = (min = 0, max = 100) => {
  return `${min + Math.floor(Math.random() * (max-min))}px`;
};

let setRandomHeight = (element) => {
  return element.style.height = getRandomHeight();
};

let appendDivToParentElement = (parentElement, elementToAppend) => {
  return parentElement.appendChild(elementToAppend);
};

let getAllElements = () => {
  return document.querySelectorAll('.bar');
};