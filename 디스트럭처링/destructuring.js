{
  // 디스트럭처링 우변은 이터러블이며, 기준은 배열의 인덱스, 즉 순서대로 할당 된다.
  const arr = [1, 2, 3];
  const [one, two, three] = arr;
  console.log(one, two, three);

  //   const [x, y] = { a: 1, b: 2 }; 이터러블이 아닌 애를 할당하면 에러가 발생한다.

  // 할당은 순서대로 이루어지고, 꼭 갯수가 일치할 필요는 없다.
  const [a, b, c] = [1];
  console.log(a, b, c);
  const [e, f] = [2, 3, 4];
  console.log(e, f);
  // 이런 경우를 위해 기본값을 설정할 수 있다.
  const [x, y, z = 10] = [1, 2];
  console.log(x, y, z); // z 의 기본값은 10.

  // url 을 파싱하여 protocol, host, path 르 나누는 객체
  function parseURL(url = "") {
    const parsedUrl = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    const [, protocol, host, path] = parsedUrl;
    return { protocol, host, path };
  }
  const paredURL = parseURL(
    "https://developer.mozilla.org/ko/docs/Web/Javascript"
  );
  console.log(paredURL);

  // REST 요소도 쓸 수 있음.
  const [n, m, ...l] = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(n, m, l);
}

console.clear();

{
  // 객체 디스트럭처링 할당
  // 객체 할당의 기준은 프로퍼티 키 이다. 즉 순서가 의미가 없다.
  const user = { firstName: "Ungmo", lastName: "Lee" };
  const { lastName, firstName } = user;
  console.log(firstName, lastName); // 순서에 관계 없이 키가 일치하면 할당이 된다.

  // 그럼 키 값이랑 변수를 다르게 해주고 싶으면?
  const user2 = { firstName: "Kim", lastName: "HyunWook" };
  const { firstName: 성, lastName: 이름 } = user2; // 요렇게 변수를 선언해주면 된다!
  console.log(성, 이름);

  const user3 = { a: 1, b: 2, c: 3 };
  const { a: x, b: y, c: z, d: o = 0 } = user3;
  console.log(x, y, z, o);

  const str = "Hello";
  const { length } = str;
  console.log(length);

  const todo = { id: 1, content: "HTML", completed: true };

  function printTodo(todo) {
    console.log(
      `할일 ${todo.content}는 ${todo.completed ? "완료" : "미완료"} 상태입니다.`
    );
  }
  printTodo(todo);

  // 매개변수에도 디스트럭처링으로 해줄 수 있다.
  function printTodo2({ content, completed }) {
    console.log(
      `할일 ${content}는 ${completed ? "완료" : "미완료"} 상태입니다.`
    );
  }
  printTodo2(todo);

  // 배열 요소가 객체인 경우에는 배열 디스트럭처링과 객체 디스트럭처링을 혼용할 수 있다.
  const todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "JS", completed: false },
  ];
  const [, { id: number }, c] = todos;
  console.log(number, c);

  // 중첩 객체의 경우는 다음과 같이 쓴다.

  const user4 = {
    name: "Lee",
    address: {
      zipCode: "03068",
      city: "Seoul",
    },
  };
  const {
    address: { city },
  } = user4;
  console.log(city);
  // user4에서 address를 추출하고, address에서 {city} 프로퍼티 키로 값을 추출한다...

  //  객체 디스트럭처링에도 rest 가능
  const { x: j, ...nam } = { x: 1, y: 2, z: 3 };
  console.log(j, nam);
}
