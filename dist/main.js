let isSorting = false;

let sleep = milliSeconds => {
  console.log('sleeping for ' + milliSeconds);
  return new Promise(resolve => setTimeout(resolve, milliSeconds));
};

let addCssClass = (element, className) => {
  element.classList.add(className);
};

let createDivElement = () => {
  return document.createElement('DIV');
};

let getRandomHeight = () => {
  let randomSum = Math.floor(10 + Math.random() * 51);
  return `${randomSum + Math.floor(Math.random() * 101)}px`;
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

async function selectionSort() {
  let allElements = getAllElements();
  for (let i = 0; i < allElements.length - 1; i++) {
    let minimum = i;
    for (let j = i + 1; j < allElements.length; j++) {
      allElements[j].style.backgroundColor = 'pink';
      await sleep(5);
      if (parseInt(allElements[j].style.height.split('px')[0]) < parseInt(allElements[minimum].style.height.split('px')[0])) {
        minimum = j;
      }
      allElements[j].style.backgroundColor = 'purple';
    }
    let temp = parseInt(allElements[minimum].style.height.split('px')[0]) + "px";
    allElements[minimum].style.height = parseInt(allElements[i].style.height.split('px')[0]) + "px";
    allElements[i].style.height = temp;
    allElements[i].style.backgroundColor = 'green';
    if (i == allElements.length - 2) allElements[i + 1].style.backgroundColor = 'green';
    await sleep(5);
  }
};

async function insertionSort() {
  isSorting = true;
  let allElements = getAllElements();
  for (let i = 1; i < allElements.length; i++) {
    let key = parseInt(allElements[i].style.height.split('px')[0]);
    allElements[i].style.backgroundColor = 'red';
    let j = i - 1;
    while (j >= 0 && parseInt(allElements[j].style.height.split('px')[0]) > key) {
      await sleep(5);
      allElements[j + 1].style.height = allElements[j].style.height;
      j = j - 1;
      allElements[j+1].style.backgroundColor = 'pink';
      await sleep(5);
      allElements[j+1].style.backgroundColor = 'purple';
    }
    allElements[j + 1].style.height = key + "px";
    allElements[i].style.backgroundColor = 'purple';
  }
  isSorting = false;
};

async function bubbleSort() {
  isSorting = true;
  let allElements = getAllElements();
  let sorted = 0;
  for (let i = 0; i < allElements.length; i++) {
    for (let j = 0; j < (allElements.length - 1) - i; j++) {
      let el1 = parseInt(allElements[j].style.height.split('px')[0]);
      let el2 = parseInt(allElements[j + 1].style.height.split('px')[0]);
      if (allElements[j].style.backgroundColor != "green") {
        if (el1 > el2) {
          allElements[j].style.backgroundColor = "red";
          allElements[j + 1].style.backgroundColor = "red";
          await sleep(5);
          allElements[j].style.height = el2 + "px";
          allElements[j + 1].style.height = el1 + "px";
          sorted -= 1;
        } else {
          sorted += 1;
          allElements[j].style.backgroundColor = "pink";
          allElements[j + 1].style.backgroundColor = "pink";
        }
        await sleep(5);
        allElements[j].style.backgroundColor = "purple";
        allElements[j + 1].style.backgroundColor = "purple";
      }
    }
    allElements[(allElements.length - 1) - i].style.backgroundColor = 'green';
    if (sorted === allElements.length - 1) break;
    else sorted = 0;
  }
  isSorting = false;
};

let createElements = (elementsNumber) => {
  let mainElement = document.querySelector('.all-bars-wrapper');
  for (let i = 0; i < elementsNumber; i++) {
    let barWrapper = createDivElement();
    let bar = createDivElement();
    addCssClass(barWrapper, 'bar-wrapper');
    addCssClass(bar, 'bar');
    setElementHeight(bar);
    appendDivToParentElement(barWrapper, bar);
    appendDivToParentElement(mainElement, barWrapper);
  }
};

let addGenerateNewArrayButtonListener = () => {
  let generateNewArrayButton = document.querySelector('.generate-new-array');
  generateNewArrayButton.addEventListener('click', e => {
    if (!isSorting) {

      document.querySelector('.all-bars-wrapper').innerHTML = '';
      createElements(50);
    }
  });
};

let addSelectionSortButtonListener = () => {
  let selectionSortButton = document.querySelector('.selection-sort');
  selectionSortButton.addEventListener('click', e => {
    console.log('selection-sort');
    if (!isSorting) selectionSort();
  });
};

let addBubbleSortButtonListener = () => {
  let bubbleSortButton = document.querySelector('.bubble-sort');
  bubbleSortButton.addEventListener('click', e => {
    console.log('bubble sort');
    if (!isSorting) bubbleSort();
  });
};

let addInsertionSortButtonListener = () => {
  let insertionSortButton = document.querySelector('.insertion-sort');
  insertionSortButton.addEventListener('click', e => {
    console.log('insertion sort');
    if (!isSorting) insertionSort();
  });
};

let addEventListeners = () => {
  addGenerateNewArrayButtonListener();
  addBubbleSortButtonListener();
  addInsertionSortButtonListener();
  addSelectionSortButtonListener();
};

window.addEventListener('load', () => {
  createElements(50);
  addEventListeners();
});