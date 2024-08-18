console.log(245 / 2);
console.log(Math.pow(2, 6));
console.log(Math.random());
console.log(parseInt((Math.random() * 3 + 3).toString()));
Math.random(); //随机数
Math.round(Math.random() * 10); //四舍五入
console.log(Math.round(Math.random() * 10));
console.log(Math.max(Math.round(Math.random() * 10)));
Math.abs(2); //绝对值
Math.min(); //最小值
console.log(Math.min(Number(JSON.stringify([1, 3, 2, 6, 3]))));
console.log(JSON.stringify([1, 3, 2, 6, 3]));
console.log(([1, 3, 2, 6, 3]).toString());
console.log('最小值', Math.min.apply(Math, [1, 3, 2, 6, 3]));
console.log(Math.ceil(Math.random() * (10 - 1) + 1));
Math.ceil(Math.random()); //向上取整
console.log(typeof 3);
console.log(typeof {});
console.log(typeof []);
console.log(typeof '12l');
console.log(typeof false);
console.log(typeof function () { });
var s = { d: 'o9' };
console.log(s instanceof Number);
console.log('hillo'.toUpperCase());
Math.random();
console.log(Math.round(Math.random() * 100));
console.log(Object.keys(s));
console.time();
var list = [0];
for (var index = 0; index < 10000000.; index++) {
    list[index] = index;
}
console.timeEnd();
