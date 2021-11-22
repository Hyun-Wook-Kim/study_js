//정적 프로퍼티 or 메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조할 수 있는 생성자 함수가 지닌 프로퍼티 / 메서드이다.
// 생성자 함수로 생성한 인스턴스에서는 호출 불가!

function Person(name) {
  this.name = name;
}

//프로토타입의 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! my name is ${this.name}`);
};

//정적 프로퍼티
Person.staticProp = "static prop";
//정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("KIM");

Person.staticMethod(); // 정적 메서드가 호출된다.
me.staticMethod(); // is not a function이 뜬다!
