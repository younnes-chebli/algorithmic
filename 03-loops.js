const printNumbersOneToN = () => {
    let n = 5;
    let res = [];

    for(let i = 1; i <= n; ++i) {
        res.push(i);
    }

    return res;
}

const printNumbersOneToNDesc = () => {
    let n = 5;
    let res = [];

    for(let i = n; i > 0; --i) {
        res.push(i);
    }

    return res;
}

const printNumbersMinusNToN = () => {
    let n = 5;
    let res = [];

    for(let i = -n; i <= n; ++i) {
        res.push(i);
    }

    return res;
}

const printNumbersOneToNOdd = () => {
    let n = 5;
    let res = [];

    for(let i = 1; i <= n; ++i) {
        if(i % 2 !== 0) {
            res.push(i);
        }
    }

    return res;
}

const printRandomNumbersInt = () => {
    let randomInt = Math.floor(Math.random() * 10);
    let res = [];

    for(let i = 1; i <= randomInt; ++i) {
        res.push(i);
    }

    return res;
}

const throwDices = () => {
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

    return `${dices}:\n${searchedNb} appears ${cpt} times.`;
}

const evenNumbers = () => {
    let nb = 6;
    let res = [];

    for(let i = 0; i <= nb; ++i) {
        if(i % 2 == 0) {
            res.push(i);
        }
    }

    return res;
}

const perfectNumber = () => {
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

    return `Is ${number} perfect? ${perfect}`;
}

//console.log(printNumbersOneToN());
//console.log(printNumbersOneToNDesc());
//console.log(printNumbersMinusNToN());
//console.log(printNumbersOneToNOdd());
//console.log(printRandomNumbersInt());
//console.log(throwDices());
//console.log(evenNumbers());
console.log(perfectNumber());
