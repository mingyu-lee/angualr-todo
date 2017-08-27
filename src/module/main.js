/*
  ES6 이전의 방식
  - greeting.js에서 선언된 function의 스콥이 global이므로 바로사용 할 수 있다.
 */
// greeting("Mingyu");

/*
  ES6 방식
  - 다른 자바스크립트 파일(모듈)에서 export한 것을 import한 후 사용 가능
 */

// import { greeting } from 'greeting.js'
//greeting('Mingyu');

/*
import { Greeting } from "./greeting"

let g = new Greeting();
g.sayHello('mingyu');
*/


