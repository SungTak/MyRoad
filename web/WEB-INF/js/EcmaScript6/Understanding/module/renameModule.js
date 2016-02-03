/**
 * Created by Naver on 2016-02-03.
 */
function sum(num1, num2) {
    return num1 + num2;
}
export { sum as add };

export function sub(num1, num2) {
    return num1 - num2;
}

// export의 변수 및 함수는 직접적으로 바꿀수 없지만~ 참고// 같은 이름이 export되어 충돌날 수 있음~
export var name = "marine";
export function setName(newName) {
    name = newName;
}

