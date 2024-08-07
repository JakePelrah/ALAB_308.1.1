// ALAB 308.1.1


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



///////////////////////////////// LAB PROBLEMS /////////////////////////////////////

///////////////////////////////// PART 1 /////////////////////////////////////

// Check five: check if all numbers are divisible by 5.
// Use modulo 5 to check if number are divisible by 5,
// if number is divisible by 5 modulo should return zero,
// sum numbers and compare to zero
const isDivisibleBy5 = n1 % 5 + n2 % 5 + n3 % 5 + n4 % 5 === 0

// Check five: check if the first number is larger than the last.
const firstGreaterLast = n1 > n4

// Arithmetic chain: 
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const result = ((n2 - n1) * n3) % n4

// Check six: Change the way that isOver25 calculates so that we do not 
//need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isLessThanEqual25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25

// check the result using the non negated function
const isValidTwo = isSum50 && isTwoOdd && isLessThanEqual25 && isUnique;

// Finally, log the results.
console.log(isValidTwo)


///////////////////////////////// PART 2 /////////////////////////////////////

// The distance of the trip, in total, is 1,500 miles.
const distanceMiles = 1500

// You have a fuel budget of $175.
const fuelBudgetDollars = 175

// The average cost of fuel is $3 per gallon.
const avgFuelCostDollars = 3

// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
const fuelEfficieny = {
    55: 30,
    60: 28,
    75: 23
}

// calcGallonsOfFuel: calculates the gallons of fuel used
// based on fuel efficiency
function calcGallonsOfFuel(milesPerGallon) {
    return distanceMiles / milesPerGallon
}

// calcFuelCosts: calculate fuel cost based on average price and gallons used
function calcFuelCosts(gallonsOfFuel) {
    return gallonsOfFuel * avgFuelCostDollars
}

// calcTripTimeInHours: calculate trip time based on total miles and miles per hour
function calcTripTimeInHours(milesPerHour) {
    return distanceMiles / milesPerHour
}

// calculate gallons of fuel per travel speed
const gallons55 = calcGallonsOfFuel(fuelEfficieny[55])
const gallons60 = calcGallonsOfFuel(fuelEfficieny[60])
const gallons75 = calcGallonsOfFuel(fuelEfficieny[75])

// calculate fuel cost for gallons used
const cost55 = calcFuelCosts(gallons55)
const cost60 = calcFuelCosts(gallons60)
const cost75 = calcFuelCosts(gallons75)

// calculate trip time for miles per hour
const hours55 = calcTripTimeInHours(55)
const hours60 = calcTripTimeInHours(60)
const hours75 = calcTripTimeInHours(75)

// log results to console
console.log(`
Traveling @ 55 MPH: ${gallons55.toFixed(2)} gallons @ $${cost55.toFixed(2)}, ${hours55.toFixed(2)} hours
Traveling @ 60 MPH: ${gallons60.toFixed(2)} gallons @ $${cost60.toFixed(2)}, ${hours60.toFixed(2)} hours
Traveling @ 75 MPH: ${gallons75.toFixed(2)} gallons @ $${cost75.toFixed(2)}, ${hours75} hours

Priority Time: Traveling at 60 MPH will use $160 dollars of gas and will get you to the destination in 25 hours.
Priority Cost: Traveling at 55 MPG will use $150 dollars of gas and will get you to the destination in 27.3 hours.
I'd choose time over cost.
`)
