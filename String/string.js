{
  // String 도 new 와 함께 쓰면 래퍼 객체 생성!
  // 인수를 전달하지 않으면 빈 문자열을 할당한다.
  const strObj = new String("Lee");
  console.log(strObj); // 얘도 유사 배열이라 인덱스키로 접근 가능. 단 변경은 불가능

  console.log(strObj[0]);
  strObj[0] = "k";
  console.log(strObj);

  // 문자열이 아닌 값은 강제로 문자열로 치환한다.
  const nstrObj = new String(null);
  console.log(nstrObj);

  // new 없이 쓰면 인스턴스가 아닌 문자열만 반환
  console.log(String(1));
  console.log(String(NaN));
  console.log(String(true));

  console.log(nstrObj.length);
}

{
  // String 객체에는 원본을 바꾸는 메서드가 없다. 즉 언제나 새로운 ㅁ문자열을 반환하고, 변경 불가능한 읽기 전용 원시값이다.

  const strObj = new String("Lee");
  console.log(Object.getOwnPropertyDescriptors(strObj)); // writable false!
}

console.clear();

{
  // String 메서드

  const str = "Hello World!";

  // String.prototype.indexOf()
  console.log(str.indexOf("W"));
  console.log(str.indexOf("Z")); // 업스면 -1
  console.log(str.indexOf("l", 5)); // 두번째 인수로 검색을 시작할 위치 전달.

  //근데 이렇게 쓸 수 있음
  console.log(str.includes("Hello"));

  //search()
  console.log(str.search(/lo/g)); // 정규 표현식과 매치하는 문자열 검색 후 인덱스 반화

  //includes()
  console.log(str.includes("Hello")); //인수 문자열이 포함되어있는지 불리언 값 리턴
  console.log(str.includes("x")); // 없으면 false
  console.log(str.includes());
  console.log(str.includes("H", 4)); // 검색 시작할 인덱스 전달

  //startWith()
  console.log(str.startsWith("Hel")); // 문자열이 인수로 시작하는 지
  console.log(str.startsWith("Hel", 3)); // 시작 위치 지정  가능

  //endWith()
  console.log(str.endsWith("ld!"));
  console.log(str.endsWith("lo", 5)); //문자열의 길이 전달 가능. 즉 처음부터 5자리까지가 lo로 끝나는지

  //charAt()
  console.log(str.charAt(3)); // 전달받은 인덱스에 해당하는 문자.
  console.log(str.charAt(7));
  console.log(str.charAt(300)); // 없으면 빈 문자열

  //   const str = "Hello World!";

  // substring()
  console.log(str.substring(1, 4)); // 1부터 4까지의 문자열 반환 마지막 인덱스는 포함이 되지 않는다.
  console.log(str.substring(3)); // 2번째 인수 생략시 끝까지 반환.

  console.log(str.substring(4, 1)); // 인수가 반대여도 작동은 된다.
  console.log(str.substring(-2)); // 인수가 음수 or NaN인 경우 0으로 취급. 즉 전체 문자열
  console.log(str.substring(1, 300000)); // 최대 길이를 넘으면 그냥 끝까지 뽑아온다.

  console.log(str.substring(0, str.indexOf(" "))); // 요런 식으로 특정 글자 이전까지를 뽑아올 수 있다.

  // slice()
  console.log(str.slice(1, 4)); // substring과 동일하게 작동하지만
  console.log(str.slice(-4)); // 얘는 음수 인수를 주면 뒤에서부터 뽑아온다!

  // toUpperCase() toLowerCase()
  console.log(str.toUpperCase(str)); // 전부 대문자로
  console.log(str.toLowerCase(str)); // 전부 소문자로

  //trim()
  const dirtyStr = "  slfkjsdf wlkjetq      qlekjr         ";
  console.log(dirtyStr.trim()); // 앞뒤의 공백을 제거한다. 중간은 제거되지 않는 듯 하다.
  console.log(dirtyStr.trimStart()); // 앞 공백만 ㅔ거
  console.log(dirtyStr.trimEnd()); // 뒤 공백만 제거

  //repeat()
  const str2 = "abc";
  console.log(str.repeat());
  console.log(str.repeat(2));
  console.log(str.repeat(4.8)); // 소숫점은 내림만큼
  //   console.log(str.repeat(-1));  음수는 에러 뜸 ㅠ
}

console.clear();

{
  // replace
  const str = "Hello World!";
  console.log(str.replace("World!", "Kim!")); // 첫번 째 인수를 검석해 두 번째 인수 문자열로 치환 후 반환 (첫번쨰 검색된 것만 치환함)
  console.log(str.replace("World", "<string>$&</string>")); // 이런 교체패턴? 이라는 게 있다고 한다. 일단 알아만 두자.
  console.log(str.replace(/hello/gi, "Lee")); // 정규 표현식을 이용할 수도 있다.

  // 이런식으로 사용할 수 있다.

  function camelToSnake(camelcase) {
    return camelcase.replace(/.[A-Z]/g, (ee) => {
      // 이게 왜...되는거지? 콜백 함수의 인수는 언제나 결과값을 받아오나?
      console.log(ee);
      return ee[0] + "_" + ee[1].toLowerCase();
    });
  }
  console.log(camelToSnake("thisStr"));

  function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_[a-z]/g, (match) => {
      console.log(match);
      return match[1].toUpperCase();
    });
  }
  console.log(snakeToCamel("this_sentence"));
}

console.clear();

{
  //split()
  const str = "How are you doing?";
  console.log(str.split(" ")); // 전달받은 인수를 기준으로 텍스트를 나누어 배열을 반환한다.
  console.log(str.split(/\s/)); // 정규표현식도 가능함
  console.log(str.split()); // 생략하면 통짜로 하나의 배열 요소로
  console.log(str.split("")); // 빈 문자열을 주면 하나하나 다 잘라서

  console.log(str.split(" ", 3)); // 배열의 길이를 제한해 줄 수도 있다.

  function reverse(str) {
    return str.split("").reverse().join(" ");
  }
  console.log(reverse("hi my name is Kim"));
}
