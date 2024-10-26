//primitive and non primitive datatype
//these datatypes divided as per how it stores in database

// 7 datatypes are there
/* 1. String 
2. Number
3.Boolean 
4.Null
5. Undefined
6.Symbol - to make unique items
7. Bigint */

// Reference type or non primitive datatypes

// 1. Array
// 2. Object
// 3. Functions

// javascript dynamically type

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outSideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol( '123')

//console.log(id === anotherId)

const bigNumber = 33224455654444152554125n

const heros = ['shaktiman','jackson','dora']

let myObj={
    name:'jackson',
    age:32
}

function myFunc () {
    console.log("helloworld")
}

//console.log (typeof(myFunc))

//Primitive Datatypes
// Number => Number
// String => String
// Boolean => Boolean
// null => object 
// undefined => undefined
// Symbol => Symbol
// BigInt =>BigInt

//Non primitive datatypes
// function => function
// Array => object
// Object => object

//******************************************* */

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = 'jacksonPoulose'

let anothername = myYoutubeName

anothername = 'jackandjohns'

// console.log(anothername)
// console.log(myYoutubeName)

const userOne = {
    email:'jack@example.com',
    upi:'user@ybl'
}


const userTwo = userOne;
//console.log(userTwo.email)

userTwo.email='jax@gmail.com'

// console.log(userOne.email)
// console.log(userTwo.email)

