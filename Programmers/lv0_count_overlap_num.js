// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

const array = [1, 1, 2, 3, 4, 5];
const n = 1;

const count_overlap_num = (array, n) => {
  const result = array.filter((i) => i === n);
  return console.log(result.length);
};

count_overlap_num(array, n);

//  arr.filter(callback => function); 조건에 합당하는 값을 새로운 배열에 담아 반환한다.
