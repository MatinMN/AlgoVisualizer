var isSorting = false;

class Sorter{
    constructor(){
        this.sorting = false;
    }

    async sort(){
        this.sorting = true;
        isSorting = true;
    }


}

class BubbleSort extends Sorter{

    async sort(){
        super.sort()
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
        this.sorting = false;
        isSorting = false;
    }

}

class InsertionSort extends Sorter{

    async sort(){
        super.sort()
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
        this.sorting = false;
        isSorting = false;
    }
}

class SelectionSort extends Sorter{

    async sort(){
        super.sort()
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
        this.sorting = false;
        isSorting = false;
    }
}