// 오버라이딩과 프로퍼티 섀도잉

const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드

  Person.prototype.sayHello = function () {
    console.log("Hi! My name is" + this.name);
  };
  return Person;
})();

const me = new Person("Lee");
me.sayHello = function () {
  console.log(`Hello! My name is ${this.name}`);
};
// 오버라이드로 인해 인스턴스에 설정된 sayHello()가 출력된다.
// 이 때 기존의 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉 이라고 한다.
me.sayHello();
delete me.sayHello;
// 하위 객체에서 프로타타입의 프로퍼티를 삭제하는 것은 불가능. 즉 기존의 섀도잉 된 프로퍼티가 다시 출력된다.
me.sayHello();

//프로토타입은 교체도 가능하다!

const Proto = (function () {
  function Proto(name) {
    this.name = name;
  }
  Proto.prototype = {
    sayHello() {
      console.log(`Hi! my name is ${this.name}`);
    },
  };
  return Proto;
})();

const you = new Proto("Kim");
// 다만 이럴 경우 생성자 함수와 constructor 의 연결이 끊어진다.
console.log(you.constructor);

const Proto2 = (function () {
  function Proto2(name) {
    this.name = name;
  }
  Proto.prototype = {
    constructor: Proto2,
    //이렇게 내부 constructor를 Proto2 생성자 함수와 연결을 시켜주면
    sayHello() {
      console.log(`Hi! my name is ${this.name}`);
    },
  };
  return Proto;
})();

const we = new Proto2("Park");
// 다시 생성자 함수와 constructor 프로퍼티가 연결이 된다!
console.log(we.constructor);

//생성자 함수에 의해 프로토타입을 교체할 경우, 기존의 생성자 함수의 prototype은 교채된 프로토타입을 가르키지만,
//인스턴스 (__proto__ or setPrototypeOf()의 경우, 기존 생성자 함수의 prototype은 교체된 프로토타입을 가르키지 않는다.)

//프로토타입 변경 정리!

//생성자 함수
function Car(model) {
  this.model = model;
}

// 인스턴스
const my = new Car("volvo");

//프로토타입으로 교체할 생성자 함수.
const Proto3 = {
  constructor: Car,
  Honkhonk() {
    console.log("Honk Honk " + `said ${this.model}`);
  },
};

//생성자 함수의 프로토타입을 Proto3로 변경
Car.prototype = Proto3;
// my 인스턴스의 프로토타입을Proto3로 변경
Object.setPrototypeOf(my, Proto3);

my.Honkhonk();
// 인스턴스의 constructor는 Car로 연결된다. (Object가 아니라)
console.log(my.constructor === Car);
// 인스턴스의 프로토타입은 생성자 함수의 프로토타입 Proto3와 동일하다.
console.log(Car.prototype === Object.getPrototypeOf(my));
