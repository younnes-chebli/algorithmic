const convertionTimeToSeconds = (hour, minutes, seconds) => {
    return (hour * 3600) + (minutes * 60) + seconds;
}

const printShop = (nbCopies) => {
    const FIRST_TEN = 0.12;
    const NEXT_TWENTY = 0.11;
    const NEXT = 0.10;
    let total = 0;

    if(nbCopies <= 10) {
        total += FIRST_TEN * nbCopies;
    } else if (nbCopies >= 10 && nbCopies <= 30) {
        total += FIRST_TEN * 10;
        total += NEXT_TWENTY * (nbCopies - 10);
    } else {
        total += FIRST_TEN * 10;
        total += NEXT_TWENTY * 20;
        total += NEXT * (nbCopies - 30);
    }
    
    return total;
}

const perfectNumber = (number) => {
    let perfect = false;
    let cpt = 0;

    let i = 1;
    for(let i = 1; i < number; ++i) {
        if(number % i == 0) {
            cpt += i;
        }
    }

    if(cpt === number) {
        perfect = true;
    }

    return `Is ${number} perfect? ${perfect}`;
}

const minimumPosition = (myArray) => {
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

const orderedArray = (myArray) => {
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
    return (myArray);
}

//console.log(convertionTimeToSeconds(1, 0, 0));
//console.log(printShop(31));
//console.log(perfectNumber(6));
//console.log(minimumPosition([0, 30, -5]));
console.log(orderedArray([1, 9, 5, 6]));