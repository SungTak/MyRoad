/**
 * Created by Naver on 2016-02-03.
 */
// re-exporting

import { sum } from "module.js";
export { sum };

/*
// 위 코드는 아래처럼 바꿀수있다
export { sum } from "module.js";
*/

/*
// 리네임도 가능하다 sum으로 import되서 add로 나간다.
export { sum as add } from "module.js";
*/

/*
// 바로 전체 읽고 나감
export * from "module.js";
*/