let marks ={
  Safdar : 96,
  Shakib : 74,
  Dev: 52,
  Tim :12
}
for ( let i = 0; i< Object.keys(marks).length; i++){
  console.log(Object.keys(marks)[i] + " : " + marks[Object.keys(marks)[i]])
}
// console.log(marks)
// console.log(Object.keys(marks)[0])
// console.log(marks[Object.keys(marks)[0]])
// console.log(Object.keys(marks)[1])
// console.log(marks[Object.keys(marks)[1]])
// console.log(Object.keys(marks)[2])
// console.log(marks[Object.keys(marks)[2]])
// console.log(Object.keys(marks)[3])
// console.log(marks[Object.keys(marks)[3]])
// console.log(Object.keys(marks)[4])
// console.log(marks[Object.keys(marks)[4]])
for (let key in marks){
  console.log(key + " : " + marks[key])

}
// console.log(marks)
// console.log(Object.keys(marks)[0])
// console.log(marks[Object.keys(marks)[0]])
// console.log(Object.keys(marks)[1])
// console.log(marks[Object.keys(marks)[1]])
// console.log(Object.keys(marks)[2])
// console.log(marks[Object.keys(marks)[2]])
// console
let cn=4
let i
while(i!=cn){
  const prompt=require("prompt-sync")({signit:true});
  i=prompt("Enter a number")
}
console.log("You have entered a correct number")
const mean = (a,b,c,d)=>{
  return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))