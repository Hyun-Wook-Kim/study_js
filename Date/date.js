{
  // Date함수로 날짜를 생성하는 방법 4가지.

  console.log(new Date(), typeof new Date());
  console.log(Date(), typeof Date());
  console.log(new Date("May 26, 2020 12:00:56")); // 요건 뒤에서 나오는 형식에 맞춰서 해주어야 함.
  console.log(new Date(2021, 11, 19, 12, 37, 46, 4));
  // new Date(년, 월, [일, 시, 분, 초, 밀리초]) 필수 년월을 제외하고는 옵션. 기본값은 0 또는 1
  // 월은 0이 1월부터 시작함.

  console.log(new Date(Date.now())); // date.now()로 현재까지의 밀리초를 계산해 new Date()에 넣어주면 자동 변환.

  console.log(
    Date.parse("Jan 2, 1970 00:00:00 UTC"),
    Date.parse("Jan 2, 1970 09:00:00"),
    Date.parse("1970/01/2/09:00:00")
  );

  // Date.prototype의 메서드

  console.log(new Date().getFullYear());
  let date = new Date();
  console.log(date.setFullYear(1990));
  console.log(date.getFullYear());

  date = new Date();
  console.log(date.getFullYear(), date.getMonth()); // 월은 0부터 시작함
  console.log(date.getDate(), date.getDay()); // 요일은 일요일이 0부터 시작함.
  console.log(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );

  //위 함수는 get대신 set을 써서 특정 숫자를 설정할 수도 있다.

  const date2 = new Date();
  console.log(
    date2.getTime(), // 기준 시를 기점으로 경과된 밀리초
    date2.getTimezoneOffset(), // 표준시와 로컬시의 차이를 분으로 나타냄.
    date2.toDateString(), // 사람이 이해하기 쉬운 표현으로 날짜 반환
    date2.toTimeString(), // 사람이 이해하기 쉬운 시간 반환
    date2.toISOString(), // 2021-12-19
    date2.toLocaleString("en-US"), // 설정한 로컬 날짜로 표현
    date2.toLocaleTimeString("en-US") // 설정한 로컬 시간으로 표현
  );
}

// 간단한 시계 예제를 만들어보자!

console.clear();
{
  (function clock() {
    const today = new Date();

    const dayNames = [
      "(일요일)",
      "(월요일)",
      "(화요일)",
      "(수요일)",
      "(목요일)",
      "(금요일)",
      "(토요일)",
    ];

    const year = today.getFullYear();
    let date = today.getDate();
    const day = dayNames[today.getDay()];
    const month = today.getMonth() + 1;
    let hour = today.getHours();
    let min = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    hour %= 12;
    hour = hour || 12;

    min = min < 10 ? "0" + min : min;
    second = second < 10 ? "0" + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${ampm} ${hour} : ${min} : ${second}`;
    console.log(now);

    setTimeout(() => {
      clock();
    }, 1000);
  })();
}
