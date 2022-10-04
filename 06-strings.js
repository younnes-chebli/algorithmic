function concatenation() {
    let string1 = "Bonjour ";
    let string2 = "Au revoir";
    let concatenated = string1 + string2;

    console.log(concatenated);
}

function lowercase() {
    let c = 'A';
    let lc = c.toLowerCase();
    console.log(lc);
}

function uppercase() {
    let c = 'a';
    let uc = c.toUpperCase();
    console.log(uc);
}

function convertName() {
    let name = "Doe, John";
    name = name.replaceAll(",", "");
    let nameSplitted = name.split(" ");
    let nameConverted = nameSplitted[1] + " " + nameSplitted[0];
    console.log(nameConverted);
}

function whitespace() {
    let sentence = "Bonjour comment ça va ?";
    let sentenceWithoutWhitespaces = sentence.replaceAll(" ", "");
    console.log(sentenceWithoutWhitespaces);
}

// concatenation();
//lowercase();
//uppercase();
//convertName();
whitespace();