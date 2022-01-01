{
  // 특정 요소를 취득할 수 있는지 확인
  //   const $apple = document.querySelector(".apple");
  //   console.log($apple.matches("#fruits > li.apple"));
  //   console.log($apple.matches("#fruits > li.banana"));
}

console.clear();

{
  //   const $elems = document.getElementsByClassName("red");
  //   console.log($elems);
  //   for (let i = 0; i < $elems.length; i++) {
  //     $elems[i].className = "blue";
  //   }
  //   console.log($elems);
  // live 객체! 근데 왜 두번째 애는  안바뀜?
  // 실시간으로 객체가 바뀌면서 2번째 반복때는 3번째 요소가 2번째 요소가 되기 때문...
  //   for (let i = $elems.length - 1; i >= 0; i--) {
  //     $elems[i].className = "blue";
  //   }
  // 또는 뭐 while문을 이용해 돌릴 수도 있음.
  //아니면 걍 유사배열을 배열로 바꾸셈.
  //   [...$elems].forEach((el) => (el.className = "blue"));
  //childNodes같은 몇 객체는 예상과 다르게 동작함.
  //  querySelector 로 non-live 객체를 가져오든지,
  // 아니면 유사 배열로 바꿔서 사용하면 고차함수도 사용 가능하니 ㅗ하.
}

console.clear();

{
  const $fruits = document.getElementById("fruits");
  console.log($fruits.childNodes);
  console.log($fruits.children);
  console.log($fruits.firstChild);
  console.log($fruits.firstElementChild);

  console.log(!!$fruits.children.length); // 텍스트 노드가 아닌 자식 노드가 있는지
  console.log(!!$fruits.childElementCount);

  const $banana = document.querySelector(".banana");
  console.log($banana.parentNode);
  console.log($banana.parentElement);

  console.log($banana.previousSibling); // 텍스트 노드도 반환함.
  console.log($banana.previousElementSibling); // 요소 노드만 반환함
  console.log($banana.nextSibling); // 텍스트 노드도 반환함.
  console.log($banana.nextElementSibling); // 요소 노드만 반환함

  console.log(document.nodeType); // 노드 타입을 나타내는 상수
  console.log(document.nodeName);
}

console.clear();
