"use strict";

/* property의 지정, 변경, 읽기*/
const person = {};

const FN = Object.defineProperty(person, "firstName", {
  value: "KIM",
  writable: true,
  enumerable: true,
  configurable: true,
});

const LN = Object.defineProperty(person, "lastName", {
  value: "Hyun Wook",
});

console.log("firstName", Object.getOwnPropertyDescriptor(person, "firstName"));
console.log("lastName", Object.getOwnPropertyDescriptor(person, "lastName"));

console.log(Object.keys(person));

// Object.defineProperty(person, "lastName", { writable: true });

console.clear();

const man = {};

Object.defineProperties(man, {
  firstName: {
    value: "Ungmo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Lee",
    writable: true,
    enumerable: true,
    configurable: true,
  },

  fullName: {
    get() {
      return this.firstName + this.lastName;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

man.fullName = "HyunWook Kim";
console.log(man);

console.clear();

/* 프로퍼티의 확장 방지 */
const boy = { name: "Gun" };
console.log(Object.isExtensible(boy));

Object.preventExtensions(boy);
console.log(Object.isExtensible(boy));

// boy.age = "15";
delete boy.age;

const girl = { name: "park" };
// console.log(Object.isSealed(girl));

Object.seal(girl);
console.log(Object.isSealed(girl));

// girl.age = 10;
// delete girl.name;
Object.defineProperty(girl, "name", {
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptors(girl));
// ??? 왜안되냐 이거

const woman = { age: "45" };

Object.freeze(woman);
console.log(Object.isFrozen(woman));

// woman.age = 10;
console.log(Object.getOwnPropertyDescriptors(woman));
