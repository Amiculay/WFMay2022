function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var chicago = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var newYork = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var myFav = pizzaOven("hand tossed", "marinara", "mozzarella", ["pineapple", "sausage", "spinnach", "banana peppers"]);
var random = pizzaOven("deep dish", "bbq", "feta", ["pepperoni", "chicken cutlet", "ranch"]);

console.log(chicago, newYork, myFav, random);