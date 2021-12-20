{
  //정규 표현식이 형태는
  //       /패턴/플래그 형식이다.

  const target = "Is this all there is?";
  const regexp = /is/i;
  console.log(regexp.test(target));

  // or

  const regexp2 = new RegExp(/is/i);
  console.log(regexp2.test(target));
}

{
  //RegExp의 메서드

  const target = "Is this all there is?";
  const regexp = /is/g;
  console.log(regexp.exec(target)); // 패턴 매칭 결과를 배열로 반환한다. 없으면 Null
  // 플래그에 모든 패턴을 검색하는 g 플래그를 넣어도 첫 번째 결과만 반환함.

  console.log(regexp.test(target)); // 패턴 매칭 결과를 불리언 값으로 반환.

  // String.prototype.match도 있음  얘는 g 플래그 넣으면 싸그리 다 찾아옴.
  console.log(target.match(regexp));
}

{
  //플래그  정규 표현식의 검색 방식을 설저하기 위해 사용함
  // 기본값은 대소문자 구분, 첫 번째 대상만 검색하고 종료

  const target = "Is this all there is?";

  console.log(target.match(/is/)); // 대소문자 구분, 한 번만
  console.log(target.match(/is/i)); // 대소문자 구분 X 한번만
  console.log(target.match(/is/g)); // 대소문자 구분 전역검색
  console.log(target.match(/is/gi)); // 대소문자 구분 X, 전역검색
}

{
  //패턴 문자열의 일정한 규칙. 따옴표는 기본적으로 생략, 포함시 따옴표도 패턴에 포함됨
  const target = "Is this all there is?";

  const regExp1 = /..../g; // . 은 문자열 1개를 의미함. 즉 4자리로 이루어진 문자열 매치
  console.log(target.match(regExp1));

  // 반복검색 {m,n} 앞선 패턴이 최소 m먼, 최대 n번 반복되는 문자열. 공백이 없어야한다.
  const target2 = "A AA B BB Aa Bb AAA";
  const regExp2 = /A{1,2}/g; // A가 최소 한 번 최대 2번 반복되는 문자열.

  console.log(target2.match(regExp2));
  console.log(target2.match(/A{1}/g)); // 이건 {1,1}과 같다.
  console.log(target2.match(/A{2,}/g)); // 이건 최소 2번 이상 반복되는 거.
  console.log(target2.match(/A+/g)); // 이건 {1,}과 같다. 최소 한 번 이상 반복되는 거

  const target3 = "color colour";
  console.log(target3.match(/colou?r/g)); //colo 다음 r이 최대 한 번 or 0번, 그 이후 r 문자열. ?은 앞선 패턴이 {0,1}번 반복되는지

  const regExp3 = /A|B/g; // |는 A 또는 B , 즉 or의 의미를 가진다.
  console.log(target2.match(regExp3));
  console.log(target2.match(/A+|B+/g)); // 분해되지 않은 단어 레벨로 검색하기 위해서는 +를 쓴다. AA 가 A,A로 분리되지 않음.

  console.log(target2.match(/[AB]+/g)); // []안의 문자는 or로 작동한다.즉 위와 동일하다.

  console.clear();

  //범위 지정
  const target4 = "A AA BB ZZ Aa Bb";
  console.log(target4.match(/[A-Z]+/g)); // 범위를 지정. A~Z 까지가 한 번 이상 반복되는 문자열을 전역 검색
  console.log(target4.match(/[A-Za-z]+/g)); // A-Z or a-z가 한 번 이상 밙복 전역 검색

  const target5 = "AA BB 12,345";
  console.log(target5.match(/[0-9,]+/g)); // 0~9 or 쉼표가 하나 이상 포함된 문자열 전역 검색

  // \d and \D
  const target6 = "AA BB 12,345";
  console.log(target6.match(/[\d,]+/g)); // \d는 숫자를 의미한다. 반면 \D는 숫자가 아닌 문자열을 의미한다.
  console.log(target6.match(/[\D]+/g));

  // \w and \W
  const target7 = "Aa Bb 12,345 _$&&";
  console.log(target7.match(/[\w]+/g)); // \w는 숫자, 알파벳, 언더스코어까지 포함
  console.log(target7.match(/[\W]+/g)); // \W는 숫자, 알파벳, 언더스코어를 제외한 문자

  // [^...] NOT
  const target8 = "A AA B 12 Aa Bb AAA";
  console.log(target8.match(/[^0-9]/g)); // 0-9까지가 아닌 애들. 즉 \D와 같은 동작이다.
  // \W, \D도  ^\w ^\d와 같다
  console.log(target8.match(/[^\d]/g));

  // ^ [...] 시작 위치로 검색
  const target9 = "https://poiemaweb.com";
  const regExp4 = /^https/; // https로 시작하는지 검색한다.
  console.log(regExp4.test(target9));

  // $ 마지막 위치로 검색
  const regeExp5 = /com$/; // com 으로 끝나느지 검색한다.
  console.log(regeExp5.test(target9));
}

console.clear();

{
  // 많이 사용하는 정규표현식을 연습해보자!

  // 특정 단어로 시작하는지 검사
  const url = "https://example.com";
  console.log(/^https?:\/\//.test(url)); //  \ 는 escape 때문에 쓴 듯.

  // 특전 단어로 끝나는지 검사
  const fileName = "index.html";
  console.log(/html$/.test(fileName));

  // 숫자로만 이루어진 문자열이니 검사
  const number = "12345";
  console.log(/^\d+$/.test(number));

  // 하나 이상의 공백으로 시작하는지 검사
  const target = " Hi!";
  console.log(/^[\s]+/.test(target));

  // 아이디 조건에 맞는지 검사. 알파벳대소문자 or 숫자로 시작하고 끝나며~ 4~10 자리인지
  const id = "3Abc123";
  console.log(/^[A-Za-z0-9]{4,10}$/.test(id));

  // 메일 주소 형식에 맞는지 검사
  //   const email = 'lentasha9508@gmail.com'
  //     console.log(
  //         /^[A-Za-z0-9]/
  //     )

  // 핸드폰 번호 형식
  const cellPhone = "010-659-2551";
  console.log(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(cellPhone));

  // 특수 문자 퐆함 여부 검사
  const target2 = "abc*123";
  console.log(/[^A-Za-z0-9]/gi.test(target2));
}
