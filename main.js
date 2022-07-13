// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = cardNum => {
    let checkArr;

    // check if argument is string or array
    if(typeof cardNum === 'string'){
        checkArr = cardNum.split('').reverse().map(x => Number(x)); // create new array of numbers
    } else {
        checkArr = [].concat(cardNum).reverse(); // create new array to avoid altering the original array
    }
    
    let checkDigit = checkArr.splice(0,1)[0]; // drop last digit and store

    // carry out algorithm
    for(let i = 0; i < checkArr.length; i++){
        if(i % 2 !== 0){
            continue;
        } else {
            checkArr[i] *= 2;
            if(checkArr[i] > 9){
                checkArr[i] -= 9;
            }
        }
    }
    return (checkArr.reduce((acc, val) => acc + val) + checkDigit) % 10 // return results
}

    // add invalid cars to new array and return
const findInvalidCards = nestArr => {
    const results = [];

    for(let arr of nestArr){
        if(validateCred(arr) > 0){
            results.push(arr);
        }
    }

    return results
}


const idInvalidCardCompanies = nestArr => {
    const companies = [];
    for(let arr of nestArr){

        if(arr[0] === 3 && !companies.some(x => x === 'Amex')){
            companies.push('Amex');
        } else if (arr[0] === 4 && !companies.some(x => x === 'Visa')){
            companies.push('Visa');
        } else if(arr[0] === 5 && !companies.some(x => x === 'Mastercard')){
            companies.push('Mastercard');
        } else if(arr[0] === 6 && !companies.some(x => x === 'Discover')){
            companies.push('Discover');
        } else if(arr[0] < 3 || arr[0 > 6]){
            console.log('company not found');
        }

    }

    return companies;
}

console.log(validateCred('4539677908016808'))
console.log(validateCred(valid1))

console.log(idInvalidCardCompanies(batch));