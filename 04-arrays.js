function printArray(){
    let myArray = ["Hello", 30];
    console.log(myArray);
}

function maximum() {
    let myArray = [0];
    let max;

    if(myArray.length !== 0) {
        max = myArray[0];
        for(element of myArray) {
            if(element >= max) {
                max = element;
            }
        }
        console.log("Max: " + max);
    } else {
        console.log("Array is empty");
    }
}

function minimum() {
    let myArray = [0, 30, -5];
    let min;

    if(myArray.length !== 0) {
        min = myArray[0];
        for(element of myArray) {
            if(element <= min) {
                min = element;
            }
        }
        console.log("Min: " + min);
    } else {
        console.log("Array is empty");
    }
}

function minimumPosition() {
    let myArray = [-90, 30, -5];
    let min;
    let minPos;

    if(myArray.length !== 0) {
        min = myArray[0];
        minPos = myArray.indexOf(this[0]);
        for(element of myArray) {
            if(element <= min) {
                min = element;
                minPos = myArray.indexOf(min);
            }
        }
        console.log("Min: " + min);
        console.log("Index: " + minPos);
    } else {
        console.log("Array is empty");
    }
}

function orderedArray() {
    let myArray = [1, 9, 5, 6];
    let ordered;

    if(myArray.length !== 0) {
        for(let i = 0; i < myArray.length -1 && ordered != false; ++i) {
            if(myArray[i] <= myArray[i + 1]) {
                ordered = true;
            } else {
                ordered = false;
            }
        }
    } else {
        console.log("Array is empty!");
    }

    if(ordered === true) {
        console.log("Array is ordered!");
    } else if(ordered === false) {
        console.log("Array is not ordered!")
    }
    console.log(myArray);
}

//printArray();
//maximum();
//minimum();
//minimumPosition();
orderedArray();