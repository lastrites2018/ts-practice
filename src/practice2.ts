// https://velog.io/@velopert/typescript-basics
// 복습

"use strict";
// ts에서 명시한 값의 타입은 자바스크립트 과정으로 컴파일 되는 과정에서 모두 사라짐!

const practice2 = () => {
  const number: number = 3;

  const numbers: number[] = [1, 2, 3];
  const stringArray: string[] = ["hello", "ok"];

  stringArray.push(5); // error

  let mightBeUndefined: string | undefined = undefined;
  let nullableNumber: number | null = null;
  nullableNumber = 9;

  let 과일: "수박" | "사과" | "딸기" = "딸기";
  과일 = "호박"; // error

  interface 동물 {
    getAge(): number;
  }

  class 오리 implements 동물 {
    // implements 키워드를 사용해서 동물 인터페이스의 조건을 충족하겠다는 걸 명시

    중량: number;
    나이: number;

    constructor(중량: number, 나이: number) {
      this.중량 = 중량;
      this.나이 = 나이;
    }

    getAge() {
      return this.나이;
    }
  }

  interface Shape {
    getArea(): number;
  }
  // Shape 인터페이스엔 getArea 함수가 꼭 이써야만 함!

  class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    getArea() {
      return this.radius * this.radius * Math.PI;
    }
  }

  class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    getArea() {
      return (this.width = this.height);
    }
  }
};

function 합치기배열(숫자들: number[]): number | null {
  return 숫자들.reduce((acc, current) => acc + current, 0);
}

const 총합 = 합치기배열([1, 2, 3, 4, 5]);

// interface : for class or object type
