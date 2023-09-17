console.log(2);
console.log('문자');
console.log(true);

const two = 2;
console.log(two);

const four = 4;
console.log(four);

let undefinedVal;
console.log(undefinedVal);

const additionConst = two + four;
console.log(additionConst);

let addition = two + four;
console.log(addition);

let subtraction = two - four;
console.log(subtraction);

let multiplication = two * four;
console.log(multiplication);

let division = two / four;
console.log(division);

// additionConst = additionConst + two;
// console.log(additionConst);
// 이건 안 됨

addition = addition + two;
console.log('addition', addition);
addition += two;
console.log('addition', addition);

subtraction = subtraction - two;
console.log('subtraction', subtraction);
subtraction -= two;
console.log('subtraction', subtraction);
subtraction += -two;
console.log('subtraction', subtraction);
subtraction += -1 * two;
console.log('subtraction', subtraction);

multiplication = multiplication * two;
console.log('multiplication', multiplication);
multiplication *= two;
console.log('multiplication', multiplication);

console.log('square, 제곱', 8 ** 2);
console.log('square, 세제곱', 8 ** 3);
console.log('root square, 제곱근', 64 ** (1 / 2));

division = division / two;
console.log('division', division);
division /= two;
console.log('division', division);
division *= 1 / two;
console.log('division', division);

let counter = 0;
counter += 1;
console.log('counter', counter);
counter += 1;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter--;
console.log('counter', counter);

let remainder = counter % 8;
console.log('remainder', remainder);
// remainder -> 나머지

counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
boolean = !boolean;
console.log(boolean);
boolean = !boolean;
console.log(boolean);
// 껐다 켰다, 토글 만들 때 개념으로 사용되기도 함

const TextTwo = '2';
console.log(two);
console.log(TextTwo);
console.log('num + txt', two + TextTwo);
console.log('num + num', two + two);
console.log('txt + txt', TextTwo + TextTwo);
console.log('solution', two + Number(TextTwo));
// 보라색 -> 계산된 값, 글자아님
// 흰 색 -> 글자 (텍스트)
