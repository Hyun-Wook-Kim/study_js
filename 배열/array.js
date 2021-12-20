//자바스크립트의 배열은 사실 객체 형식이다.
// 배열에 빈부분이 존재하는 희소배열이 가능하다.
// length 값을 명시적으로 실제 길이보다 길게 주거나, 연속적이지 않은 index에 값을 부여하는 등으로 만들 수 있지만,
// 뭐 딱히 좋은 게 없으니 안하는 게 좋음.

// Array 정적 메서드
{
  // Array.of 전달되는 인수를 가지고 array 만듦
  // new Array 랑 다르게 뭐가 와도 무조건 요소로 넣는다.

  const arr1 = new Array(5); // 이렇게 하면 length 5짜리가 생성
  console.log(arr1);
  const arr2 = new Array(5, 4); // 이건 요소로 들어감
  console.log(arr2);

  //array.of()
  const arr3 = Array.of(1); // 요건 요소로!
  console.log(arr3);

  // array.from() 유사배열 or 이터러블을 가지고 배열로 만들어준다.
  const arr4 = Array.from("Hello");
  console.log(arr4);
  const arry5 = Array.from({ length: 2, 0: "a", 1: "b" });
  console.log(arry5);
}

// 배열 메서드 정리!
{
  //Array.isArray() 배열인지 아닌지 판별
  console.log(Array.isArray([]));
  console.log(Array.isArray({})); // 유사 배열 or 이터러블은 안 됨.

  //Array.prototype.indexof() 인수로 전달된 요소의 인덱스 반환

  const arr = [1, 2, 3, 4, 1];
  console.log(arr.indexOf(1)); // 중복 요소 있으면 첫번째것만
  console.log(arr.indexOf(9)); // 없으면 -1
  console.log(arr.indexOf(1, 3)); // 검색을 시작할 위치도 정할 수 있다.

  //ES7 부터는 Array.prototype.includesf로 포함여부 확인도  가능
  console.log(arr.includes(4));

  // Array.prototype.push(); 인수로 전달받은 값을 마지막 요소로 추가하고, length 반환
  console.log(arr.push(6, 7, 8)); // length값 8이 반환된다.;
  console.log(arr);
  // Push는 배열을 직접 변환하는 데다가, 성능도 딸린다. 추가할 요소가 1개라면 차라리
  arr[arr.length] = 9;
  console.log(arr); // 이렇게 하는게 더 빠르다.

  // 원본 배열을 바꾸지 않는 방법으로는 스프레드 문법이 있다.
  const newArr = [...arr, 10];
  console.log(newArr);
  console.clear();
}
{
  // Array.prototype.pop 배열의 마지막 요소를 ㅔ거하고, 제거한 요소를 반환한다 (원본 변경). 빈 배열이면 undefined임
  const arr = [1, 2, 3];
  const result = arr.pop();
  console.log(result);

  //Array.prototype.unshift 전달받은 인수를 배열의 선두 (앞)에 추가하고 length값을 return 한다.
  const result2 = arr.unshift(0);
  console.log(result2, arr);
  // 얘도 배열을 직접 바꾸기 때문에 스프레드 쓰는 게 나음
  const newArr = [3, ...arr];
  console.log(newArr);
}
{
  const arr = ["kim", "a", "b", "c"];

  //Array.prototype.shift pop이랑 반대로 첫번째 요소 제거하고 제거한 요소 반환. 빈 배열이면 undefined
  console.log(arr.shift()); // 얘도 원본 배열 변경.

  //Array.concat()  인수로 전달된 값을 마지막 요소로 추가후 새로운 배열을 반환.
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const arr3 = arr1.concat(arr2).concat(5);
  console.log(arr3, arr1); // 얘는 원본을 건드리지 않는다.

  //concat과 push(), unsfhit()의 차이
  // concat는 원본 배열을 건드리지 않는다. and push와 unshift는 배열을 전달받으면 냅다 배열을 꽃아버린다.
  const arr4 = ["1", "2", "3"];
  const arr5 = ["4", "5", "6"];
  arr4.push(arr5);
  console.log(arr4); // 맨 마지막에 [4,5,6]을 그대로 넣는다

  const arr6 = ["1", "2", "3"];
  const result = arr6.concat(arr5);
  console.log(result); // 얘는 배열을 해체해서 하나씩 요소로 넣는다.

  //근데 위에거 전부 다 spread 쓰면 됨. 그니까 나중에 스프레드나 잘 배워두셈.
}

