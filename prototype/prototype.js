"use strict";

function pen(color) {
  this.color = color;
}

pen.prototype = {
  year: "2021",
  model: "monami",
  write: function () {
    console.log("슥슥");
  },
};

const pen1 = new pen("red");
// console.log(pen1.write());
pen1.write();
const pen2 = new pen("blue");
console.log(pen1, pen2);

console.clear();

// const person = {
//   name: "lee",
// };

// __proto__ 의 함수를 이용해 객체의 프로토타입을 교체 (할당)해줄 수 있다.
const obj = {};
const parnet = { x: 1 };
obj.__proto__ = parnet;

const person = {
  name: "Lee",
};

console.log(person.hasOwnProperty("__proto__"));
console.log(Object.prototype.hasOwnProperty("__proto__"));
// __proto__ 접근자 프로퍼티는 생성된 객체가 아니라 객체의 prototype에 저장되어 있다.

//그러나 __proto__을 직접 사용하는 것은 권장하지 않는다. 객체 중 prototype을 상속하지 않는 객체도 있기 때문.
// 대신 getPrototypeOf 또는 setPrototypeOf 를 이용해 프로로타입의 참조를 취득하거나 프로토타입을 교체하자.

const obj2 = {};
const parent = { x: 1 };

Object.getPrototypeOf(obj2); // 기본
console.log(obj2.x); // undefined
Object.setPrototypeOf(obj2, parent);
Object.getPrototypeOf(obj2); // parent
console.log(obj2.x); // 1

// 함수 객체의 prototype 프로퍼티
console.log(function () {}.prototype); // constructer: f 생성자 함수가 생성할 인스턴스의 prototype을 가리킨다.
console.log({}.prototype); // 일반 객체는 prototype 프로퍼티를 가지지 않는다.
// 애로우 함수, 축약 메서드 표현으로 정의한 메서드도 prototype을 가지지 않는 non-constructor 이다.

// constructor 프로퍼티는 자신을 참조하고 있는 생성자함수를 가리킨다.
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");
// me 에는 constructor 프로퍼티가 없지만, me 객체의 프로토타입은 person.prototype에는 있음!
console.log(me.constructor === Person);

function people(name) {
  this.name = name;
}

console.clear();

const man1 = new people("KIM");

people.prototype.sayHello = function () {
  console.log("say hello!");
};

man1.sayHello();

const man2 = new people("Lee");
man2.sayHello();

console.clear();
