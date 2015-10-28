/**
 * Created by Naver on 2015-10-28.
 */
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

    return this.color;
};

// 생성자를 통해 만든 객체의 this는 sprite에 바인딩된다.
var sprite = new Water("white");
console.log(sprite.color);

// 일반 함수로 호출한 객체는 this가 window이기에 아래 로그는 undefined가 뜬다
var coke = Water("black");
console.log(coke.color);
console.log(window.color);

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

