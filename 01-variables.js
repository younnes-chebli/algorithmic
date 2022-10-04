function sum(){
    let a = 1;
    let b = 1;
    console.log(a + b);    
}

function division() {
    let a = 9;
    let b = 3;
    console.log(a / b);
}

function modulo() {
    let a = 13;
    let b = 4;
    console.log(a % b);
}

function concatenate() {
    let a = "Hello I'm ";
    let b = "Younnes";
    console.log(a + b);
}

function vat() {
    const RATE = 0.21;
    let price = 15;
    let res = price * RATE;
    console.log(res);
}

function circleSurface() {
    let radius = 3;
    console.log(Math.PI * (radius * radius));
}

function convertionTimeToSeconds() {
    let hour = 1;
    let minutes = 0;
    let seconds = 0;
    console.log((hour * 3600) + (minutes * 60) + seconds);
}

//sum();
//division();
//modulo();
//concatenate();
//vat();
//circleSurface();
convertionTimeToSeconds();