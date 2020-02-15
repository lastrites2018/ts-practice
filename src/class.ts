// js 에서는 문제 없는 코드
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

class PersonTypescriptWay {
  // typescript must declare class property first
  name: string;
  // 커맨드 + . -> 자동 수정 단축키
  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person = new Person("Lee");
person.walk();
