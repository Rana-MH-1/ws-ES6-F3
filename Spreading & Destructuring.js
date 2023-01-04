/*   *****************Spreading Operator ************ */
const ages=[1,56,2,8,99]



//ES6
const newArray = [...ages]
// OPERATOR ==> copy of ages
// get all the el/keys of array/obj and made a copy
//add an el
//ES5
//ages.push(7)
//ES6
const newA = [...ages, 7,8]
console.log(newA)

//obj
const Person ={
    name:'Ameni',
    ages:25,
    Adresse:'Tunis'
    
}
//copy of PErson
const copiedPerson = {...Person}
console.log(copiedPerson)

//add a key in Person:
//ES5
//Person.gender = 'female'
//Person['gender'] = 'female'

//ES6
const newPerson = {...Person, gender:'female'}
//console.log(newPerson)
//modify an value of a key
//ES5
//Person.Adresse = 'Sidi Bouzid'
//ES6
const modified = {...Person, Adresse :'Sidi Bouzid'}
console.log(modified)

/* ****************** Destructuring ************************ */

//concat
//ES5
//console.log('Hi My name is '+Person.name+' and I am '+Person.age+' I am from '+ Person.Adresse)
//ES6 
// !!!!!!!!!Template Literals  ******************************** ALTGR7 ***
// I can write varible into string
// multilines
//console.log(`Hi My name is ${Person.name} and I am from ${Person.age} and I am from ${Person.Adresse}`)

//Destructuring
const {name,age, Cordd} = Person
console.log(`Hi My name is ${name} and I am from ${age} and I am from ${Cordd.city}`)

// Arr
const arr = [1,8,22,96];
const [el1,el2,...rest] = arr
console.log(el1,el2,...rest)
//output : 1 8 22,96

//==> Destructuring : An Operator ==> access the el/key of array/obj and put them in a variable==> Simplification
