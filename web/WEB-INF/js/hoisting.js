/**
 * Created by Naver on 2015-10-22.
 */
console.log("code init before", a);
var a = 10;
console.log("code init after", a);

console.log("code init before", walk());
function walk() {
    var a = 20;
    return a;
}
console.log("code init After", walk());

console.log("code init before", jogging);
var jogging = function() {
    var b = 40;
    return b;
};
//console.log(b); // 못찾는다고하는데 못찾을수밖에 내부변수
console.log("code init before", jogging());

function raceWalk() {
    c = 30;
    return a;
}

//console.log(c); // 못찾는다고하는데?응?
console.log(raceWalk());
console.log(c);
