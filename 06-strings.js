const concatenation = () => {
    let string1 = "Bonjour ";
    let string2 = "Au revoir";
    let concatenated = string1 + string2;

    return concatenated;
}

const lowercase = () => {
    let c = 'A';
    let lc = c.toLowerCase();
    return lc;
}

const uppercase = () => {
    let c = 'a';
    let uc = c.toUpperCase();
    return uc;
}

const convertName = () => {
    let name = "Doe, John";
    name = name.replaceAll(",", "");
    let nameSplitted = name.split(" ");
    let nameConverted = nameSplitted[1] + " " + nameSplitted[0];
    return nameConverted;
}

const whitespace = () => {
    let sentence = "Bonjour comment ça va ?";
    let sentenceWithoutWhitespaces = sentence.replaceAll(" ", "");
    return sentenceWithoutWhitespaces;
}

//console.log(concatenation());
//console.log(lowercase());
//console.log(uppercase());
//console.log(convertName());
console.log(whitespace());