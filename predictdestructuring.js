
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
//? we have the const to destruct the elemnt from the array (tesla) to var "randomCar"
const [ ,otherRandomCar ] = cars
//?we skip first elemnt(tesla) by placing 1 coma ",otherrandomCar"
console.log(randomCar)
console.log(otherRandomCar)
//! so we have the first consolle log tesla and the second console.log mercedes


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
//? the variable not in the scoop 
console.log(otherName);
//!  name is not defined


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);
//? we have the value of the password const "12345" because we declare it as a string
console.log(hashedPassword);
//? we dont have the 'password' in const 'person' so hashed password is not defined
//!12345 undefined


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
//? we used destrution to skip the '8' and go to next number '2'
const [,,,second] = numbers;
//? we used destrution to skip the '8,2,3' and go to the fourth elemnt '5'
const [,,,,,,,,third] = numbers;
//? we used destrution to skip the '8, 2, 3, 5, 6, 1, 67, 12,' and go to next number '2'
console.log(first == second);
//? '2' and '5' not equal : false
console.log(first == third);
//? '2' and '2' equal : true
//! false true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
//? gives us the value of the key 'value'
console.log(secondKey);
//? gives us the array in the secondKey
console.log(secondKey[0]);
//?gives us the first number in the array because we have [0] which is '1'
console.log(willThisWork);
//?we have comma so shows is '5'