{
  // Array.prototype.splice(시작값,끝값,새로넣을값) 시작~끝까지 제거, 제거한 위치에 새 아이템 삽입
  const arr = [1, 2, 3, 4];

  arr.splice(1, 2, 20, 30); // 1~2번 인덱스 지우고, 20,30넣음
  console.log(arr);
  arr.splice(3, 0, 40); // 요렇게 넣기만 할 수도 있음
  console.log(arr);
  arr.splice(4, 1); // 지우기만 할 수도 있고
  console.log(arr);
  arr.splice(1); // 시작점 부터 싹 날릴수도 있음.
  console.log(arr);
}
console.clear();

{
  // Array.prototype.slice(시작점, 끝점) 시작~끝 인덱스 바로 전까지를 복사해 새로운 배열로 반환한다.
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.slice(1, 4);
  console.log(newArr);
  const newArr2 = arr.slice(-2); // 음수면 뒤에서부터 복사한다.
  console.log(newArr2);
}
{
  // Array.prototype.join 원본 배열의 모든 요소를 문자열로 반환 후, 인수로 전달받은 구분자로 연결. 기본은 콤마
  const arr = [1, 2, 3, 4, 5];

  console.log(arr.join());
  console.log(arr.join(" "));
  console.log(arr.join("-"));

  //Array.prototype.reverse 원본 배열의 순서를 뒤집는다. 근데 븅신처럼 원본도 뒤집고 새 배열도 반환함
  const newArr = arr.reverse();
  console.log(arr, newArr);
}
console.clear();
{
  //Array.prototype.fill(채울요소, 시작할 index) 전달받은 요소를 배열의 처음부터 끝까지 채워 배열 변경하고 반환도 함. 븅신인듯.
  const arr = [1, 2, 3, 4, 5];
  arr.fill(0);
  console.log(arr);
  arr.fill(1, 1);
  console.log(arr);
  arr.fill(2, 2, 3);
  console.log(arr); // 세번째 요소는 멈출 인덱스다

  //Array.prototype.includes 특정 요소가 포함되어있는지 확인하여 true, false 반환
  const arr2 = [1, 2, 3, 4, 5];
  console.log(arr2.includes(2));

  // 두번째 인수로 시작할 인덱스 생략시 0, 음수일시 (length + index) 검색 시작 인덱스 설정
  console.log(arr2.includes(2, 2));
  console.log(arr2.includes(3, -3));

  //flat; 이라는 게 잇는데.. 전달된 인수만큼 평탄화 공구리를 친다고 한다.
  //  es 10부터 생겼다니 있다는 것만 기억해두자.
}
console.clear();

