const printArray = () =>{
    let myArray = ["Hello", 30];
    return myArray;
}

const maximum = () => {
    let myArray = [0];
    let max;

    if(myArray.length !== 0) {
        max = myArray[0];
        for(element of myArray) {
            if(element >= max) {
                max = element;
            }
        }
        return `Max: ${max}`;
    } else {
        return `Array is empty`;
    }
}

const minimum = () => {
    let myArray = [0, 30, -5];
    let min;

    if(myArray.length !== 0) {
        min = myArray[0];
        for(element of myArray) {
            if(element <= min) {
                min = element;
            }
        }
        return `Min: ${min}`;
    } else {
        return `Array is empty`;
    }
}

const minimumPosition = () => {
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
        return `Min: ${min}\nIndex: ${minPos}`;
    } else {
        return `Array is empty`;
    }
}

const orderedArray = () => {
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
        return `Array is empty!`;
    }

    if(ordered === true) {
        return `Array is ordered!`;
    } else if(ordered === false) {
        return `Array is not ordered!`;
    }
    return myArray;
}

//console.log(printArray());
//console.log(maximum());
//console.log(minimum());
//console.log(minimumPosition());
console.log(orderedArray());