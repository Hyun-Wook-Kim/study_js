// Object.create(프로토타입으로지정할객체 , 프로퍼티키와 디스크립터 객체) 생략 가능 => 기본값

//프로타타입이 null인 객체는 체인의 최상단에 위치한다.
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj));

// Object.prototype을 상속받지 못한다.
// console.log(obj.toString());

obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});

//위 코드는 아래 코드와 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;

console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

//new 연산자 없이, 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.
function Person(name) {
  this.name = name;
}
obj = Object.create(Person.prototype);
obj.name = "KIM";
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);

//모든 객체는 Object.prototype의 빌트인 메서드를 사용할 수 있지만, create로 만들어진 객체는 사용할 수 없다.
//그래서 빌트인 메서드는 추후 배울 call 메서드를 이용해 간접적으로 호출한다.

//일일이 프로퍼티의 키 값과 디스크럽터를 지정하는 것은 번거로우므로 객체 리터럴 내부에서 __proto__를 이용해 직접 상속할 수도 있다.

const myProto2 = { x: 20 };

const obj3 = {
  y: 30,
  __proto__: myProto2,
};

// 위 코드는 아래와 동일함
// const obj3 = Object.create(myProto2,{
//     y:{value :20, configurable:true, writable:true, enumerable:true}
// })

console.log(obj3.x, obj3.y);
