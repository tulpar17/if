// const _ = "DOLAR";
// console.log(`${_} Karakter sayısı: ${_.length}`);



// const currentTemp = 19.5;
// console.log(`The current temperature is ${currentTemp}\u00b0C`);



// const sam1 = {
//     name: 'Sam',
//     age: 4,
//     };
// console.log(sam1);



// const x = 8;
// if (x === 6 || x >= 9) {
//   console.log("if");
// } else if (x === 5 || x === 8) {
//   console.log("else if");
// } else {
//   console.log("else");
// }



// const J = 9;
// const color = J > 10 ? 'red' : 'blue';
// switch(color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is NOT red or blue');
// }



// const now = new Date();
// const saat = now.getHours();
// const dakika = now.getMinutes();

// saat = 10 > saat > 0 ? '0'+saat : saat;
// dakika = 10 > dakika > 0 ? '0'+dakika : dakika;
// yaz_dostum = `Saat şuanda ${saat}:${dakika}`;

// if (saat >= 5 && saat <= 10) {
//   document.write(`Günaydın! ${yaz_dostum}`);
// }
// else if (saat > 10 && saat <= 18) {
//   document.write(`İyi günler! ${yaz_dostum}`);
// }
// else if (saat > 18 && saat <= 23) {
//   document.write(`İyi akşamlar! ${yaz_dostum}`);
// }
// else {
//   document.write(`İyi Geceler! ${yaz_dostum}`);
// }


// const dlz = (n) => (n <= 9 ? `0${n}` : n);
// const dt = new Date(), saat = dlz(dt.getHours());
// let yaz_dostum = `Saat şuanda ${saat}:${dlz(dt.getMinutes())}`;
// if (saat >= 5 && saat <= 10) {
//   document.write(`Günaydın! ${yaz_dostum}`);
// }
// else if (saat > 10 && saat <= 18) {
//   document.write(`İyi günler! ${yaz_dostum}`);
// }
// else if (saat > 18 && saat <= 23) {
//   document.write(`İyi akşamlar! ${yaz_dostum}`);
// }
// else {
//   document.write(`İyi Geceler! ${yaz_dostum}`);
// }


// const dlz = n => (n <= 9 ? `0${n}` : n);
// const dt = new Date();
// console.log(`${dlz(dt.getHours())}:${dlz(dt.getMinutes())}`);



// let a = 18;
// a > 10 && console.log('true');



// for (let i = 0;i <= 100;i += 2) {
//   !(10 < i && i < 60 || 80 < i && i < 90) && document.write(i + '<br>');
//   (i === 12 || i === 82) && document.write('<br>');
//  //OR
// 	//document.write((10 < i && i < 60 || 80 < i && i < 90) ? '' : i + '<br>');
// 	//document.write((i === 12 || i === 82) ? '<br>' : '');
// }



// console.log(`hsl(${Math.random() * 360}, 100%, 50%)`);
// console.log(`#${Math.random().toString(16).substr(2,6)}`);
// console.log(`#${Math.random().toString(16).substr(2,6).toUpperCase()}`);



// function fg(a) {
//   if (a > 0) {
//     return "positive";
//   } else {
//     return "NOT positive";
//   }
// }
// console.log(fg(-5));
//
//
// const tn = x => x > 0 ? "positive2" : "NOT positive2";
// console.log(tn(-5));



// const tarih = new Date();
// const gun = tarih.getDay();

// switch(gun) {
// 	case 4:
// 	case 5:
// 		console.log("hafta sonuna az kaldı");
// 		break;
// 	case 0:
//  case 6:
// 		console.log("hafta sonu");
// 		break;
// 	default:
// 		console.log("henüz hafta sonu değil");
// }



// function Topla(a, b) {
//   if(b === undefined) {
//     b = 0;
//   }
//   return a + b;
// }
// console.log(Topla(2));
// OR
// let Topla2 = (c, d) => (d === undefined ? c + (d = 0) : c + d);
// console.log(Topla2(2));



// var options = {
//   hour: 'numeric',
//   minute: 'numeric'
// }
// var date = new Date();
// new Intl.DateTimeFormat('tr-TR', options).format(date);
// OR
// console.log(new Intl.DateTimeFormat('tr-TR', {
//   hour: 'numeric', minute: 'numeric',
// }).format(new Date()));
//OR
// let aaa = new Intl.DateTimeFormat('tr-TR', {
//   hour: 'numeric', minute: 'numeric',
// }).format(new Date);


// 1'den N'e kadar olan sayıların toplamı!
// let toplam = 0;
// for(let sayi = 1; sayi <= n; sayi++) {
// 	toplam += sayi;
// }
// document.write(toplam);
// OR
// console.log((n * (n+1)) / 2); // Üçgensel sayılar // 5 * (5+1) / 2
// fonksiyonlu hali
// const a = (n) => n * (n + 1) / 2;
// console.log(a());
//OR
//a=(n)=>n*++n/2;
//console.log(a(5));



// let fact = 1;
// for(let sayi = 1; sayi <= 5; sayi++) {
// 	fact *= sayi;
// }
// document.write(fact);

//const factorial = (n) => (n > 1) ? factorial(n - 1) * n : 1;
//const factorial = n => n ?  (n * factorial(n-1)) : 1;
//const factorial = n => !n || n * factorial(--n);
//console.log(factorial(5));

//f=n=>(n<2)?1:f(n-1)*n;
//f=n=>n?f(n-1)*n:1;
//f=n=>n?n*f(--n):1;
//f=n=>!n||n*f(--n);
//console.log(f(5));



