// 프로퍼티 존재의 확인.

// 1. in 연산자 (key in object)

const person = {
  name: "Lee",
  address: "Seoul",
};

console.log("name" in person);
console.log("address" in person);
console.log("age" in person);

//다만 in 연산자는 대상 객체가 상속받은 모든 프로토타입의 프로퍼티까지 확인한다.
// person에는 toString이 없지만, Object.prototype에 있기 떄문에 아래 연산의 결과는 true이다.
console.log("toString" in person);

//es6부터는 Reflect.has 연산자를 이용할 수도 있다.
console.log(Reflect.has(person, "name"));
console.log(Reflect.has(person, "age"));

// 2. Object.prototype.hasOwnProperty 매서드
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));
// in 과 다르게, 전달받은 인수가 객체 고유의 프로퍼티 키인 경우에만 true고, 상속받은 속성에 대해서는 false값을 출력한다.
console.log(person.hasOwnProperty("toString"));

//////////////////////////////////////////////////////////////////////////////////////////////

// 프로퍼티의 열거

// 1. for ... in 문    for (변수선언문 in 객체) {...}

const Person = {
  name: "Lee",
  address: "Seoul",
};

for (const key in Person) {
  console.log(key + " : " + person[key]);
}

// for in 문은 상속받은 프로퍼티도 열거하지만, toString처럼 열거 불가능 - [[Enumerable]] 의 값이 false 인 경우에는 열거하지 않는다.

const Person2 = {
  name: "KIM",
  address: "Seoul",
  __proto__: { age: 20 },
};

for (const i in Person2) {
  console.log(i + " : " + Person2[i]);
}

// 키가 심벌인 프로퍼티 또한 열거하지 않는다.

//자신의 프로퍼티만 열거하려면 hasOwnProperty로 확인을 해야 한다.
for (const i in Person2) {
  if (Person2.hasOwnProperty(i) == false) continue;
  console.log(i + " : " + Person2[i]);
}

//배열의 경우 for in 문보다는 for, for of, Array.prototype.forEach 문을 사용하는 걸 권장한다.
const arr = [1, 2, 3];
arr.x = 10;

for (const i in arr) {
  console.log(arr[i]);
}

//arr의 length는 프로퍼티를 제외한 길이만 나오기 때문에 일반적 for문을 사용할 수 있다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 또는 forEach 매서드를 이용하면 요소가 아닌 프로퍼티는 제외한다
arr.forEach((v) => console.log(v));

//for of 선언문을 사용해 키가 아닌 값을 변수에 선언한다.
for (const value of arr) {
  console.log(value);
}

//이처럼 자신의 고유 프로퍼티만 열거하기 위해선 추가적인 조치가 필요로 하는데,
// Object.keys/values/entries 메서드를 이용하면 고유 프로퍼티만 열거할 수 있다.

const person3 = {
  name: "Lee",
  address: "seoul",
  __poroto__: { age: 20 },
};

// Object.keys는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
console.log(Object.keys(person3));

// Object.values는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.
console.log(Object.values(person3));

// Object.entries는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍을 배열로 반환한다.
console.log(Object.entries(person3));
Object.entries(person3).forEach(([key, value]) => console.log(key, value));
