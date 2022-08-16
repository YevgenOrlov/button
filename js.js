//  Function declaration

// if (false) {
//   function f1() {
//     console.log("function 1 if");
//   }
// } else {
//   function f1() {
//     console.log("function 1 else");
//   }
// }
// f1();

function f2() {
  console.log("function f2");
}
f2();

// const f3 = function () {
//   console.log("function f3");
// };
// f3();
// const f4 = f3;
// console.log(f4 === f3);
// const f5 = function example() {
//   console.log("function example");
// };

// f5();
// example();

function example() {
  console.log("function example");
}
// const f5 = example;
// f5();
// example();
// console.log(f5 === example);

const f3 = function (a) {
  console.log("function f3" + a);
};
f3(44444444444);

const f5 = function example() {
  console.log("function example");
  console.log(example.name);
  //   console.log(this.name);
  console.log(f5.name);
};
f5();
const f6 = f5;