// let g, y, alan, cevre;
// g = Number(prompt("Genişlik:"));
// y = Number(prompt("Yükseklik:"));
// document.write("Alan: "+g*y+"<br>Çevre: "+(g+y)*2);



// let r = Number(prompt("Yarıçap: "));
// document.write("Alan: "+Math.PI*r*r+"<br>Çevre: "+Math.PI*r*2);



// let i, oran=2.54;
// i = Number(prompt("Inch: "));
// document.write(i+" Inch<br>"+oran*i+" Santimetre");

// let s = 1;
// while(s <= 5)
// {
// 	document.write("merhaba<br>");
// 	s++;
// }

// for (let s = 1; s <= 5;s++) {
//   document.write("merhaba<br>");
// }

// for (var i = 0; i <= 5; i++) {
//  // if (i === 3) continue;
// 	// if (i === 3) { continue; }
//  OR
//  //console.log(i === 3 ? '' : i);
//  OR
//  //!(i === 3) && console.log(i);
// }
// örnek kod = 0'dan 100'e kadar for yapmak, içerisinde bir dizideki sayı varsa yazdırmamak.



// for (var i = 0; i < 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
//OR
// for (let i = 0; i < 100; i++) {
//   i % 5 === 0 && console.log(i);
// }



// **Old Method:**
// if(x){
//    add(x);
// }
// New Method:
// x && add(x);



// console.clear();
// var person = {
//     name: 'Fatih',
//     age: 31,
//     job: 'Developer',
// }
// for (key in person) {
//     console.log(key);
// }



// console.clear();
// var person = {
//     name: 'Fatih',
//     age: 31,
//     job: 'Developer',
// }
// for (key in person) {
//     console.log(key, ':', person[key]);
// }



// console.clear();
// var person = {
//     name: 'Fatih',
//     age: 31,
//     job: 'Developer',
// }
// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log(Object.values(person).length);



// //Junior developer
// var f = function(n) {
//     if (n > 42) {
//         return '42';
//     } else {
//         return 'not 42';
//     }
// }
// console.log(f(55);

// //Senior developer
// var f = function(n) {
//     if (n > 42) {
//         return '42';
//     }
//         return 'not 42';
// }
// console.log(f(55));

// //I'm
// const f = (n) => (n > 42) ? '42' : 'not 42';
// console.log(f(55));

// //Legend I'm
// f=n=>(n>42)?'42':'not 42';
// console.log(f(55));



// const nums = new Set();
// while(nums.size !== 6) {
//   nums.add(Math.floor(Math.random() * 50));
// }
// console.log([...nums]);

// console.log(Number("23"));
// console.log(typeof Number("23"));
// console.log(parseInt("23", 10));
// console.log(typeof parseInt("23", 10));
//document.write(typeof(5));
//document.write(typeof 5);



// const merh = n => {
//   for (let i = 1; i <= n; i++) {
//     console.log(i,'merhaba');
//   }
// }
// merh(55);



/*

funciton arrow için = (n) => yerine = n => yazılabilir, çünkü tek parametre.
eğer iki parametreli olsaydı parantez koyulabilirdi.
(name, lastName)

*/

// let 我 = '...';
// console.log(我);



//console.log(-(+""+true+true)*Math.PI);


// let elma = "2", portakal = "3";
// console.log(Number(elma) + Number(portakal));
// OR
// console.log(+elma + +portakal);



// for (let i = 0; i < 3;) {
//   console.log( i++ );
// }



// let x = 10;
// console.log(x **= 2);


// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id     : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// const $_x = person.fullName();
// const $_y = person.id;
// console.log(`${$_x} => id:${$_y}!`);



// const str = "HELLO WORLD";
// for (let i = 0; i <= 10; i++) {
// 	document.write(`${str.charAt(i)}<br>`);
// }



// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.join(" * "));



// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits[0] = "Kiwi";
// console.log(fruits);



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3, fruits.length);
// console.log(fruits);
// console.log(citrus);



// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a, b) => b - a));
// console.log(`En büyük değer ${points[0]}`);
// OR
// const points = [40, 100, 1, 5, 25, 10];
// console.log(`En büyük değer ${Math.max.apply(null, points)}`);



// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
//------------
//cars.sort((a, b) => a.year - b.year);
//------------
// console.log(`${cars[0].type} ${cars[0].year}`);
// console.log(`${cars[1].type} ${cars[1].year}`);
// console.log(`${cars[2].type} ${cars[2].year}`);
// // OR
// for (let value of cars) {
//   console.log(`${value.type} ${value.year}`);
// }
// // OR
//cars.forEach(value => console.log(`${value.type} ${value.year}`));



// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(element => console.log(element));



// const array1 = [1, 4, 9, 16];
// console.log(array1.map(x => x * 2));



// const square = x => x ** 3;
// const mapSquare = [ 2, 3, 4 ].map(square);
// mapSquare.forEach(element => console.log(element));
// // OR
// [2, 3, 4].map(x => x ** 3).forEach(value => console.log(value));



// const numbers = [1, 4, 5, 8, 10];
// console.log(numbers.map(x => x * 5));



// const materials = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];
// materials.map(({length}) => console.log(length));




// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));
// // OR
// const numbers = [1, 30, 39, 29, 10, 13];
// console.log(numbers.every(value => value < 40));



// console.log([0x7, 0xBA, 0xCF, 0b1101, 0b10111].every(isPositive => isPositive > 0));



// (() => {
//   console.log("Hello! I called myself");
// })();



// function sumAll() {
//   var i;
//   var sum = 0;
//   for(i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumAll(1, 123, 500, 115, 44, 88));
// // OR
// let sum = 0;
// [1, 123, 500, 115, 44, 88].map(x => sum += x) && console.log(sum);
