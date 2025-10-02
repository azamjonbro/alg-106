let arr =  ["odina","zilola"]
arr.push("laylo")
console.log(arr);

arr.pop()
console.log(arr);




let array = []

let array2 = array

console.log(array == array2);



let newarr = [
  {
    name: "Laylo",
    age: 18,
    height: 150,
    weight: 45,
    fashion: "korean",
    cosmetics: [
      {
        lipstick: ["gucci", "faberlic", "dior"],
        tush: ["gucci", "faberlic", "dior"],
      },
    ],
    bags: ["louis vuiton", "gucci", "hermes", "miu miu", "adidas", "channel"],
  },
  {
    name: "Dilnoza",
    age: 20,
    height: 160,
    weight: 50,
    fashion: "casual",
    cosmetics: [
      {
        lipstick: ["mac", "nars", "faberlic"],
        tush: ["lancome", "maybelline", "dior"],
      },
    ],
    bags: ["gucci", "prada", "michael kors"],
  },
  {
    name: "Zuhra",
    age: 22,
    height: 165,
    weight: 55,
    fashion: "european",
    cosmetics: [
      {
        lipstick: ["estee lauder", "gucci"],
        tush: ["dior", "faberlic"],
      },
    ],
    bags: ["hermes", "dior", "louis vuiton"],
  },
  {
    name: "Malika",
    age: 19,
    height: 155,
    weight: 48,
    fashion: "street",
    cosmetics: [
      {
        lipstick: ["fenty", "gucci"],
        tush: ["maybelline", "faberlic"],
      },
    ],
    bags: ["adidas", "nike", "puma"],
  },
  {
    name: "Shahlo",
    age: 23,
    height: 170,
    weight: 58,
    fashion: "classic",
    cosmetics: [
      {
        lipstick: ["dior", "mac", "gucci"],
        tush: ["chanel", "faberlic"],
      },
    ],
    bags: ["miu miu", "chanel", "prada"],
  },
  {
    name: "Nigora",
    age: 21,
    height: 162,
    weight: 52,
    fashion: "modern",
    cosmetics: [
      {
        lipstick: ["kylie", "gucci"],
        tush: ["lancome", "dior"],
      },
    ],
    bags: ["gucci", "louis vuiton", "adidas"],
  },
  {
    name: "Sarvinoz",
    age: 18,
    height: 158,
    weight: 47,
    fashion: "korean",
    cosmetics: [
      {
        lipstick: ["etude", "innisfree", "gucci"],
        tush: ["dior", "faberlic"],
      },
    ],
    bags: ["hermes", "gucci", "miu miu"],
  },
  {
    name: "Madina",
    age: 24,
    height: 168,
    weight: 60,
    fashion: "business",
    cosmetics: [
      {
        lipstick: ["mac", "lancome"],
        tush: ["faberlic", "gucci"],
      },
    ],
    bags: ["prada", "chanel", "hermes"],
  },
  {
    name: "Gulbahor",
    age: 20,
    height: 163,
    weight: 53,
    fashion: "sport",
    cosmetics: [
      {
        lipstick: ["maybelline", "gucci"],
        tush: ["dior", "faberlic"],
      },
    ],
    bags: ["nike", "adidas", "gucci"],
  },
  {
    name: "Rayhona",
    age: 19,
    height: 157,
    weight: 49,
    fashion: "casual",
    cosmetics: [
      {
        lipstick: ["dior", "gucci"],
        tush: ["faberlic", "lancome"],
      },
    ],
    bags: ["miu miu", "gucci", "prada"],
  },
];

let girls = document.querySelector(".girls")
newarr.forEach((item, index)=>{
 let p = document.createElement("p")
 p.innerHTML=item.name
 console.log(p);
 girls.appendChild(p)
})