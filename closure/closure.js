//클로져란 함수와 함수가 선언된 렉시컬 환경의 조합이다.
// 이게 뭔 개소리야!? 라고 생각이 든다.

//함수는 자신이 정의된 환경 (위치)에서의 렉시 환경을
// 내부 슬롯 [[environment]] 에 저장을 한다.
//아래 inner의 x는 전역 변수 x=1 을 기억하고 있다.

{
  const x = 1;

  function outer() {
    const x = 3;
    console.log(x);
    inner();
  }

  function inner() {
    console.log(x);
  }
  outer();
}

// 아래 함수 inner은 outer가 리턴하고 소멸한 후에도 살아있다.
// 그 때, const x = 10; 도 같이 소멸할 것 같지만..
// console 창에는 멀쩡히 뜬다. why?
// 중첩함수에서 내부함수가 외부함수보다 오래 살고, 외부 렉시컬 환경 참조를 하고 있다면
// 변수 x 는 자유변수가 되고, inner 함수는 x에 대해 닫힌 함수, 즉 closure 가 된다!!
// 가비지 콜렉터는 참조되고 있는 x에 대해서는 메모리 공간을 해제하지 않는다.
// 즉 x는 이제 어디서든 참조할 수 있는 자유변수가 되었지만,
// 변수에 접근할 수 있는 함수는 오직 inner() 뿐이어서
// 상태의 유지와 관리, 은닉에 유리한 방법이 된다.

{
  const x = 1;

  function outer() {
    const x = 10;
    const inner = function () {
      console.log(x);
    };
    return inner;
  }

  const inenrfunc = outer();
  inenrfunc();
}

// 함수는 기본적으로 상위 스코프를 기억하지만 모든 함수를 클로저라고 부르지는 않는다.
// 상위 스코프의 식별자를 차모 하고,
// 외부 함수보다 오래 유지되는 경우에 한정한다.

console.clear();

//아래의 경우, debugger에서 foo 는 closure함수로 표시되고,
//참조하고 있는 식별자에는 x만 표시가 된다!
// 참조하지 않는 식별자에게 까지 메모리를 할당하지는 않는다.

{
  function foo() {
    const x = 1;
    const y = 2;

    function bar() {
      //   debugger;
      console.log(x);
    }
    return bar;
  }

  const bar = foo();
  bar();
}

//그럼 이 크로저를 어따 써먹냐?
//아래처럼 num을 증가시키는 함수가 있다고 치자.
{
  let num = 0;

  const increase = function () {
    return ++num;
  };

  console.log(increase());
  console.log(increase());
  console.log(increase());
}
// 이 때 num은 전역변수로, 어디서든 참조해서 값을 바꿔버릴 수가 있다.
//만약 num은 오직 increase함수만 접근할 수 있게 하고 싶으면?

{
  const increase = (function () {
    let num = 0;

    return function () {
      return ++num;
    };
  })();
  console.log(increase());
  console.log(increase());
  console.log(increase());
  console.log(increase());
}

//즉시 실행 함수로 num을 선언-초기화 하고, return된 increase를 반복 호출해보자.
// 이제 num 은 외부에서 직접 접근할 수 없는 private 변수이면서,
// increase를 통해서만 상태를 변경할 수 있게 되었다.

console.clear();


{
  const counter = (function () {
    let num = 0;
    // 이 함수 객체의 리터럴은 별도의 스코프를 생성하지 않는다는데... 왜지..?
    return {
      increase() {
        return ++num;
      },
      decrease() {
        return num > 0 ? --num : 0;
      },
    };
  })();
  console.log(counter.increase());
  console.log(counter.increase());
  console.log(counter.decrease());
  console.log(counter.decrease());
}
3