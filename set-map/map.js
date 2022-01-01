{
  //map 모든 값으로 키 사용, 이터러블, size 를 이용하는 객체와 유사.
  const map1 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key2", "value3"], // 중복된 키 값은 덮어싀워진다.
  ]);
  console.log(map1);

  console.log(map1.size); // setter 값 할당이 불가능.

  //요소 추가
  map1.set("key3", "value4").set("key4", "value5");
  console.log(map1);

  // set 처럼 NaN과 +0,-0 을 같다고 평가한다.

  map1.set({}, "object1").set(() => {}, "function1"); // 모든 값을 키로 사용할 수 있다!
  console.log(map1);

  //요소의 취득
  const map2 = new Map();
  const lee = { name: "Lee" };
  const kim = { name: "kim" };
  map2.set(lee, "developer").set(kim, "publisher");
  console.log(map2);
  console.log(map2.get(lee));
  console.log(map2.get("noKey")); // 키 값이 없는 경우

  // 요소 존재 여부
  console.log(map2.has(lee));
  console.log(map2.has("noHas"));

  // 요소 삭제
  console.log(map2.delete(lee)); // 불리언 값 반환
  console.log(map2);
  //일괄삭제
  console.log(map2.clear());
}

{
  // Map 의 순회

  const lee = { name: "Lee" };
  const kim = { name: "Kim" };
  const map = new Map([
    [lee, "developer"],
    [kim, "designer"],
  ]);
  map.forEach((el, key, map) => console.log(el, key, map)); // 순회 중인 요소값, 순회중인 요소키, map객체

  // map 도 이터러블이기 떄문에 for of, 스프레드, 디스트럭처링이 가능함.

  for (const entry of map) {
    console.log(entry);
  }

  console.log([...map]);

  const [a, b] = map;
  console.log(a, b);

  // map 객체는 이러터블인 동시에 이터레이터인 객체를 반환하는 메서드를 제공한다.

  for (const key of map.keys()) {
    console.log(key); // 요소 키를 값으로 갖는 이터레이터
  }

  for (const value of map.values()) {
    console.log(value); // 요소 값을 값으로 갖는 이터레이터
  }

  for (const entry of map.entries()) {
    console.log(entry); // 애는  요소 키와 값을 값으로 갖는 이터레이터
  }
}
