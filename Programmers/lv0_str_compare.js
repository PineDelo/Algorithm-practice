// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

const str1 = 'ab6CDE443fgh22iJKlmn1o';
// const str1 = "ppprrrogrammers"
const str2 = '6CD';
// const str2 = "pppp"

function str_compare(str1, str2) {
  let result = 0;
  str1.includes(str2) ? (result = 1) : (result = 2);
  return console.log(result);
}

// 다른 방법 풀이
function solution(str1, str2) {
  return console.log(str1.split(str2).length > 1 ? 1 : 2);
}

str_compare(str1, str2);
solution(str1, str2);

// 첫번째 케이스 : return 1
// 두번째 케이스 : return 2

// arr.includes() : 배열이 특정요소를 포함하고 있는지를 boolean 으로 판별한다.
// 유사 함수
// indexOf() => indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
