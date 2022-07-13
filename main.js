//1.)
const cars = ['Ford', 'BMW','Saab','Lincoln']
console.log(cars)

let carsLen = cars.length
console.log('The length of the array1 is', carsLen);

const moreCars = ['Chevy','RangeRover','Lamborghini','Honda']
console.log(moreCars)

let moreCarsLen = moreCars.length
console.log('The length of array2 is', moreCarsLen)


//2.)
const totalCars = cars.concat(moreCars);
console.log(totalCars)

let totalCarsLen = (carsLen + moreCarsLen);
console.log('The length of the array1 + array2 is',totalCarsLen)


//3.)
let hondaIndex = totalCars.indexOf('Honda')
console.log('The index of Honda is,', hondaIndex)

//4.)
let stringOfCars = totalCars.join('')
console.log('string Of Cars array converted to a string', stringOfCars)

//5.)
let carsFromString = stringOfCars.split(",")
console.log(carsFromString)

//6.)
let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

//7.)
carsInReverse = carsInReverse.sort()
console.log("Index of 'BMW' after sorting:" + carsInReverse.indexOf("BMW"))

//8.)
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)

//9.)

const removedReptiles = pets.splice(4,2)
console.log('This Removed Reptiles from String',removedReptiles)
console.log(pets)
const addedHamster = pets.splice(6,2,'hamster')
console.log('Added Hamster to String', pets)

//10.)
let removedPets = pets.pop()
console.log('Current Pets:', pets)
console.log('Removed Pets:',removedPets)

//11.)
let pushPets = pets.push('hamster')
console.log('Pushed Pet:', pets)

//12.) 
let removedPet1 = pets.shift(0)
console.log('I Removed 1st Pet in Pets Array', pets)

//13.) 
const addedturtle =pets.unshift('turtle')
console.log('added turtle to 1st Pet in Pets Array', pets)

//14.)
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach (addtwo = (num, index, arr) => {
    return numbers[index] = num + 2;
});
console.log('Added two to all numbers',numbers)