{
  // Array.prototype.sort() 배열의 순서를 정렬한다. 기본 오름차순. 데이터 변경 + 새 배열 반환
  const arr = [3, 1, 5, 2, 4];
  arr.sort();
  console.log(arr);
  arr.sort().reverse(); //내림차순 하고 싶으면 이런시그로
  console.log(arr);

  // 문자열도 됨.
  const korArr = ["조승재", "남지연", "박하늘", "김현욱"];
  korArr.sort();
  console.log(korArr);

  // 근데 이런 문제가 생긴다. 숫자도 문자로 변경해 유니코드 순서대로 정렬하기 떄문
  const arrNum = [40, 100, 25, 10, 4, 5];
  arrNum.sort();
  console.log(arrNum);

  //그래서 이런식으로 정렬 순서를 비교하는 함수를 인수로 전달해주어야 한다.
  const arrOrder = [40, 100, 1, 5, 2, 25, 10];
  arrOrder.sort((a, b) => a - b); // 값이 음수면 a가 앞으로, 양수면 b가 앞으로.
  console.log(arrOrder);

  // 객체를 요소로 가질 때는 이런식으로 정렬한다
  const todos = [
    { id: 4, content: "JS" },
    { id: 2, content: "HTML" },
    { id: 1, content: "CSS" },
    { id: 3, content: "Vue" },
  ];
  todos.sort((a, b) => {
    return a.id > b.id ? 1 : a.id == b.id ? 0 : -1;
  });
  console.log(todos);
}

{
  //Array.prototype.forEach 반복문을 추상화  한고차함수다.

  const numbers1 = [1, 2, 3];
  const pos1 = [];

  // for 문으로 배열 순회하려면
  for (let i = 0; i < numbers1.length; i++) {
    pos1.push(numbers1[i] ** 2);
  }
  console.log(pos1);

  // 요걸 forEach 로 쓰면!
  const numbers2 = [1, 2, 3];
  const pos2 = [];
  numbers2.forEach((item) => {
    pos2.push(item ** 2);
  });
  console.log(pos2);

  // forEach 는 3개의 인수를 전달할 수 있다.
  [1, 2, 3, 4, 5].forEach((item, index, arr) => {
    console.log(
      `item = ${item}, index = ${index}, arr = ${JSON.stringify(arr)}`
    );
  });

  //forEach 자체는 원본을 바꾸지 않지만, 콜백 함수로 바꿀수는 있음
  const arr1 = [1, 2, 3, 4];
  const result = arr1.forEach((el, index, arr) => {
    arr[index] = el ** 3;
  });
  console.log(arr1);
  console.log(result); // 반면 반환값은 undefined 이다.

  // forEach 는 break, continue 등 중간에 흐름을 바꿀 서 없다.
  // 희소배열의 경우 없는 요소는 제외된다.

  // 총평 ** for에 비해 성능이 좋지는 않지만, 가독성이 좋음. 겁나 많은 거 순회하는 거 아니면 forEach 쓰셈.
}

{
  // Array.prototype.map 모든 요소를 순회하며 콜백함수를 호출해 반환값으로 이루어진 '새로운' 배열을 반환한다. 기존 배열은 변경하지 않는다.
  const arr1 = [1, 2, 3, 4, 5, 6];
  const newArr = arr1.map((el) => Math.sqrt(el));
  console.log(newArr, arr1);

  // 얘도 인수 3개 받을 수 있음.
  [1, 2, 3, 4, 5].map((el, index, arr) => {
    console.log(this); // 여기서 this는 이 함수의 상위 스코프, 즉 전역을 가르키기 떄문에 window가 뜬다.;
  });

  class Prefixer {
    constructor(prefix) {
      this.prefix = prefix;
    }

    add(arr) {
      return arr.map((item) => this.prefix + item);
    }
  }
  const prefixer = new Prefixer("-webkit-");
  console.log(prefixer.add([1, 2, 3]));
}
console.clear();
{
  // Array.prototype.filter 배열의 요소를 순회하며 콜백 함수의 반환값이 true인 애만 반환해 새로운 배열 생성. 원본 배열 변경 X
  const numbers = [1, 2, 3, 4, 5];
  const odds = numbers.filter((item) => {
    return item % 2;
  });
  console.log(odds);

  // 얘도 인수 3개 받을 수 있음. 또 말하면 입 아픔.
  // 특정 요소만 제거하는 데 사용할 수도 있다.

  class Users {
    constructor() {
      this.users = [
        { id: 1, name: "Kim" },
        { id: 2, name: "Park" },
      ];
    }
    findById(id) {
      return this.users.filter((user) => user.id === id);
    }
    remove(id) {
      this.users = this.users.filter((user) => user.id !== id);
    }
  }
  const users = new Users();
  let user = users.findById(2);
  console.log(user);
  console.log(users);
  users.remove(1);
  console.log(users);

  // 다만 중복되는 요소가 있을 경우 싹 다 사라진다.
  // 특정 요소 하나만 제거하고 싶으면 indexOf를 통해 인덱스를 취득하고, splice(index,1)로 삭제한다.
}
console.clear();

