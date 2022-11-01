// 2~9단까지의 구구단 나타내기
// 2~5단까지, 6~9단까지 다른 테이블로 나타나게 하기
// 2, 3, 4, 5 * 1 을 한개 행에 나타나게 만들기
// x * y = x*y 에서 y가 4의 배수일 경우 제외하기

const GuGuDan = () => {
  const columns = [2, 6];
  columns.forEach((i) => {
    let text = '';

    for (let j = 1; j < 10; j++) {
      if (j % 4 === 0) continue;
      [0, 1, 2, 3].forEach((k) => {
        let multiplication = `${(i + k) * j}   `;

        if (multiplication.length > 4) {
          multiplication = multiplication.slice(0, -1);
        }

        text += `${i + k} * ${j} = ${multiplication}`;
      });

      console.log(text);
      text = '';
    }

    if (i === 2) console.log('빈줄');
  });
};
