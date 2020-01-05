// type 연습
// 특정 타입에 별칭을 붙이는 용도
// 배열, 객체 또는 어떤 타입이든 별칭을 지어줄 수 있다

// type Person = {
//   name: string;
//   age?: number;
// };
// 폴더를 바꿔도 기존과 이름이 겹치면 알림

type 퍼슨 = {
  name: string;
  age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 일종의 extends 역활인듯
// 참고:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type 개발자 = 퍼슨 & {
  skills: string[];
};

const 한사람: 퍼슨 = {
  name: "김사람"
};

const 전문가: 개발자 = {
  name: "김개발",
  skills: ["javascript", "react"]
};

type 사람들 = 퍼슨[];
const 피플: 사람들 = [한사람, 전문가];

type Color = "red" | "orange" | "yellow";
const 칼러: Color = "red";
const 칼러들: Color[] = ["red", "orange"];

// 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고,
// 일반 객체의 타입의 경우엔 그냥 type을 사용
// 사실 객체를 위한 타입을 정의할때 무엇이든 써도 상관 없는데
// 일관성 있게만
