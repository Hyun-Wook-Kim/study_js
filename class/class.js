// 클래스는 함수이며, 기존의 프로토타입과 조금은 다른 새로운 객체 생성 방식 중 하나이다.
// 클래스 또한 값으로 사용할 수 있는 1급 객체이다! (변수에 저장, 값으로 전달, 등등)
// 클래스 내부에는 메서드만 정의할 수 있으며, 생성자 메섣, 정적 메서드, 프로토타입 메서드 3가지다.

//인스턴스의 생성
{
  class Person {}
  const me = new Person();
  console.log(me);
}

//메서드 생성
{
  class Person {
    //인스턴스를 생성하고 초기화하는 constructor
    constructor(name, age = 5) {
      this.name = name;
      this.age = age;
      // constructor 는 new 연산자와 함께 호출되면 자동으로 인스턴스를 this에 바인딩한다.
      // return 을 명시적으로 반환하게 되면 this에 인스턴스가 아닌 명시적으로 반환된 객체가 반한됨으로 return은 쓰지 않아야 한다!
    }
  }

  const me = new Person("KIM");
  console.log(me);
}

console.clear();

{
  // 생성자 함수를 사용해 인스턴스를 생성하는 경우, 프로토타입 메서드는 명시적으로 프로토타입에 메서드를 추가해야 한다.

  function man(name) {
    this.name = name;
  }
  man.prototype.sayHi = function () {
    console.log(`Hi! my name is ${this.name}`);
  };

  const kim = new man("Kim-Hyun-Wook");
  kim.sayHi();

  // 반면 클래스 내에서 정의한 함수의 경우 기본적으로 프로토타입 메서드가 된다.
  class Person {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(`Hi! my name is ${this.name}`);
    }
  }

  const lee = new Person("Lee");
  lee.sayHi();
}

console.clear();

//정적 메서드
{
  // 생성자 함수의 정적 메서드 (인스턴스를 생성하지 않고도 호출할 수 있는 함수)
  function Person(name) {
    this.name = name;
  }

  Person.sayHi = function () {
    console.log("Hi");
  };

  Person.sayHi();

  //클래스의 정적 메서드
  class Man {
    constructor(name) {
      this.name = name;
    }
    static sayHello() {
      console.log("hello");
    }
  }

  Man.sayHello();

  // 인스턴스는 sayHell()를 사용할 수 없다.
  // 인스턴스의 prototype은 Man.prototype이기 때문에 class는 프로토타입 체인상에 존재하지 않는다.
}

console.clear();

// 상속에 의한 클래스 확장
{
  class Animal {
    constructor(age, weight) {
      this.age = age;
      this.weight = weight;
    }

    eat() {
      return "eat";
    }

    move() {
      return "move";
    }
  }

  class Bird extends Animal {
    fly() {
      return "fly";
    }
  }

  const bird = new Bird(1, 5);
  console.log(bird, bird.eat(), bird.move(), bird.fly());
}

{
  // super

  class Base {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }

  class Derived extends Base {
    constructor(a, b, c) {
      super(a, b);
      // super 를 호출하면, base class 의 constructor를 호출한다. (a,b,는 base에 있었음!)
      this.c = c;
    }
  }

  const derived = new Derived(1, 2, 3);
  console.log(derived);

  // 주의사항
  // 1. sub 클래스의 constuctor를 생략하지 않으면, 반드시 super를 써야함. (그 전에는 this 참조 불가)

  class Base2 {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      return `hi! ${this.name}`;
    }
  }

  class Derived2 extends Base2 {
    sayHi() {
      // 메서드 내에서 super를 참조하면, 수퍼 클래스의 메서드를 호출할 수 있다.
+
      return `${super.sayHi()}. How are you doing?`;
    }
  }
  const derived2 = new Derived2("KIM");
  console.log(derived2.sayHi());
}
