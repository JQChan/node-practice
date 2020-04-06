'use strict';

// 创建buffer
let buf = new Buffer(24);

console.log(buf);

let buf2 = new Buffer(24);

// 填充buffer
buf2.fill(0);

console.log(buf2);

let a = [1, 2, 3];

// 创建buffer
let b = Buffer.from(a);

console.log(b);

let a2 = new Uint8Array([1, 2, 3]);

let b2 = Buffer.from(a2);

console.log(b2);

// 创建buffer
let b3 = Buffer.alloc(10);

console.log(b3);

// 创建buffer
let b4 = Buffer.allocUnsafe(10);

console.log(b4);

let buf3 = new Buffer('This is my pretty example');

// 将缓冲器转换成JSON
let json = JSON.stringify(buf3);

console.log(json);

let buf4 = new Buffer(JSON.parse(json).data);

// 将Buffer转换成字符串
let str = buf4.toString();

console.log(str);

// 使用StringDecoder将Buffer转换成字符串
let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');

let euro = new Buffer([0xE2, 0x82]);
let euro2 = new Buffer([0xAC]);

console.log(decoder.write(euro));
console.log(decoder.write(euro2));

console.log(euro.toString());
console.log(euro2.toString());

// 检查缓冲器的大小
let buf5 = new Buffer(3);
buf5.write('€', 'utf-8');

console.log(buf5.length);