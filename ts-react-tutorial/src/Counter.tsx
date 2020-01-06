import React, { useState } from "react";

// 자바스크립트로 작성할 때와 큰 차이가 없다.
// Generics 를 사용하여 해당 상태가 어떤 타입을 가지고 있는지
// 설정만 하면 됨

function Counter() {
  const [count, setCount] = useState<number>(0);

  // useState를 사용 할 때
  // Generics를 사용하지 않아도 알아서 타입을 유추하기 때문에
  // 생략해도 상관 없음
  // 다만 상태가 null일 수도 아닐 수도 있을때는 Generics를
  // 활용하면 좋음 ex)
  // type Information = { name: string; description: string };
  // const [info, setInformation] = useState<Information | null>(null);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
