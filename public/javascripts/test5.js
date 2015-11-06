//create a simple, traditional object that has some properties
var marvelProto = {
    publisher : "Marvel Comics",
    founded : "1939",
    founder : "Martin Goodman",
    headquarters : "417 5th Avenue, New York, NY, U.S."
}

//create a new object that inherits properties from the simple object
//create() takes two arguments. the object that will serve
//as the new object's prototype and an optional set of 
//new properties to populate the new object 
var FantasticFour = Object.create(
    marvelProto,
    {
        title : {
            value : "Fantastic Four",

        },
        year : {
            value : "1961",

        }
    }
);
console.log(
    FantasticFour.title
    +" was first published by "+
    FantasticFour.publisher
    +" in "+
    FantasticFour.year
);