"use strict"

var x = "10";
var y = 10;

console.log(x-y)

// malumot turlari deb ataladi -> data types
// javascriptda 8 ta malumot turi bor bo'lib:
// ----------------------Primitive-----------------------------------
// 1: String : bu matn malumotlarini o'ziga saqlab turib u o'z ichiga qolgan malumot turlarini ham matn korinishida qabul qila oladi.

// uni qanday farqlaymiz ? 
// "salom" || 'salom' || `salom` -> bularni hammasi string hisoblanadi.
 console.log("djsaldjsalk\ndsadsahjkdhas")

 // 2: Number : har qanday qavs yoki qo'shtirnoq orasida bolmagan sonlar bu Number malumot turi deb ataladi

 // qanday ajratamiz ?
 // "10" -> not number
 // '50' -> not number
 // 40 -> number
 // "500"*(-1) number


 console.log("50" - "40")

  // 3:boolean
  // bu malumot bor yoki yo'qligini yoki biz tekshirgan shartimizga mos kelishi yoki kelmasligini , biz bergan parameterlar aniq yoki aniqmasligini bildiradigan malumot turi hisoblanib unda ikkita qiymat mavjud :

  // 1: true,
  // 2: false
 

  // 4:undefined
  // undefined o'zgaruvchi malum bolib uni ichiga hech qanday malumot saqlanmasa bu undefined hisoblanadi.
  
  let data
  
  console.log(data);
  

  // 5:null
  // hech qanday o'zgaruvchi ham qiymat ham yoq bolgan malumot turi bu null hisoblanadi.

  let car = null

  console.log(car);
  car ="Malibu turbo"

  console.log(car)

  // number -> 2ni53 darajasini -1
  // bigInt -> number hato hisoblaydigan sonlar uchun yani 2 ni 53chi darajasidan katta sonlar uchun.

  15345910n

  let matn1 = Symbol("salom")
  let matn2 = Symbol("salom")
  
  console.log(matn1==matn2);
  // sababi bu yerda matn bir hil ammo malumot turi symbol bolgani uchun malumotni hotiradagi joylashuvini o'zgaritirib yuboradi va ikkisini har hil deb hisoblaydi.

//  ------------------------------NonPrimitive--------------------------- 

  // 8:object
  // object oziga key va valu holda malumotlarni saqlab oladi.
  // consoleda yoki biror bir ozgaruvchida uni keyiga murojaat qilsak valueni qaytaradi
  let girl = {
   name:"Laylo",
   surname:"Agayeva",
   age:14,
   height:140,
   weight : 35,
   hairColor:"pink",
   face:"serious",
   fashion:"korean",
   Love:false,
   img:"./assets/girl.webp"
  }

  console.log(typeof girl);
  


