{
  const set1 = new Set([1, 2, 3, 4]); // 이터러블을 인수로 받는다.
  const set2 = new Set("hello"); // 중복 값은 저장되지 안흠.
  console.log(set1, set2);

  const uniq = (array) => {
    return [...new Set(array)];
  };
  console.log(uniq([1, 2, 3, 3, 3, 4, 5, 5, 6])); // 요렇게 중복 값 제거 가능

  // set 요소 갯수 확인
  const array = new Set([1, 2, 3, 4, 5]);
  console.log(array.size);
  const { size } = new Set([1, 2, 3, 4, 5, 6]);
  console.log(size);
  // size 프로퍼티는 getter만 가능하고 setter가 불가능함.

  // set 요소 추가
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(2).add(3); // 중복값은 무시.
  console.log(set);

  // 0과 -0, NaN는 서로 같다고 판단되어 중복추가를 허용하지 않는다.

  //set은 객체와 배열처럼 모든 값을 요소로 저장할 수 있다.
  const set3 = new Set();

  set3
    .add({})
    .add([])
    .add(true)
    .add(() => {});
  console.log(set3);
}

console.clear();

{
  const set = new Set([1, 2, 3]);
  //요소 존재 여부 확인
  console.log(set.has(1));
  console.log(set.has(4));

  //요소 삭제
  console.log(set.delete(3)); // 삭제 성공 여부 반환
  console.log(set); // 여기서의 3은 인덱스가 아닌 요소의 값이다.
  console.log(set.delete("a")); // false반환후 에러 없이 무시.
  //   set.delete(1).delete(2); 불리언을 반환함으로 연속 호출 불가능.

  //일괄 삭제
  console.log(set.clear()); // 언제나 undefined를 반환
  console.log(set);

  //요소 순회

  const set2 = new Set(["a", ["b"], () => {}]);
  set2.forEach((cur, cur2, self) => console.log(cur, cur2, self));
  // 1,2번째 인수는 현재 순환 값, 세 번째 인수는 set 객체

  const set3 = new Set([1, 2, 3, 4]); // 이터러블은 for of 순회 가능.
  for (const item of set3) {
    console.log(item);
  }
  console.log([...set3]);
  const [x, ...rest] = set3;
  console.log(x, rest);
}

console.clear();

{
  //set은 수학적 '집합'을 구현한다. 즉 교집합, 차집합 등을 구할 수 있다.

  //교집합
  Set.prototype.intersection = function (set) {
    const result = new Set();

    for (const value of set) {
      if (this.has(value)) {
        result.add(value);
      }
    }
    return result;
  };
  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([3, 4, 5, 6]);
  console.log(setA.intersection(setB));
  //or
  Set.prototype.intersection2 = function (set) {
    return new Set([...this].filter((v) => set.has(v)));
  };
  console.log(setA.intersection2(setB));

  // 합집합
  Set.prototype.union = function (set) {
    const result = new Set(this);
    for (const value of set) {
      result.add(value);
    }
    return result;
  };
  console.log(setA.union(setB));
  //or
  Set.prototype.union2 = function (set) {
    return new Set([...this, ...set]);
  };
  console.log(setB.union2(setA));

  // 차집합
  Set.prototype.difference = function (set) {
    const result = new Set(this);
    for (const value of set) {
      result.delete(value);
    }
    return result;
  };
  console.log(setA.difference(setB));
  //or
  Set.prototype.difference2 = function (set) {
    return new Set([...this].filter((v) => !set.has(v)));
  };
  console.log(setB.difference2(setA));

  //부분 집합과 상위 집합
  Set.prototype.isSuperset = function (set) {
    for (const value of set) {
      if (!this.has(value)) return false;
    }
    return true;
  };
  const setC = new Set([1, 2, 3, 4]);
  const setD = new Set([2, 4]);
  console.log(setC.isSuperset(setD));
  console.log(setD.isSuperset(setC));
  //or
  Set.prototype.isSuperset2 = function (subset) {
    const supersetArr = [...this];
    return [...subset].every((v) => supersetArr.includes(v));
  };
  console.log(setD.isSuperset2(setC));
  console.log(setC.isSuperset2(setD));
}
