test("Object.js", function() {
    equal(10, inner());
});

test("IIFE Test", function() {
    equal("snack name", bananaKick("snack name"));
    equal("snack name", window.snack);
});

test("", function() {
    equal("snack name", bananaKick("snack name"));
    equal(46, kitkat);
});

test("", function() {
    equal(3, loop()[1]());
    equal(1, loop2()[1]);
});
