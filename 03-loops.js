function printNumbersOneToN() {
    let n = 5;

    for(let i = 1; i <= n; ++i) {
        console.log(i);
    }
}

function printNumbersOneToNDesc() {
    let n = 5;

    for(let i = n; i > 0; --i) {
        console.log(i);
    }
}

function printNumbersMinusNToN() {
    let n = 5;

    for(let i = -n; i <= n; ++i) {
        console.log(i);
    }
}

function printNumbersOneToNOdd() {
    let n = 5;

    for(let i = 1; i <= n; ++i) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

function printRandomNumbersInt() {
    let randomInt = Math.floor(Math.random() * 10);

    for(let i = 1; i <= randomInt; ++i) {
        console.log(i);
    }
}

function throwDices() {
    let nbOfThrow = 3;
    let searchedNb = 6;
    let dices = [];
    let cpt = 0;

    for(let i = 1; i <= nbOfThrow; ++i) {
        let dice = Math.floor(Math.random() * 6) + 1;
        if(dice === searchedNb) {
            ++cpt;
        }
        dices.push(dice);
    }

    console.log(dices + ": " + searchedNb + " appears " + cpt + " times");
}

function evenNumbers() {
    let nb = 6;

    for(let i = 0; i <= nb; ++i) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

function perfectNumber() {
    let number = 5;
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

//printNumbersOneToN();
//printNumbersOneToNDesc();
//printNumbersMinusNToN();
//printNumbersOneToNOdd();
//printRandomNumbersInt();
//throwDices();
//evenNumbers();
perfectNumber();
