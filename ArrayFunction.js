const ages = [1,52,69,31,20]
//ES5
for(const i in ages){
   // console.log(ages[i])
}

//ES6
//forEach
const agess = ages.forEach(age=> age)
console.log(agess)
//output : Undefined
// ForEach does a traitement
// useless when we have combined methods

//map
console.log('newOne',ages.map(el=> el +1))
console.log('ages',ages)
//ouput :
newOne [ 2, 53, 70, 32, 21 ]
ages [ 1, 52, 69, 31, 20 ]
// map ==> return a new array  +
// traitement / instruction for each el

/*const PairedAges = ages.map((el,i)=>{
    if(i%2 ==0){
        return el
    }
})*/
//output : [ 1,undefined, 69, undefined, 20 ]

//Filter

const PairedAges = ages.filter((el,i)=> i%2 ==0)

console.log(PairedAges)
//output : [ 1, 69, 20 ]

// Reduce ==> Sum
//ES5
let sum = 0;
for(let i in ages){
    sum += ages[i]
}

//ES6
const Sum = ages.reduce((accum,val)=> accum + val)
console.log(Sum)

//Sort
const ages = [1,52,69,600,31,1000,20]

//const sorted = ages.sort()
/*const sorted = ages.sort(function(a,b){
    if(a>b){return 1}
    else {return -1}
}) */ 
//Ternary Condition
const sorted = ages.sort(function(a,b){
    return (a>b)? 1 : -1
}) 
console.log(sorted)

const sortedd = ages.sort((a,b)=> a-b)
console.log(sortedd) // tri ascendant
//output : [1, 20,  31, 52, 69, 600, 1000]
const sortedd = ages.sort((a,b)=> b-a)
console.log(sortedd) //tri descendant
//output : [1000, 600, 69,52,  31, 20,  1]

//some // if el satisfied the cond ==> true
const somed = ages.some(el=> el>20)
console.log('some',somed) //true
const ev = ages.every(el=> el>20)
console.log('every',ev) //false
//every ==> Each el has to satify the condition

const founded = ages.find(el=> el>20)
console.log(founded) // return the first el that satisfied the condition

//Combined Methods
const Sum = ages.map(el=> el*2)
.filter(el=> el>40)
.reduce((acc,val)=> acc + val)

console.log(Sum)




