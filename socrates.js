/**
 * 
 * Homework Assignment #4: Fuctions
 * Checckig Socrates is mortal or not
 * 
 */

let mortals = ["Bipin", "Ajay", "Socrates", "Rahul", "Ashish", "Khushbu"];

/**
 * 
 * @param {*} param
 * @returns {true|false} Boolean 
 */
function chekMortal(name) {
    const mortalLength = mortals.length // getting length of  the mortals array
    let isMortal;
    // Checking mortals is empty
    if (mortalLength > 0) {
        // checking socrats is mortal or not
        if (mortals.indexOf(name) > -1) {
            isMortal = true;
        } else {
            isMortal = false;
        }
    } else {
        isMortal = true;
    }
    return isMortal;
}
let nameOfPerson = "Socrates";
let isMortal = chekMortal(nameOfPerson); // Calling chekMortal function

if (isMortal) {
    console.log(`${nameOfPerson} is mortal`);
} else {
    console.log(`${nameOfPerson} is not mortal`);
}


/**
 * 
 * Extra credit
 * 
 */

const cake = ["vanilla", "chocolate"];

function cakeFunc(cake, isChocolate) {
    if (isChocklate) {
        return cake[1];
    } else {
        return cake[0];
    }
}
let isChocolate = true;
let cakeflavour = cakeFunc(cake, isChocolate);
console.log(cakeflavour);
