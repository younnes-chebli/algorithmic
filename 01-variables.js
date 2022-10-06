const sum = () => {
    let a = 1;
    let b = 1;
    return a + b;    
}

const division = () => {
    let a = 9;
    let b = 3;
    return a / b;
}

const modulo = () => {
    let a = 13;
    let b = 4;
    return a % b;
}

const concatenate = () => {
    let a = "Hello I'm ";
    let b = "Younnes";
    return a + b;
}

const vat = () => {
    const RATE = 0.21;
    let price = 15;
    let res = price * RATE;
    return res;
}

const circleSurface = () => {
    let radius = 3;
    return Math.PI * (radius * radius);
}

const convertionTimeToSeconds = () => {
    let hour = 1;
    let minutes = 0;
    let seconds = 0;
    return (hour * 3600) + (minutes * 60) + seconds;
}

//console.log(sum());
//console.log(division());
//console.log(modulo());
//console.log(concatenate());
//console.log(vat());
//console.log(circleSurface());
console.log(convertionTimeToSeconds());