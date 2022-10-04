function convertionTimeToSeconds(hour, minutes, seconds) {
    console.log((hour * 3600) + (minutes * 60) + seconds);
}

function printShop(nbCopies) {
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
    
    console.log(total);
}

function perfectNumber(number) {
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

    console.log("Is " + number + " perfect? " + perfect);
}

function minimumPosition(myArray) {
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

function orderedArray(myArray) {
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

//convertionTimeToSeconds(1, 0, 0);
//printShop(31);
//perfectNumber(6);
//minimumPosition([0, 30, -5]);
orderedArray([1, 9, 5, 6]);
