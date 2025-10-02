// let arr = ["A","B","c","D"]
// let resultUpper = []
// let resultLower = []


// arr.sort((a, b)=>a.toLowerCase()==a?resultLower.push(a):resultUpper.push(a))

// console.log(resultLower);
// console.log(resultUpper);

// let arr = [1,5,3,63,2,5,7,8,3,4,67]

// console.log(arr.sort((a,b)=>{return b-a}));

let arr = [
  { name: "Laylo", fashion: "korean", age: 18, weight: 45, height: 165 },
  { name: "Muhlisa", fashion: "european", age: 20, weight: 50, height: 170 },
  { name: "Dilnoza", fashion: "casual", age: 19, weight: 47, height: 162 },
  { name: "Gulbahor", fashion: "sport", age: 21, weight: 52, height: 168 },
  { name: "Zilola", fashion: "korean", age: 22, weight: 55, height: 172 },
  { name: "Malika", fashion: "elegant", age: 23, weight: 54, height: 169 },
  { name: "Oydin", fashion: "casual", age: 18, weight: 46, height: 160 },
  { name: "Sabina", fashion: "street", age: 19, weight: 48, height: 166 },
  { name: "Nigora", fashion: "classic", age: 20, weight: 53, height: 171 },
  { name: "Shahnoza", fashion: "korean", age: 21, weight: 49, height: 167 }
]


console.log(arr.filter((item, index)=>{
 return item.height<=160
})); 

let son = [1.45,4.34,3,6]          
