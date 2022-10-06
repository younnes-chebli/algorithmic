const cinemaTariffs = () => {
    let reducedTariff = true;
    let priceToPay = 10;

    if(reducedTariff) {
        priceToPay = 8;
    }

    return `${priceToPay}€`;
}

const maximum = () => {
    let a = 9;
    let b = 2;
    let c = 3;

    let max = a;
    if(b > a) {
        max = b;
        if (c > max) {
            max = c;
        }
    }

    return max;
}

const identicalDice = () => {
    let firstDice = Math.floor(Math.random() * 6) + 1;
    let secondDice = Math.floor(Math.random() * 6) + 1;
    let thirdDice= Math.floor(Math.random() * 6) + 1;
    let cpt = 1;

    if(firstDice === secondDice) {
        ++cpt;
        if(secondDice === thirdDice) {
            ++cpt;
        }
    } else if (secondDice === thirdDice) {
        ++cpt;
        if (thirdDice === firstDice) {
            ++cpt
        }
    } else if (firstDice === thirdDice) {
        ++cpt;
        if (thirdDice === secondDice) {
            ++cpt;
        }
    }

    if(cpt > 1)
        return `${cpt} identical dices:\n${firstDice}, ${secondDice}, ${thirdDice}.`;
    else
        return `No identical dice!:\n${firstDice}, ${secondDice}, ${thirdDice}.`;
}

const daySNumber = () => {
    let nb = 5;
    let day = "No day";

    switch(nb) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    }

    return `${nb}: ${day}`;
}

const printShop = () => {
    const FIRST_TEN = 0.12;
    const NEXT_TWENTY = 0.11;
    const NEXT = 0.10;
    let nbCopies = 31;
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

//console.log(cinemaTariffs());
//console.log(maximum());
//console.log(identicalDice());
//console.log(daySNumber());
console.log(printShop());