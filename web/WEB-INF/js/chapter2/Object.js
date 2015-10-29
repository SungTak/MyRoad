var sea = "Blue Color";
console.log("밖에서 수행", sea);

var river = function() {
    console.log("river 안에서 수행", this.sea);
    return this.sea;
};

// new로 객체를 생성하지 않은 함수의 this는 window다
river();

var Water = function(color) {
    this.color = color;

    this.getColor = function() {
        return this.color;
    }
};

// 생성자를 통해 만든 객체의 this는 sprite에 바인딩된다.
var sprite = new Water("white");
console.log(sprite.getColor());

// 일반 함수로 호출한 객체는 this가 window이기에 아래 로그는 undefined가 뜬다
var coke = Water("black");
//console.log(coke.getColor()); // coke함수에는 getColor가 없어서 호출할 수 없다!
console.log(window.getColor());

/*
리터럴 객체는 새로운 객체를 생성할 수 없다.
내부를 살펴보면 prototype이 없다.
즉, 생성자가 없기 때문이다.
 */
var soda = {
    color : "white",
    getColor : function() {
        console.log(this.color);
        return this.color;
    }
};

var juice = {
    color : "orange"
};

juice.getColor = soda.getColor();

console.log("soda color", soda.getColor());
console.log("juice color", juice.getColor);

/**
 * 기본 Object를 통한 객체 생성
 *
 * 리터럴과 동일하게 새로운 객체를 생성할 수 없다(재활용)
 * 프로토타입이 없음
 *
 * @type {Object}
 */
var sportsDrink = new Object();
sportsDrink.color = "greenyellow";
sportsDrink.getColor = function() {
  return this.color;
};

console.log(sportsDrink.color);
console.log(sportsDrink.getColor());
console.log(sportsDrink['color']);
console.log(sportsDrink['Color']); // 대소문자 구별함, 특수문자와 같은 프로퍼티를 쓸때, 동적으로 프로퍼티 접근시 사용함

sportsDrink['type'] = "drink";
console.log(sportsDrink.type);
delete sportsDrink.type;
console.log(sportsDrink.type);

delete sportsDrink;
console.dir(sportsDrink); // 불가함 Fail!



