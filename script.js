// // let js = "amazing";
// // if (js === "amazing") alert("Java script is fun!");

// // console.log(40 + 8 + 23 - 10);

// const markMass = 80;
// const markHeight = 1.8;
// const johnMass = 90;
// const johnHeight = 1.9;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / johnHeight ** 2;

// const markHigherBMI = true;

// if (bmiMark > bmiJohn) {
//   console.log(
//     `Mark BMI is ${bmiMark} and John BMI is ${bmiJohn} so Mark has bigger BMI`
//   );
// } else {
//   console.log(
//     `Mark BMI is ${bmiMark} and John BMI is ${bmiJohn} so John has bigger BMI`
//   );
// }

// console.log(bmiMark, bmiJohn);

// const inputYear = "1991";

// console.log(Number(inputYear) + 18);

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 in an amazing number!");
// }

// == stosuje sie gdy mamy cos automatycznie skonwertowanego
// === stosuje sie gdy mamy jakas pewna liczbe ze jest w jakiejs zmiennej
const bill = 275;
const tip = bill > 50 || bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
