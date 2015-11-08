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

(function() { // IIFE (이피) 시작
    console.log("IIFE 내부");
})(); // 세미콜론은 반드시 있어야한다. IIFE 끝
// 즉시 실행되는 함수

(function() { // IIFE (이피) 시작
    console.log("IIFE 내부 222222");
})();

!function() {
    console.log("느낌표 접두사 이피");
}();

void function() {
    console.log("void 접두사 이피");
}();

//function() {
//    console.log("일반 함수 이피");
//}(); //안됨

var bananaKick = function() {
    var snack = "chocoBar";
    function getSnack(name) {
        this.snack = name || snack;
        return this.snack;
    }
    return getSnack;
}();

// new 없이 생성했기 때문에 this는 window이다.
console.log(bananaKick("banana"));

var x = 23;
var kitkat = (function(twice) {
    return twice;
})(x * 2);

console.log(kitkat);


///// closure
function createInc(startValue) {
    return function(step) {
        startValue += step;
        return startValue;
    }
}

var add = createInc(10);

console.log(add(1)); //11
console.log(add(3)); //14

function loop() {
    var list = [];

    for (var i = 0; i < 3; i++) {
        var innerFunc = function() {
            return i;
        };
        list.push(innerFunc);
    }
    return list;
}

console.log(loop()[1]());


function loop2() {
    var list = [];

    for (var i = 0; i < 3; i++) {
        var innerFunc = function() {
            return i;
        };
        list.push(innerFunc());
    }
    return list;
}

console.log(loop2()[1]);


