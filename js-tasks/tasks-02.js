//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (string) => string.split(" ");
// const stringToArray = (string) => [...string.match(/\S+/g)]; 

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//const DNAtoRNA = dna => dna.split('').map(nucleic => nucleic === "T" ? nucleic = "U" : nucleic).join('');
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");
// const DNAtoRNA = (dna) => dna.split("T").join("U");
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//const min = numbers => numbers.reduce((current, min) => current < min ? current : min);
//const max = numbers => numbers.reduce((current, max) => current > max ? current : max);
const maxOfArray = (numbers) => Math.max(...numbers);
const minOfArray = (numbers) => Math.min(...numbers);

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
const minIndexValue = (numbers, toReturn) =>
  toReturn === "value"
    ? Math.min(...numbers)
    : numbers.indexOf(Math.min(...numbers));

//Додаткові задачки по JS

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (int) => int * 2;

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadAge, sonAge) => Math.abs(dadAge - sonAge * 2);

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => (n - 1) * 2;

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (floor) =>
  floor > 13 ? floor - 2 : floor > 0 ? floor - 1 : floor;
// const getRealFloor = (n) => (n > 0 ? n - (n > 13 ? 2 : 1) : n);

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (hours, minutes, seconds) =>
  ((hours * 60 + minutes) * 60 + seconds) * 1000;
// function past(h, m, s) {
//   const setTime = new Date().setHours(h, m, s);
//   const midNight = new Date().setHours(0, 0, 0);
//   return Math.round(setTime - midNight);
// }

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
// const  isDivisible = (number, firstDivider, secondDivider) => number%firstDivider ===0 && number%secondDivider===0
