/**
 * Created by Naver on 2016-02-03.
 */
// export 기본값 함수가 됨
export default function(num1, num2) {
    return num1 + num2;
}
export let color = "red";

/*
 // equivalent to previous example
 function sum(num1, num2) {
 return num1 + num2;
 }

 export { sum as default }; // 이 방법으로도 가능
 */