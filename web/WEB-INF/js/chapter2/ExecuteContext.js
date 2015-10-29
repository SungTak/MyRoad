/**
 * 실행 컨텍스트 Stack (클로저)
 *
 * 1. 전역 입장 : global
 * 2. outerFunc : global -> outerFunc
 * 3. innerFunc : global -> outerFunc -> innerFunc
 *
 * @returns {innerFunc}
 */
function outerFunc() {
    var x = 10;
    var innerFunc = function() {
        return x;
    };

    return innerFunc;
}

var inner = outerFunc();

/**
 * inner가 수행될 때의 순서
 * 1. innerFunc에서 x를 찾는다 -> 없다.
 * 2. outerFunc에서 x를 찾는다 -> 있다. -> 10 -> 출력
 */
console.log(inner());


