const message: string = "hello world";
// const message : string = 'hello world'
console.log(message);

let count = 0;
count += 1;
// count = "갑자기 분위기 문자열";

const done: boolean = true;

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ["hello", "world"]; // 문자열 배열

// messages.push(1);
// 이러면 오류

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red";
color = "yellow"; // ok
// color = "green"; // error

// 이렇게 에러가 나타났을땐 컴파일이 되지 않습니다.
// 한번 tsc 명령어를 입력해서 컴파일을 하려고 하면
// 다음과 같이 실패할것입니다.

function sum(x: number, y: number): number {
  // 마지막의 number는
  // 해당 함수의 결과물이 숫자라는 뜻
  // return [] // error
  return NaN; // ok
  // return x + y; // ok
}
sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
  // 배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어진다는 것 입니다.
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
  // void의 경우는 아무 것도 반환하지 않는 함수
  console.log("i am just saying hello world");
}

// 인터페이스

interface Shape {
  getArea(): number;
  // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며
  // 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용, 해당 클래스가 Shape Interface의
  // 조건을 충족하겠다는 뜻을 명시
  // radius: number;

  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea = () => this.width * this.height;
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log("circle.radius", circle.radius);
// console.log(rectangle.width);

// 인터페이스 2

interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고
  // 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
  // name: string;
  // age?: number;
  skills: string[];
}

const person: Person = {
  name: "김사람"
  // age : 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"]
};

const people: Person[] = [person, expert];
