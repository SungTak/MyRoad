/**
 * Created by Naver on 2015-10-20.
 */
function isNimble() {
    return true;
}

var isFly = function () {
    return true;
};

window.isRun = function() {
    return true;
};

var apple = function grape() {
    return true;
};
var banana = apple;

var isFastest = isNimble;


var car = new Function("x", "y", "return x + y");