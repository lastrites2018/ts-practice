import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // void는 아무 것도 리턴하지 않는 함수
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  // const Greetings = ({ name, mark }: GreetingsProps) => {
  // const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;

// React.FC로 얻을 수 있는 이점 두 가지

// 1. props에 기본적으로 children이 들어가 있음
// option(alt) + ESC로 제안 항목 트리거 확인 가능

// 2. 아래서 자동 완성을 확인할 수 있음
// Greetings.

// React.FC 를 쓰지 말라는 팁이 존재
// 벨로퍼트님의 경우는 사용하지 않는 것을 권장
