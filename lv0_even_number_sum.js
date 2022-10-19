// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

const n = 10;

const even_number_sum = (n) => {
  const sum = Math.floor(n / 2);
  return console.log(sum * (sum + 1));
};

even_number_sum(n);

// Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
// ex) Math.floor(59.95) => 59 | Math.floor(-5.05) => -6 (음수일 때 주의)
