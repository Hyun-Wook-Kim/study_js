{
  // 심벌 값은 유일무이한 프로퍼티 키. 외부로 노출되지 않는 원시값이다.
  const symbol1 = Symbol(); // 심벌 값은 new를 사용하지 않는다. 객체(인스턴스)가 아닌 원시값이기 떄문
  console.log(symbol1);
  const symbol2 = Symbol("이거슨 심볼"); // 심벌의 인수 문자열은 심벌 값에 대한 설명으로, 디버깅 용도로만 사용될 뿐 값에는 영향ㅇ을 주지 않는다.
  console.log(symbol2);
  console.log(symbol2.description);
  console.log(symbol2.toString());
  //   console.log(symbol2 + "");  심벌 값은 문자열이나 숫자 타입으로 변환 X
  console.log(!!symbol1); // 단, 불리언 타입으로는 변환이 된다.

  //symbol.for / symbol.keyfor  전달받은 인수 문자열을 key로 사용해, 키 : 심벌값이 저장되어 있는 심벌 레지스트리에서 일치하는 값 검색
  const s1 = Symbol.for("mySymbol"); // 없으면 새로 만들고 반환한다.
  const s2 = Symbol.for("mySymbo2"); // 있으면 해당 심볼을 반환한다.
  const s3 = Symbol("mySymbol");
  console.log(s1, s2, s1 === s2);
  console.log(s1, s2, s3, s1 === s3); // s3는 Symbol함수로만 생성해, 심벌 레지스트리에 저장되지 않는다.

  console.log(Symbol.keyFor(s1), Symbol.keyFor(s2)); // s1, s2에 저장된 값을 가지고 symbol의 키를 찾아낸다. 실제 값은 모르는 걸까?
}

{
  //심벌을 가지고 상수를 정의할 때

  const Direction = {
    up: 1,
    down: 2,
    left: 3,
    right: 4,
  };
  const myDirection = Direction.up;
  if (myDirection === Direction.up) {
    console.log("You are going Up!");
  }

  // 이처럼 값은 특별한 의미가 없고, ,상수 이름 자체가 의미가 있는 경우 값이 변경되거나 값이 중복될 수 있다.

  const Direnction2 = {
    UP: Symbol("up"),
    Down: Symbol("down"),
    LEFT: Symbol("left"),
    Right: Symbol("right"),
  };

  const myDirection2 = Direction.UP;
  if (myDirection2 === Direction.UP) {
    console.log("upupup!");
  }
}

console.clear();

{
  // symbol 을 키로 쓸 떄는 [] 대괄호 안에 사용해야 한다.
  const obj = {
    [Symbol.for("mySymbol")]: 1,
  };
  console.log(obj);
  console.log(obj[Symbol.for("mySymbol")]); // 프로퍼티에 접근할 때도 마찬가지

  // 심벌 값은 for in ansdlsk Object.keys, Object.getOwnPropertyNames로 차즐 수 없음.
  console.log(Object.keys(obj));
  console.log(Object.getOwnPropertyNames(obj));

  // 다만 이런식으로 찾을 수는 있다.
  console.log(Object.getOwnPropertySymbols(obj));
  console.log(Object.getOwnPropertySymbols(obj)[0]);
  const symbolkey = Object.getOwnPropertySymbols(obj)[0];
  console.log(obj[symbolkey]); // 요런식으로 key와 값을 뽑아낼 순 있다.

  //표준 빌트인 객체를 확장할 떄 충돌을 피하기 위해 사용할 수도 있다.
  Array.prototype[Symbol.for("sum")] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
  };
  console.log([1, 2, 3][Symbol.for("sum")]());
}
