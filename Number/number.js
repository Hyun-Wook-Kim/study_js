// Number!

{
  // Number 생성자 함수
  const num1 = new Number(10);
  const num2 = new Number(); // 인수 없으면 0
  console.log(num1, num2);
  // 원시값이 있는데 왜 생성자 함수가 필요함?
  // ==> Number 생성자로 만들면 래퍼 객체로 생성
  // 원시값에 객체처럼 접근하면, 임시로 래퍼 객체를 만든다.
}
console.clear();

{
  //Number 프로퍼티

  //Number.EPSILON - 1과 1보다 큰 숫자  중 가장 작은수와의 차이.
  //이게 뭔소리냐?
  console.log(0.152 + 0.312); // 이 결과를 보면 0.46399999997 요따구로 나온다. 2진법으로 변환할 때  생기는  오차 떄문인데..

  function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
  }
  console.log(isEqual(0.152 + 0.312, 0.464));
  // 두 수의 차이가 Number.EPSILON 보다 작으면 같은 수라고 판정! (한마디로 부동소수점 오차를 자바주긴 위한 거라고 생각하자)

  // Number.MAX/MIN VALUE 숫자가 표현할 수 있는 가장 큰 수.
  console.log(Number.MIN_VALUE, Number.MAX_VALUE);

  // Number.MAX/MIN_SAF_INTEGE; 자바스크립트가 안전하게 표현할 수 있는 가장 큰 / 작은 수
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

  // Number.NEGATIVE/POSITIVE_INFINITY 양수/음수의 무한대
  console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

  //Number.NaN 숫자가 아님 을 나타내는 숫자값(?)
}

console.clear();

{
  //Number 메서드

  //Number.isFinite() 정상적인 유한수인지 검사
  console.log(Number.isFinite(0), Number.isFinite("가지")); // NaN 이면 언제나 false겠지.

  console.log(isFinite("10"), Number.isFinite("10")); // 전역 함수와 다르게 Number.isfinite는 암묵적 타입 변환을 하지 않는다.

  //number.isInteger / isNan / isSageInteger도
  console.log(
    Number.isInteger(4),
    Number.isNaN(undefined),
    isNaN(undefined),
    Number.isSafeInteger(10000000000000000000000000000000000000000),
    Number.isSafeInteger("123")
  );

  //Number.prototype.toExponential 숫자를 지수 표기법으로 변환.
  console.log((12.1234).toExponential(4)); // 뒤에는 소숫점.

  //숫자 리터럴 뒤에 . 은 의미가 모호할 수 있다. (소수점 OR 접근자?) 그래서 ()로 묶어주는 게 좋음.

  //Number.prototype.toFixed(표현할 소수점자리) 숫자를 반올림 한 후 문자열로 반환
  console.log((123.456).toFixed(2));
  console.log(typeof (123.456).toFixed(2)); // string
  //Number.prototype.toPrecistion(유효한 자릿수) 전달받은 자릿수까지 유효하도록 나머지 반올림 후 문자열로 반환
  console.log((12345.6789).toPrecision(3)); // 전체 3자리까지만 유효.

  //Number.prototype.toString(진법) 숫자를 문자열로 반환
  console.log((45).toString(), (45).toString(3));
}
