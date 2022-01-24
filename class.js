class User{
    constructor(email, name){
        this.email = email;
        this.name = name 

    }
}


var userOne = new User('ryu@ninja.com', 'ryu');
var userTwo = new User('ken@ninjas.com','ken');

// the 'new' keyword
// -creates a new empty object{}
// -sets the value of 'this' to be the new empty object
// -call the contructor method  


console.log(userOne, userTwo);