{
  //reduce 함수
  // 객 배열을 순회하며 반환값을 다음 콜백 함수 호출 시 첫 번쨰 인수로 전달해 하나의 결과값을 반환한다.

  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce(
    (accumulator, currentValue, index, array) => {
      return accumulator + currentValue;
    },
    0 // 초기값 //
  );
  console.log(sum);

  // 사용 방식은 요렇게 쓴다.

  //1. 평균 구하기
  const value1 = [1, 2, 3, 4, 5, 6];
  const average = value1.reduce(
    (acc, cur, index) =>
      index == value1.length - 1 ? (acc + cur) / value1.length : acc + cur,
    0
  );
  console.log(average);

  //2. 중복 요소 갯수 구하기
  const value2 = ["apple", "banana", "orange", "pineapple", "apple", "banana"];
  const count = value2.reduce((acc, cur, index, arr) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  console.log(count);

  //3. 중복 요소 제거
  const value3 = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9];
  const trim = value3.reduce((acc, cur, index, arr) => {
    if (arr.indexOf(cur) === index) {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log(trim);

  //근데 이렇게 하는 게 더 직관적임
  const trim2 = value3.filter((el, index, arr) => {
    return arr.indexOf(el) === index;
  });
  console.log(trim2);

  // 사실 요거를 더 추천함
  const trim3 = [...new Set(value3)];
  console.log(trim3);

  // 초기값을 전달하는 것은 선택이지만, 앵간하면 전달하는 것을 추천한다. 그 이유는

  // const sum2 = [].reduce((acc, cur) => acc + cur);  초기값이  없다고 뜨는 경우가 있고
  // console.log(sum2);

  const products = [
    { id: 1, price: 300 },
    { id: 2, price: 200 },
    { id: 3, price: 300 },
  ];
  const result2 = products.reduce((acc, cur) => {
    return acc.price + cur.price;
  });
  console.log(result2); // NaN가 뜬다. acc가 처음에는 {id:1, price:300}이지만, 2번쨰 순회때는 300 이기 ㄸ대문. 여기서는 300.price가 존재하지 않는다

  // 대신 이렇게 쓰면 된다

  const result3 = products.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  console.log(result3);
}

console.clear();
{
  // Array.prototype.some() 요소 중 콜백함수 내에 조건을 1개라도  만족하면 true, || false 반환
  console.log(
    [10, 22, 36, 41].some((el, index, arr) => {
      return el >= 40;
    })
  );
  // 단, some 메서드를 호출하는 배열이 빈 배열일 경우 언제나 false를 반환한다.

  // Array.prototype.every() 요소가 모두 콜백함수 내 조건을 만족하는지!
  console.log([10, 20, 30, 40].every((el) => el >= 10));
  console.log([10, 20, 30, 40].every((el) => el >= 30));

  // Array.prototype.find() 요소를 순회하며 조건에 맞는 첫번째 요소를 반환한다.
  const users = [
    { id: 1, name: "kim" },
    { id: 2, name: "Lim" },
    { id: 3, name: "Qim" },
    { id: 4, name: "Rim" },
    { id: 5, name: "kim" },
  ];
  console.log(users.find((el) => el.name === "kim"));

  //Array.prototype.findIndex() 인수로 전달된 콜백 함수의 반환 값이 true인 첫번째 요소의 index를 반환한다.

  console.log(users.findIndex((item, index) => item.name === "Qim"));
}
