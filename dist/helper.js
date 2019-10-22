let sleep = milliSeconds => {
    console.log('sleeping for ' + milliSeconds);
    return new Promise(resolve => setTimeout(resolve, milliSeconds));
};

let addCSSClass = (element, className) => {
    element.classList.add(className);
};

let createDivElement = () => {
    return document.createElement('DIV');
};

let getRandomHeight = (min = 0,max = 100) => {
    return `${min + Math.floor(Math.random() * (max-min))}px`;
};

let setElementHeight = (element) => {
    return element.style.height = getRandomHeight();
};

let getElementHeight = (element) => {
    return element.style.height;
};

let appendDivToParentElement = (parentElement, elementToAppend) => {
    return parentElement.appendChild(elementToAppend);
};

let getAllElements = () => {
    return document.querySelectorAll('.bar');
};