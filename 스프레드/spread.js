{
  // 스프레드는 이터러블 객체를 펼쳐 개별적인 값들의 '목록'으로 만든다

  console.log(...[1, 2, 3]);
  console.log(..."Christmas!");
  //   console.log(...{ a: 1, b: 2 }); 이터레이터를 찾을 수 읎다고 뜸

  // 값들의 목록 이기 때문에, 변수에 할당할 수 없다!
  //   const result = ...[1,2,3]

  // 대신 쉬표로 구분한 값의 목록을 사용하는 경우에는 가능하다

  // 1. 함수 호출문의 인수
  // 2. 배열 리터럴의 요소 목록
  // 3. 객체 리터럴의 프로퍼티 목록
}

{
  // 1. 함수 호출문의 목록

  const arr = [1, 2, 3];
  console.log(Math.max(arr)); // 숫자가 아니기에 NaN가 뜬다
  console.log(Math.max(...arr)); // 배열을 펼쳐 값의 목록으로 전달된다.
  console.log(Math.max.apply(null, arr)); // 원래는 이런식으로 apply를 썼어야 했음.

  // rest 파라미터와 조금 혼동할 수 있다.

  function foo(...rest) {
    console.log(rest);
  }
  foo(arr); // rest 파라미터는 목록을 받아 '배열'의 형태로 나오지만
  console.log(...arr); // 스프레드는 배열을 받아 개별 목록으로 펼쳐서 나온다.
}

{
  // 2. 배열 리터럴 내부에서 사용하는 경우

  var arr = [1, 2].concat([3, 4]);
  console.log(arr); // 기조네는 이렇게 결합 해야했다면

  const arr2 = [...[1, 2], ...[3, 4]];
  console.log(arr2); // 스프레드 문법을 이용하면 요렇게 만들어낼 수 있다.

  var arr3 = [1, 4];
  var arr4 = [2, 3];
  arr3.splice(1, 0, arr4);
  console.log(arr3); // 기대한 결과는 [1, [2,3], 4] 가 아니었음!
  //   arr3 = [1, 4];
  //   arr4 = [2, 3];
  //   console.log(Array.prototype.splice.apply(arr3, [1, 0].concat(arr4)));
  //   console.log(arr4);  ?? 하여튼 뭐 요따구로 했어야 했는데

  const arr5 = [1, 4];
  const arr6 = [2, 3];
  arr5.splice(1, 0, ...arr6);
  console.log(arr5); // 요로코롬 간단하게 표현해줄 수 있다.

  //배열의 복사
  var origin = [1, 2];
  var copy = origin.slice();
  console.log(copy, copy === origin); // 원래는 이렇게 했던 복사를

  const origin2 = [1, 2];
  const copy2 = [...origin2];
  console.log(copy2, origin2 === copy2); // 요렇게 할 수 있다. 단 이 때는 얕은 복사임.

  //이터러블을 배열로

  function sum() {
    // 유사 배열인 arguments를 배열로 변환
    var args = Array.prototype.slice.call(arguments);

    return args.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  }
  console.log(sum(1, 2, 3, 4));

  //스프레드를 사용하면 더 쉽다.
  function sum2() {
    args = [...arguments];
    return args.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  }
  console.log(sum2(1, 2, 3, 4));

  // 근데 rest 파라미터가 애초에 배열로 받아서..

  const sum3 = (...args) => args.reduce((pre, cur) => pre + cur, 0);
  console.log(sum3(1, 2, 3, 4));
  // 단 이터러블이 아닌 유사 배열 객체는 스프레드 못씀 ㅠ

  const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
  };
  //   console.log([...arrayLike]); 이터러블이 아니라고 뜸.
  // 유사 배열 객체는 Array.from() 으로 배열로 반환한다.

  console.log(Array.from(arrayLike));
}

console.clear();

{
  //3. 객체 리터럴 내부에서 사용하는 문법 (좀 최근거임)
  const obj = { x: 1, y: 2 };
  const copy = { ...obj };
  console.log(copy);
  const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } }; // 요런식으로 쓸 수 있다는 거!
  console.log(merged);

  // 그럼 원래는 어떻게 했냐
  const merged2 = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
  console.log(merged2);

  //Object.assign(타겟객체, 병합할 객체 목록 (겹치면 뒤에 위치한 프로퍼티가 우선순위를 가짐)) 요걸 이용해 병합 추가 제거를 했음.
  console.log(Object.assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 }));

  // 스프레드 쓰면 간단하당께로!
  const merged3 = { ...{ x: 1, y: 2 }, ...{ y: 3, z: 4 } };
  console.log(merged3);
  const changed = { ...{ x: 1, y: 2 }, ...{ y: 3 } };
  console.log(changed);
  const added = { ...{ x: 1, y: 2 }, ...{ z: 3 } };
  console.log(added);
}
