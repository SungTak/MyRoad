/**
 * Created by Naver on 2015-10-20.
 */
test("hello sample test", function() {
    ok( 1 == 1, "success");
});

test("functions.js", function() {
    ok (true === isNimble());
    ok (typeof window.isNimble === "function");
    equal("isNimble", isNimble.name, "이름있는 함수이기 때문에 함수명이 존재한다");
});

test("function.js Not name function", function() {
    ok (true === isFly());
    ok (typeof window.isFly === "function");
    equal("", isFly.name, "익명 함수이기 때문에 함수명이 존재하지 않는다!");
});


test("function.js Window의 필드", function() {
    ok (true === isRun());
    ok (typeof window.isRun === "function");
    equal("", isRun.name, "윈도우의 필드지만 익명 함수이기 때문에 함수명이 존재하지 않는다!");
});


test("function.js 변수와 이름함수", function() {
    ok (typeof window.grape === "undefined", "grape()는 될수없다 정의되지 않은 포도라고 한다. window객체에 등록못됨..");

    ok (true === apple());
    ok (typeof window.apple === "function");
    equal("grape", apple.name, "익명함수가 아니다. grape가 역시 있다");

    ok (true === banana());
    ok (typeof window.banana === "function");
    equal("grape", banana.name, "바나나 역시 익명함수가 아니다. grape가 역시 있다");
});

test("function.js 변수와 이름함수", function() {
    ok (true === isNimble());
    ok (true === isFastest());
    ok (typeof window.isNimble === "function");
    ok (typeof window.isFastest === "function", "grape()와 다르게 이 경우 둘다 가능");
    equal("isNimble", isFastest.name, "익명함수가 아니다. grape가 역시 있다");
});

test("function.js Function 객체", function() {
    ok (typeof window.car === "function");
    equal(3, car(1, 2));
    equal("", car.name, "익명 함수이기 때문에 함수명이 존재하지 않는다!");
});