// "use strict";
{
  const circle = {
    radius: 5,
    getDiameter() {
      console.log(this);
      return this.radius * 2;
    },
  };

  console.log(circle.getDiameter());
}

{
  function Circle(radius) {
    this.radius = radius;
  }

  Circle.prototype.getDiameter = function () {
    console.log(this);
    return 2 * this.radius;
  };

  const circle2 = new Circle(5);
  console.log(circle2.getDiameter());
}

console.log(this);

/////////////////////////////////////
console.clear();

{
  const foo = function () {
    console.log(this);
  };

  foo();
  //일반 함수의 this 는 window를 가르킨다.

  const obj = { foo };
  obj.foo();
  // 메서드 함수의 this 는 함수를 호출한 object를 가르킨다.

  new foo();
  // 생성자 함수에서의 this는 함수가 생성한 인스턴스를 가르킨다.
}

// 중첩함수 혹은 콜백함수 내부에서도 일반 함수로 호출되었다면 this 는 전역객체를 가르킨다.
{
  var value = 1;

  const obj = {
    value: 100,
    foo() {
      console.log("foo의 this는", this);
      console.log("foo의 this의 value는", this.value);
      function bar() {
        console.log("내부함수 bar의 this는", this);
        console.log("내부함수 bar의 this의 value는", this.value);
      }
      bar();
    },
  };
  obj.foo();
}

// 다만 대부분의 콜갭 or 중첩함수가 helper 함수의 역할을 하기 때문에 this를 일치시켜야 좋은 경우가 많다.
// 방법은 다음과 같다!

{
  // 1. this를 다른 변수에 할당하는 것
  var value = 1;
  const obj = {
    value: 100,
    foo() {
      const that = this;
      // 애로우 함수를 쓰지 않은 경우의 this는 window를 그대로 가르키고, that은 obj를 가르킨다.
      //   setTimeout(function () {
      //     console.log(this, that);
      //   }, 100);

      //2.  애로우 함수의 this는 window가 아닌 자신을 호출한 obj를 가리킨다! (정확히는, 상위 스코프의 this를 가르킨다)
      //   setTimeout(() => {
      //     console.log(this, that);
      //   }, 100);
    },
  };
  obj.foo();
}

{
  console.clear();
  //this는 메서드를 소유한 객체가 아닌, 메서드를 호출한 객체에 바인딩 된다.

  const person = {
    name: "Lee",
    getName() {
      return this.name;
    },
  };

  const newPerson = {
    name: "Kim",
  };
  newPerson.getName = person.getName;
  console.log(newPerson.getName()); // 여기서 this는 person이 아닌 newPerson 에 바인딩 된다.

  const getName = newPerson.getName;
  console.log(getName()); // 이렇게 되면 window.name 즉 ''가 출력이 된다.
}

{
  //function.prototype.apply/call/bind 메서드에 의한 this 호출

  function getThisBinding() {
    return this;
  }
  console.log(getThisBinding());

  const thisArg = { a: 1 };
  // getThisBinding을 호출하면서, this를 thisArg를 바인딩하는 함수.
  console.log(getThisBinding.apply(thisArg));
  console.log(getThisBinding.call(thisArg));

  function getThisBinding2() {
    return this;
  }
  const thisArg2 = { a: 1 };

  console.log(getThisBinding.apply(thisArg2, [1, 2, 3]));
  console.log(getThisBinding.call(thisArg2, 1, 2, 3));
}

// 근데 이걸 어따 쓰냐고...?
{
  function convertArgsToArray() {
    console.log(arguments);

    // const err = arguments.slice(); 요건 안된다. arguments는 유사배열이기 때문
    const arr = Array.prototype.slice.call(arguments); // 근데 요건 된다!
    console.log(arr);
    return arr;
  }

  convertArgsToArray(1, 2, 3);

  // 반면 function.prototype.bind는 함수를 호출하지 않고 this만 전달한다.
  function getThisBind() {
    return this;
  }

  const thisArg = { b: 1 };

  console.log(getThisBind.bind(thisArg));
  console.log(getThisBind.bind(thisArg)());
}

// 이처럼 콜백함수 혹은 중첩 함수 내의 this를 상위 스코프와 일치시켜 주어야 할 때 사용한다!
// 솔직히 아직 무슨말인지는 잘 모르겠다 ㅎㅎ;
