"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
// 이렇게 any를 남발하면 타입 유추가 모두 깨진 거다.
// 즉, 타입스크립트를 쓰는 의미가 없다
// 개선안
function improvedMerge(a, b) {
    return __assign(__assign({}, a), b);
}
var improvedMerged = improvedMerge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
// 함수에서 제네릭스를 사용하면 파라미터로 다양한 타입을 넣을
// 수 있고 타입 지원을 지킬 수 있음
// 이래도 됨
function testWrap(param) {
    return {
        param: param
    };
}
var testWrapped = testWrap(10);
var items = {
    list: ["a", "b", "c"]
    // list : ['a', 1, 'c'] // 이렇게 하면 오류
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
var queueString = new Queue();
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
