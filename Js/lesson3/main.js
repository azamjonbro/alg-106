// o'zgarivchilarga son belgi yoki bo'sh joy _ chiziqlar ishlatib bolmaydi

let son = ""

// o'zgaruvchilarni yozish usullari  3 hil hisoblanib.

// 1: Camel case -> sonNumberId
// 2: Snake case -> son_number_id
// 3: Kebab case -> son-number-id
// 4: Pascal case -> SonNumberId


let boshlangichSon 
let ikkinchi_son = 50

console.log(boshlangichSon || ikkinchi_son ) 
// agar birinchi o'zgaruvchida qiymat bolsa oynaga birinchisini chiqaradi aks holda ikkinchidagi qiymatga o'tib ketadi

console.log(boshlangichSon && ikkinchi_son )
// bu yerda bu ikki qiymat orasidan false qiymat qidiradi topolmagach ikkinchidagi parameterni chiqarib beradi.
console.log(boshlangichSon ^ ikkinchi_son)
// bu yerda ikkita qiymat orasidan xor amalini bajaradi. Agar ikkita qiymat bir xil bo'lsa false qiymat qaytaradi


console.log(boshlangichSon ?? ikkinchi_son) 
// bu operator nomi nullish hisoblanib 
// agar birinchi o'zgaruvchida qiymat bo'lmasa ikkinchi o'zgaruvchini chiqaradi
// agar birinchi o'zgaruvchida qiymat bo'lsa birinchi o'zgaruvchini chiqaradi
// bu yerda undefined va null qiymatlarni tekshiradi
// agar birinchi o'zgaruvchida undefined yoki null qiymat bo'lsa ikkinchi o'zgaruvchini chiqaradi
// agar birinchi o'zgaruvchida qiymat bo'lsa birinchi o'zgaruvchini chiqaradi


// alert("Dangasa bolalar")

// confirm("nimaga kop gapirasiz ?")


let parameter = Number(prompt("Yoshingizni kiriting"))

alert(`Salom ${parameter}, xush kelibsiz!`);


console.log(typeof parameter);


// bu narsa yani o'zidan boshqa typega o'tkazish bu type conversition deb ataladi.

// agar o'tkazayotgan vaqtimizda harfni raqamga o'tkazib qoysak bizda NaN chiqadi yani not a number hisoblanadi va bu son ustida amal bajarib bolmaydi