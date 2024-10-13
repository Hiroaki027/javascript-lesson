// Q1 変数
let nickname = '馬場';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age +'です。');

// Q2 配列
let languages = ['JavaScript','PHP','Ruby','Python','Go'];
let templateLiteral = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(templateLiteral);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
let ageTotal = playerList[0].age + playerList[1].age + playerList[2].age;
let ageAverage = ageTotal / 3;

console.log(ageAverage);

//Q6 関数
function sayHello() {
  let sayWorld = 'World';
  console.log(sayWorld);
}

sayHello();

//Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello!');
}

user.sayHello();

//Q8 引数
let calc = {};

calc.add = function(x,y) {
  let total = x + y;
  console.log(total);
}

calc.subtract = function(x,y) {
  let total = x - y;
  console.log(total);
}

calc.multiply = function(x,y) {
  let total = x * y;
  console.log(total);
}

calc.devide = function(x,y) {
  let total = x / y;
  console.log(total);
}

calc.add(3,4);
calc.subtract(12,2);
calc.multiply(7,7);
calc.devide(15,3);

//Q9 返り値
function remainder(x,y) {
  let number = x % y;
  let message = x + 'を' + y + 'で割った数は' + number + 'です。'
  console.log(message);
  return console.log;
}

remainder(5,3);

//Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);

//関数foo内で定義された変数xはローカル変数なので
//関数内ではスコープの有効範囲の為、参照されますが
//今回の場合は関数の外で変数xを呼び出そうとしている為
//未定義という扱いになります。

//応用 Q1 標準組み込みオブジェクト

let num = Math.floor(Math.random() * 10); //floorで小数点以下切り捨て
console.log(num);

//応用 Q2 コールバック関数

setTimeout(function(){console.log('Hello World!')}, 3000);
// setTimeout (() => {
//   console.log('Hello World!');
// }, 3000) ; 
//上記コメントアウトでもできる。 
//setRimeout(関数もしくはコード,時間)※時間は文字列は読み込まない為、数値を与える。1ミリ秒単位の為、1秒は1000となる。

//応用　Q3
function sorting(num) {
  if (num > 0) {
    console.log('num is greater than 0');
  } else if (num < 0 ) {
    console.log('num is less than 0')
  } else {
    console.log('num is 0')
  }
}
num = Math.floor(Math.random() * 10 - 4);
sorting(num);

//応用 Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i]= i;
}
console.log(numbers);

//応用 Q5 for×if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number' &&  mixed[i] % 2 === 0) {
    console.log('even');
  } else if (typeof mixed[i] === 'number' && mixed[i] % 2 !== 0){
    console.log('odd');
  } else {
    console.log('not number');
  }
}
//typeof で型の結果が文字列で返された値を===で確認かつ奇数か偶数か
//i < mixed.lengthで配列内の数だけを条件に指定