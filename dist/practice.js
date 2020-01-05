"use strict";
var message = "hello world";
// const message : string = 'hello world'
console.log(message);
var count = 0;
count += 1;
// count = "갑자기 분위기 문자열";
var done = true;
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ["hello", "world"]; // 문자열 배열
// messages.push(1);
// 이러면 오류
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = "red";
color = "yellow"; // ok
// color = "green"; // error
// 이렇게 에러가 나타났을땐 컴파일이 되지 않습니다.
// 한번 tsc 명령어를 입력해서 컴파일을 하려고 하면
// 다음과 같이 실패할것입니다.
function sum(x, y) {
    // 마지막의 number는
    // 해당 함수의 결과물이 숫자라는 뜻
    // return [] // error
    return NaN; // ok
    // return x + y; // ok
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
    // 배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어진다는 것 입니다.
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    // void의 경우는 아무 것도 반환하지 않는 함수
    console.log("i am just saying hello world");
}
var Circle = /** @class */ (function () {
    // `implements` 키워드를 사용, 해당 클래스가 Shape Interface의
    // 조건을 충족하겠다는 뜻을 명시
    // radius: number;
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        var _this = this;
        this.width = width;
        this.height = height;
        this.getArea = function () { return _this.width * _this.height; };
        this.width = width;
        this.height = height;
    }
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log("circle.radius", circle.radius);
// console.log(rectangle.width);
