 //document.write("Hello World!");
// alert("Hello World!");

// console .log("Hello World" + "田中さん");
// console.log(10+10);
// console.log("10"+"10");

// console.log(1+1);
// console.log(1-1);
// console.log(2*2);
// console.log(10/3);
// console.log(10%3);

// let x = 1;
// let y = 1;
// x++;
// console.log(x);
// y--;
// console.log(y);

// let x = 7;
// let y = x++;//ｘがｙに代入されてからインクリメント
// let x2 = 7;
// let y2 = ++x2;//x2のインクリメント後にy2に代入
// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);
// console.log(x++);
// console.log(++x);

//変数とは　値を代入するための箱
//定数とは　値を別名で定義したもの
'use strict';//必ず最初に書く
let age = 30;
const name = "田中太郎";

age = age + 2;

console.log(`${name}さんの年齢は${age}です`);
//ES6 or ES2015
//var 変数名/定数　←使わない