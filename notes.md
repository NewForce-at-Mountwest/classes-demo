```js
class Person {
    constructor(name){
        this.name = name;
    }
 
    hello() {
      console.log('Hello, I am ' + this.name + '.') 
    }
  }

 

const flavio = new Person('Flavio')
flavio.hello()

class Programmer extends Person {
    hello() {
      return super.hello() + ' I am a programmer.'
    }
  }
  
  const flavio = new Programmer('Flavio')
  flavio.hello()

```


```js
class Patron {
    constructor(name){
        this.name = name
    }
    checkedOutBooks = []
    checkOutBook(book){
        this.checkedOutBooks.push(book)
        console.log("these are your checked out books", this.checkedOutBooks)
    }
}

class Book {
    constructor(title, ISBN){
        this.title = title
        this.ISBN = ISBN
    }
    location="East Huntington"
}

const flavio = new Patron("Flavio");
const eastOfEden = new Book("East of Eden", "567898765456787654345678987654345678")

flavio.checkOutBook(eastOfEden)

```