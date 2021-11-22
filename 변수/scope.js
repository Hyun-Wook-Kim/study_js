// var a = 1;

// function foo() {
//   console.log(a);
//   var a = 3;
//   console.log(a);
// }

// foo();
var b = 1;

function foo2() {
  console.log(b);
  var b = 3;
  console.log(b);
  foo3();
}

foo2();

function foo3() {
  console.log(b);
}
