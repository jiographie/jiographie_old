//20210114 ( fri )

// 1. 매개변수 자료형에따라 다르게 작동하는 min()함수
//typeof, 자료형 확인 array.isArray()

function min(first, ...rests) {
    //변수 선언하기
    let output;
    let items;

    // 매개변수의 자료형에 따라 조건 분기
    if (Array.isArray(first)) {
        output = first[0]
        items = first
    }else if (typeof(first) === 'number') {
        output = first
        items = rests
    }
    // 최솟값 구하기
    for (const item of items) {
        if (output > item) {
            output = item
        }
    }
    return output
}
console.log()

