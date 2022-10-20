// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다. (2)
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다. (1)
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다. (3)
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다. (4)

// dot = [2, 4]; // return 1
const dot = [-7, 9]; // return 2

function location_dot(dot) {
    const [num1,num2] = dot;
    const check = num1 * num2 > 0;
    const result = num1 > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
    return console.log(result);
}

location_dot(dot);

