// class Queue {
//   protected data = [];

//   push(item) {
//     this.data.push(item);
//   }

//   pop() {
//     return this.data.shift();
//   }
// }

// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }

//   pop(): number {
//     return super.pop();
//   }
// }

class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

const NumberQueue = new Queue<number>();

// 제네릭 generic은 선언 시점이 아니라 생성 시점에 타입을 명시하여
// 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법

function reverse<T>(items: T[]): T[] {
  // function reverse<T>(items: T[]): T[] {
  // 즉 string을 전달 받을 때에는
  // function reverse<string> (items : string[]) : string[] {
  // 이렇게 변환된다고 생각하면 될 듯
  return items.reverse();
}

const arg = [1, 2, 3, 4, 5];

const reserved = reverse(arg);
console.log(reserved);

const stringArg = [{ name: "Lee" }, { name: "Kim" }];
// 인수에 의해 타입 매개변수가 결정된다.
const reversed = reverse(stringArg);
console.log(reversed);
