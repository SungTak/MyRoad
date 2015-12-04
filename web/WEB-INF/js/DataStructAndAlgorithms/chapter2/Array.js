/**
 * Created by Naver on 2015-10-29.
 */
var nums = [1,2,3,7,8,9, "a", true, {key:"value"}, 1, 4];

console.log("length : ", nums.length);
console.log("isArray : ", Array.isArray(nums));
console.log(nums);
console.log("indexOf 있음 : ", nums.indexOf(8));
console.log("indexOf 없음 : ", nums.indexOf(100));
console.log("lastIndexOf 있음 : ", nums.lastIndexOf(1));
console.log("join : ", nums.join());
console.log("toString : ", nums.toString());

nums[1] = 22;

console.log(nums);

var sameNums = nums; // 얕은 복사, sameNums는 단순히 nums가 가리키는 곳을 바라볼뿐
nums[2] = 3333;

console.log("sameNums는?", sameNums[2]);

function copy(source) {
    var target = [];
    for (var i = 0; i < source.length; i++) {
        target[i] = source[i];
    }
    return target;
}

var diffNums = copy(nums); // 깊은 복사, 원래 배열의 요소를 완전히 새로운 배열로 복사하는 것

nums[3] = "7String";

console.log("diffNums는?", diffNums[3], nums[3], sameNums[3]);






var newElements = [4,5,6];

console.log("concat1 : ", nums.concat(newElements));
console.log("concat2 : ", newElements.concat(nums));

var sliceArray = [1,2,3,4,5,6,7,8,9,10];
console.log("slice : ", sliceArray.slice());
console.log("slice : ", sliceArray.slice(3,5));
console.log("slice after : ", sliceArray);

var spliceArray = [1,2,3,4,5,6,7,8,9,10];
console.log("splice : ", spliceArray.splice(3,3));
console.log("splice after : ", spliceArray);

var centerPush = [1,2,3,7,8,9];
centerPush.splice(3, 0, newElements);
console.log("centerpush", centerPush);


var pushArray = [1,2,3,4,5,6,7,8,9,10];
pushArray.push(0);
pushArray.unshift(100);
console.log(pushArray);

var popArray = [1,2,3,4,5,6,7,8,9,10];
console.log("pop", popArray.pop());
console.log(popArray);
console.log("shift", popArray.shift());
console.log(popArray);

var sortArray = [1,2,3,4,5,100,200,1000,4000];
console.log(sortArray);
//console.log(sortArray.sort());
//console.log(sortArray.reverse());



