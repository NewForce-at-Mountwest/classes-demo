// // Build an object representing a generic person
// // It should have a name property and a method to say hello
// const person = {
//     name: "Jane",
//     sayHello(friendToGreet) {
//         console.log(`Hello, ${friendToGreet}, my name is ${this.name}`)
//     }
// }

// person.sayHello("Oscar");

// const Sally = Object.create(person);
// Sally.name = "Sally";

// class Human {
//     constructor(nameParam){
//         this.name = nameParam
//     }
//     sayHello(friendToGreet) {
//         console.log(`Hello, ${friendToGreet}, my name is ${this.name}`)
//     }
// }

// class Programmer extends Human {
//     sayHello(){
//         console.log(`Hello, my name is ${this.name} and I'm mad all the time`)
//     }
// }

// const michelle = new Human("Michelle");
// console.log(michelle);
// michelle.sayHello("David");

// const megan = new Programmer("Megan");
// megan.sayHello();










// LIGHTNING EXERCISE
// PATRONS
// 1. Create an object that represents a generic patron at a library
// 2. Your object should contain the following properties:
// - A name property (string)
// - A checkedOutBooks property (empty array)
// - A checkOutBook method, which should accept a bookObject as a parameter and push it into the patron's checkedOutBooks array
// const patron = {
//     name: "",
//     checkedOutBooks: [],
//     checkOutBook(bookObj){
//         this.checkedOutBooks.push(bookObj)
//     }
// }

// 3. Use Object.create() to create a few more specific patron objects who inherit properties from the object you created above. Give them their own unique name properties.

// const sable = Object.create(patron);
// sable.name = "Sable";
// const nikki = Object.create(patron);
// nikki.name = "Nikki";
// const matt = Object.create(patron);
// matt.name = "Matt";
// console.log(sable, nikki, matt);



// BOOKS
// 1. Create an object that represents a generic book in a library
// 2. Your object should contain a name property, an ISBN property, and a libraryLocation property (just give it the name of a made up library)
// const book = {
//     libraryLocation: "East Huntington"
// }

// 3. Use Object.create() to build a few more book objects that inherit properties from the object you created above. Give them their own unique title and ISBN properties.

// const eastOfEden = Object.create(book);
// eastOfEden.title = "East of Eden";
// eastOfEden.ISBN = "1o39u42143283894721983478921374";

// 4. Once you have a few books and a few patrons, try executing the checkOutBook method and passing in a book object.

// console.log(eastOfEden);
// matt.checkOutBook(eastOfEden);
// console.log(matt.checkedOutBooks);



class Patron {
    constructor(nameParam){
        this.name = nameParam
    }
    checkedOutBooks= []
    checkOutBook(bookParam){
        this.checkedOutBooks.push(bookParam);
    }
}

class book {
    constructor(titleParam, ISBNParam) {
        this.title = titleParam
        this.ISBN = ISBNParam
    }
    location = "East Huntington"
}

const Tommy = new Patron("Tommy");
const EastOfEden = new book("East of Eden", "12u90283092183091283018")
console.log(EastOfEden);
console.log(Tommy);
Tommy.checkOutBook(EastOfEden);













// Use Object.create() to create another object representing a specific person (it should use our generic person object as a prototype)



// Give our person their own name

// Call sayHello() on our new person


// Do the same thing with JavaScript classes!




