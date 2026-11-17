// question 1 
let str = "123"
let result = Number(str) + 7 
console.log(result);
///////////////////////////////
// quesion 2 
function checkValue(value) {
    if(!value) {
        return "invalid"
    } 
    return value;
}
console.log(checkValue(0));
///////////////////
// question 3 
for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        continue
    }   
    console.log(i); 
}
/////////////////////////
// question 4 
const numbers = [1,2,3,4,5];
let evenNumbers = numbers.filter((num) => num % 2 ===0);
console.log(evenNumbers);
/////////////////////////////
// question 5 
function MergeArr() {
    let Arr1 = [1,2,3]
    let Arr2 = [4,5,6]
    return [...Arr1, ...Arr2]
}
console.log(MergeArr);
/////////////////
// question 6 
function getDayOfWeek(dayNumber){
    switch (dayNumber){
        case 1: 
        return "sunday";
        case 2: 
        return "monday";
        case 3: 
        return "tuesday";
        case 4: 
        return "wednesday";
        case 5: 
        return "thuresday";
        case 6: 
        return "friday";
        case 7: 
        return "saturday";
        default:
        return  "invalid day"
    }
}
console.log(getDayOfWeek(2));
///////////////////////
//question 7 
const words = ["a", "ab", "abc"]
let getLegnth= words.map((word) => word.length)
console.log(getLegnth);
//////////////////////////////
//question 8 
function checkDivisible(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        return "divisible by both"
    }
    return "not divisible by both"
}
console.log(checkDivisible(15));
//////////////////////////////////////
// question 9 
const getSquare = () => {
    let num = 5;
    return num * num 
}
console.log(getSquare());
/////////////////
// question 10 
function formatPerson({name, age}) {
    return `${name} is ${age} years old`
}
const person = {name: "john", age:"25"}
console.log(formatPerson(person));
////////////////////////////
// question 11 
function sumAll(...numbers) {
return numbers.reduce((total, current) => total + current, 0) 
}
console.log(sumAll(1,2,3,4,5));
/////////////////////////////////
// question 12 
function waitThreeSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success")
        }, 3000)
    });
}
waitThreeSeconds().then((message) => console.log(message));
/////////////////////////////////////////////////////////////
// question 13
function findLargestNum(arr) {
    return Math.max(...arr)
}
console.log(findLargestNum([1,3,7,2,4]));
/////////////////////
// question 14 
function getObjectKeys(obj) {
    return Object.keys(obj)
}
console.log(getObjectKeys({name: "john", age:"30" }));
/////////////////////////////////////////
// question 15 
function splitWords(sentence) {
    return sentence.split(" ")
}
console.log(splitWords("The quick brown fox"));
/////////////////////
