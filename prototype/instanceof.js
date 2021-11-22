//instanceof 이항연산자

function Person(naame) {
  this.name = name;
}

const me = new Person("KIM");

//우항 생성자 함수의 prototype에 바인딩 된 객체가, 좌항 인스턴스의 프로토타입 체인 상에 존재하면 true.
console.log(me instanceof Person);
console.log(me instanceof Object);

function Person2(name) {
  this.name = name;
}

// 프로로타입을 변경하며 생성자 함수와 프로토타입의 연결이 파괴되었을 경우에는..
const me2 = new Person("kim");
const parent = {};
Object.setPrototypeOf(me2, parent);
console.log(Person2.prototype === parent);
console.log(parent.constructor === Person2);
console.log(me2 instanceof Person2);
console.log(me2 instanceof Object);

Person2.prototype = parent;
console.log(me2 instanceof Person2);
console.log(me2 instanceof Object);
