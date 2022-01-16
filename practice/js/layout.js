//20220110 (MON)

"use strict";
console.log("hello world");

const a = '안녕';
function 인사 (구멍) {
    console.log(구멍 +'하세요');
}

인사 (a);

console.log(인사);
console.log(a);

// 기본형태의 함수 만들기
function f(x) {
    return x * x;
}

console.log(f(5));

// 윤년을 확인하는 함수 만들기
function isLeapYear (year = 2022) {
    return (year % 4 === 0) && (year % 10 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear(2024));

// a 부터 b 까지 더하는 함수
function sum (a, b) {
    let output = 0;
    for (let i = a; i <= b; i++){
        output += i
    };
    return output;
}
console.log(sum (1, 10));

// a부터 b까지 곱하는 함수
function multiply (a, b) {
    let output = 1;
    for (let i = a; i <= b; i++) {
        output *= i
    }
    return output;
}
console.log(multiply(1, 5));
// 매개변수 선언 빼먹지 않게 주의

//  최솟값을 구하는 함수
function min(array) {
    let output = array[0];
    for (const item of array) {
        if (output > item) {
            output = item
        }
    }
    return output;
}
// * return 을 for문 밖에 선언ß
const array1 = [10, 4, 200, 30, 50, 2]
console.log(min(array1));


// ----------- 나머지 매개변수를 이용한 배열 만들기
function sample(...items) {
    console.log(items)
}
sample(1, 2, 6, 7);

// ---------- 나머지 매개변수와 일반 매개변수를 갖는 함수
function sample(a, b, ...c) {
    console.log(a, b, c);
};

sample(1, 2);
sample(1, 2, 3);
sample(1, 2, 3, 4);