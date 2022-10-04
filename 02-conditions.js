function cinemaTariffs() {
    let reducedTariff = true;
    let priceToPay = 10;

    if(reducedTariff) {
        priceToPay = 8;
    }

    console.log(priceToPay + "€");
}

function maximum() {
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

    console.log(max);
}

function identicalDice() {
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
        console.log(cpt + " identical dices");
    else
        console.log("No identical dice!");

    console.log(firstDice + ", " + secondDice + ", " + thirdDice);
}

function daySNumber() {
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

    console.log(nb + ": " + day);
}

function printShop() {
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
    
    console.log(total);
}

//cinemaTariffs();
//maximum();
//identicalDice();
//daySNumber();
printShop();