var isSorting = false;

class Sorter {
  constructor() {
    this.sorting = false;
  }

  async sort() {
    this.sorting = true;
    isSorting = true;
  }


}

class BubbleSort extends Sorter {

  async sort() {
    super.sort()
    let allElements = getAllElements();
    let sorted = 0;
    for (let i = 0; i < allElements.length; i++) {
      for (let j = 0; j < (allElements.length - 1) - i; j++) {
        let el1 = getElementHeight(allElements[j]);
        let el2 = getElementHeight(allElements[j + 1]);
        if (getElementColor(allElements[j]) != "green") {
          if (el1 > el2) {
            setElementColor(allElements[j], "red");
            setElementColor(allElements[j + 1], "red");
            await sleep(5);
            setElementHeight(allElements[j], el2);
            setElementHeight(allElements[j + 1], el1);
            sorted -= 1;
          } else {
            sorted += 1;
            setElementColor(allElements[j], "pink");
            setElementColor(allElements[j + 1], "pink");
          }
          await sleep(5);
          setElementColor(allElements[j], "purple");
          setElementColor(allElements[j + 1], "purple");
        }
      }
      setElementColor(allElements[(allElements.length - 1) - i], "green");
      if (sorted === allElements.length - 1) break;
      else sorted = 0;
    }
    this.sorting = false;
    isSorting = false;
  }

}

class InsertionSort extends Sorter {

  async sort() {
    super.sort()
    let allElements = getAllElements();
    for (let i = 1; i < allElements.length; i++) {
      let key = getElementHeight(allElements[i]);
      setElementColor(allElements[i], "red");
      let j = i - 1;
      while (j >= 0 && getElementHeight(allElements[j]) > key) {
        await sleep(5);
        allElements[j+ 1].style.height = allElements[j].style.height;
        j = j - 1;
        setElementColor(allElements[j + 1], "pink");
        await sleep(5);
        setElementColor(allElements[j + 1], "purple");
      }
      setElementHeight(allElements[j + 1], key);
      setElementColor(allElements[i], "purple");
    }
    this.sorting = false;
    isSorting = false;
  }
}

class SelectionSort extends Sorter {

  async sort() {
    super.sort()
    let allElements = getAllElements();
    for (let i = 0; i < allElements.length - 1; i++) {
      let minimum = i;
      for (let j = i + 1; j < allElements.length; j++) {
        setElementColor(allElements[j], "pink");
        await sleep(5);
        if (getElementHeight(allElements[j]) < getElementHeight(allElements[minimum])) {
          minimum = j;
        }
        setElementColor(allElements[j], "purple");
      }
      let temp = getElementHeight(allElements[minimum]);
      setElementHeight(allElements[minimum], getElementHeight(allElements[i]));
      setElementHeight(allElements[i], temp);
      setElementColor(allElements[i], "green");
      if (i == allElements.length - 2) setElementColor(allElements[i + 1], "green");
      await sleep(5);
    }
    this.sorting = false;
    isSorting = false;
  }
}