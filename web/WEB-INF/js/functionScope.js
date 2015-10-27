/**
 * Created by Naver on 2015-10-20.
 */

//// scope ////
function outer() {
    function inner() {

    }
}

function foo() {
    var a = 10;
    function innerFoo() {
        console.log(a);
    }

    return innerFoo;
}

var outerFoo = foo();

function bar() {
    var a = 20;
    outerFoo(); //20일꺼같지? 10이야.... 스코프체인 (멀리보면.. 클로져)
}


function fx(){
    return "global";
}
function test(y){
    function fx(){
        return "local";
    }
    var result = [];
    if(y){
        result.push(fx());
    }
    result.push(fx());
    return result;
}
console.log(test(true) );// local, local
console.log(test(false) );//local

/// bug?, 과연 fx는
function testBlockHoistingBug(y){
    var result = [];
    if(y){
        function fx(){
            return "local";
        }
        result.push(fx());
    }
    result.push(fx());
    return result;
}
console.log(testBlockHoistingBug(true) );// ?
console.log(testBlockHoistingBug(false) );//?


/// bug fix version
function testBlockHoisting(y){
    var g= fx, result = [];

    if(y){
        g = function(){
            return "local";
        }

        result.push(g());
    }

    result.push(g());

    return result;
}
console.log(testBlockHoisting(true) );// ?
console.log(testBlockHoisting(false) );//?
