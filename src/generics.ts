function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
// 이렇게 any를 남발하면 타입 유추가 모두 깨진 거다.
// 즉, 타입스크립트를 쓰는 의미가 없다

// 개선안
function improvedMerge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const improvedMerged = improvedMerge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap(10);

// 함수에서 제네릭스를 사용하면 파라미터로 다양한 타입을 넣을
// 수 있고 타입 지원을 지킬 수 있음

// 이래도 됨
function testWrap<아무말>(param: 아무말) {
  return {
    param
  };
}

const testWrapped = testWrap(10);

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"]
  // list : ['a', 1, 'c'] // 이렇게 하면 오류
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
const queueString = new Queue<string>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queueString.enqueue("0");
queueString.enqueue("1");
queueString.enqueue("2");
console.log("queueString: ", queueString);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
