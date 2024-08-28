//템플릿 문자열 실습 1
let year = 2018;
let month = 3;
let day = 11;

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

//템플릿 문자열 실습 2
let myNumber = 3;

function getTwice(x){
  return x *2;
}
console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`)

//템플릿 문자열 실습 3
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다. `);  // 괄호 안에 코드를 작성하세요
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);