test("Object.js", function() {
    equal("Blue Color", window.sea);
    equal("Blue Color", window.river());
});


test("Custom Object.js", function() {
    equal("white", sprite.getColor());
    //equal(undefined, coke.getColor());
    equal("black", window.color);
});

test("literal Object.js", function() {
    equal("white", soda.getColor());
    equal("white", juice.getColor);
    equal("white", grapeJuice());
    equal("yellow", appleJuice.getColor());
});

test("new Object.js", function() {
    equal("greenyellow", sportsDrink.getColor());
    equal("greenyellow", sportsDrink.color);
    equal("greenyellow", sportsDrink['color']);
    equal(undefined, sportsDrink['Color']);
});

