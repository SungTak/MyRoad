/**
 * Created by Naver on 2015-10-20.
 */
test("functionThis.js", function() {
    equal(creep(), window);

    equal(sneak(), window);

    equal(cobra.skulk(), cobra);

    equal(lizard.skulk(), lizard);

    equal(dragon(), window, "new로 생성했지만 this는 window를 가리킨다!");
});