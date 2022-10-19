// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요
// 소수점 1의 자리 수까지 나타내기

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// result : 5.5
const numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
// result : 94.0

function arr_avg(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const result = sum / numbers.length;
  return console.log(result.toFixed(1));
}

arr_avg(numbers);

// [reduce]: arr.reduce(previousValue, currentValue) => previousValue + currentValue, initialValue); 배열의 합을 도출
// [toFixed]: numObj.toFixed([digits]); 소수점 자릿 수 