function selectionSort() {
  let selectionSort = new SelectionSort();
  selectionSort.sort();
};

function insertionSort() {
  let insertionSort = new InsertionSort();
  insertionSort.sort();
};

function bubbleSort() {
  let bubbleSort = new BubbleSort();
  bubbleSort.sort();
};

let createElements = (elementsNumber = 50) => {
  let mainElement = document.querySelector('.all-bars-wrapper');
  for (let i = 0; i < elementsNumber; i++) {
    let barWrapper = createDivElement();
    let bar = createDivElement();
    addCSSClass(barWrapper, 'bar-wrapper');
    addCSSClass(bar, 'bar');
    setRandomHeight(bar);
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