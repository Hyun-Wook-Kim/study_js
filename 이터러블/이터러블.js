//이터레이션 프로토콜 : 순회 가능한 자료 구조를 만들기 위한 규칙
// 이 프로토콜을 따르는 객체를 '리터러블 객체' 라고 한다.
// 배열, map, set, 등이 이터터블이고, 일반 객체도 이터레이션 프로토콜을 준수하면 이터러블 객체가 된다.

//이터러블은 디스트럭처링 할당, 스프레드 문법, for of로 순회할 수 있다.

{
  const array = [1, 2, 3, 4];
  console.log([...array]);

  for (const item of array) {
    console.log(item);
  }

  const [a, b, c, d] = array;
  console.log(a, b, c, d);

  //반면 일반 객체는..
  const obj = { a: 1, b: 1 };
  //   console.log([...obj]); 이러터브리 아니라고 뜬다
  //   const [e, f] = obj;
  //   console.log(e, f);

  // 단 스프레드 프로퍼티 제안은 곧 통과될 듯.
}

{
  //Symbol.iterator 메서드 호출 => 이터레이터 반환.
  //반환된 이터레이터는 next 메서드를 가지고, 이터레이터 리절트 객체를 반환한다.

  const array = [1, 2, 3];
  const iterator = array[Symbol.iterator]();
  console.log("next" in iterator);

  console.log(iterator.next()); // value 는 현재 순회주인 이터러벌의 값, done은 순회 완료 여부
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

{
  //다음 객체들은 표준 빌트인 이터러블이다.
  //Array
  // String
  // Map
  // Set
  // TypedArray
  // arguments
  // Dom 컬렉션
}

console.clear();

{
  //for of 문

  for (const item of [5, 2, 3, 4]) {
    console.log(item); // 배열의 각 요소가 item에 할당 된다.
  }

  for (const item in [8, 2, 3, 4]) {
    console.log(item); // for in 문의 item은 index를 나타낸다.
  }

  // for of의 동작을 풀어보면 다음과 같다.

  const iterable = [1, 2, 3];
  const iterator = iterable[Symbol.iterator]();

  for (;;) {
    const res = iterator.next();
    console.log(res);
    if (res.done === true) break;
  }
}

console.clear();

{
  //유사 배열 객체는 length를 가지고, index로 접근할 수 있어 for문으로도 접근이 가능하다

  const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
  };

  console.log(arrayLike["a"]);

  for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
  }

  // 단, 유사 배열 객체는 iterator가 없다!

  //   for (const item of arrayLike) {
  //     console.log(item);
  //   }

  // 다행히, 유사 배열 객체는 Array.from() 메서드로 변환이 가능하다
  const arr = Array.from(arrayLike);
  console.log(arr);
  for (const item of arr) {
    console.log(item);
  }
}

{
  //일반 객체를 이터러블로 만들어보자!

  const fibonacci = {
    [Symbol.iterator]() {
      let [pre, cur] = [0, 1];
      const max = 10;

      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur > max };
        },
      };
    },
  };

  for (const item of fibonacci) {
    console.log(item);
  }

  // 이번에는 수열의 최대값을 외부에서 전달받을 수 있도록 해볼 거임.

  const fibonacci2 = function (max) {
    let [pre, cur] = [0, 1];

    return {
      [Symbol.iterator]() {
        return {
          next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
          },
        };
      },
    };
  };

  for (const item of fibonacci2(10)) {
    console.log(item);
  }

  //이 함수는 이터터블을 반환한다.
  const iterable = fibonacci2(5);
  // 이터러블의 Symbol.iterator 는 이러테이터를 반환한다.
  const iterator = iterable[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  // 이렇게 하긴 귀찮으니, 이터러블과 이터레이터를 같이 반환하는 객체를 만들자

  const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      },
    };
  };

  let iter = fibonacciFunc(10);

  for (const item of iter) {
    console.log(item);
  }

  iter = fibonacciFunc(10);
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
}

//사실 아직 뭔소린지는 모르겠다만...
//이터러블은 데이터 생성 시점을 늦추어 속도가 빠르고 메모리를 소비하지 않고 있다가
// for of 문의 내부에서 next가 호출될 때 데이터를 생성한다.
