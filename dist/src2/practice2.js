"use strict";
// type 연습
// 특정 타입에 별칭을 붙이는 용도
// 배열, 객체 또는 어떤 타입이든 별칭을 지어줄 수 있다
var 한사람 = {
    name: "김사람"
};
var 전문가 = {
    name: "김개발",
    skills: ["javascript", "react"]
};
var 피플 = [한사람, 전문가];
var 칼러 = "red";
var 칼러들 = ["red", "orange"];
// 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고,
// 일반 객체의 타입의 경우엔 그냥 type을 사용
// 사실 객체를 위한 타입을 정의할때 무엇이든 써도 상관 없는데
// 일관성 있게만
