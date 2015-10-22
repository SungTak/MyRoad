/**
 * Created by Naver on 2015-10-20.
 */
test("functionScope.js", function() {
    ok (typeof window.outer === "function");
    equal("outer", outer.name, "외부 함수는 바로 접근");

    ok (typeof window.inner === "undefined");
    ok (typeof window.outer.inner === "undefined", "window->outer->inner로 갔지만 언디파인이다");

    ok (typeof window.outer() === "undefined", "window->outer()은 void로 undefined를 리턴한다");
});