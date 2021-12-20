// 표준 빌트인 Math는 수학적 프로퍼티와 메서드 제공. 얘는 생성자 함수가 아님. Prototype이 없다!

{
  console.log(Math.PI); // PI 불러내는 거임

  console.log(Math.abs(123), Math.abs(-1), Math.abs([]), Math.abs("string")); // 절대값. 객체, null, string등은 NaN

  //올림, 반올림, 내림
  console.log(Math.ceil(4.2));
  console.log(Math.round(4.6));
  console.log(Math.floor(4.9));

  console.log(Math.sqrt(9)); // 제곱근을 반환한다.

  // Math.random()  임의의 난수 반환. 0포함 1 미만
  console.log(Math.floor(Math.random() * 10 + 1));
  // 원하는 범위 내의 숫자 구하기 (ex : 4~25)
  // (Math.random()* (최대값 - 최소값)) + 최소값
  console.log(Math.random() * (25 - 4) + 4);

  //Math.pow(밑, 거듭제곱지수)
  console.log(Math.pow(2, 3));
  console.log(2 ** 3); // 그냥 이거 쓰셈...

  //Math.max/min() 인수 중 가장 큰/작은 수 반환. 인수 없으면 +- infinity  반환
  console.log(Math.max(1, 4, 7, 34, 7056, 12314));
  console.log(Math.min(1, 4, 7, 34, 7056, 12314));
  console.log(Math.max());
  console.log(Math.min());

  //배열의 경우에는 조금 다르다.
  console.log(Math.max([1, 2, 3, 4, 5])); // NaN로 뜸
  console.log(Math.max(...[1, 2, 3, 4, 5])); // 스프레드를 쓰거나
  console.log(Math.max.apply(null, [1, 2, 3, 4, 5])); // apply/call을 써야 한다.

  //function.prototype.apply(this로사용할 객체, [인수 리스트])
  //function.prototype.call(this로 사용할 객체, 인수1, 인수2, 인수3...)
}
