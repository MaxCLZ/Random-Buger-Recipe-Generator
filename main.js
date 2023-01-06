//Returns a random bun type
const returnRandBun = () => {
    const bunList= ['Plain','Sesame','Pretzel','Potato','Ciabatta','Brioche','Sliced Bread','English Muffin','Kaiser Roll'];
    return bunList[(Math.floor(Math.random()*bunList.length))]
}
//Returns a random sauce 
const returnRandSauce= () => {
    const sauceList= ['Mustard','Sriracha','BBQ Sauce','Honey Mustard','Mayo','Big Mac Sauce','Chili Sauce','Ketchup','Hot Chili','Ranch','Ranch','Pepper Sauce','Harrisa','Honey Sauce'];
    return sauceList[(Math.floor(Math.random()*sauceList.length))]
}
//Returns a random topping 
const returnRandTopping = () =>{
    const toppingList= ['Chiles','Lettuce','Fried Egg','Pineapple','Mushrooms','Coleslaw','Avocados','Bacon','Fried Onions','Hashbrowns','Spinach','Caramelized Onions','Onions','Red Onions'];
    return toppingList[(Math.floor(Math.random()*toppingList.length))]
}

//Returns a random "meat"
const returnRandMeat = () =>{
    const meatList= ['Beef','Smashed Beef','Fried Chicken','Chicken','Turkey','Salmon','Pulled Pork','Fried Fish','Veggie Patty'];
    return meatList[(Math.floor(Math.random()*meatList.length))]
}

//Returns a random cheese type
const returnRandCheese = () =>{
    const cheeseList= ['Goat','Blue Cheese','Cheddar','Feta','Swiss Cheese','Salmon','American Cheese','Brie','Pepper Jack','Provolone','Smoked Gouda','Gouda','Stilton'];
    return cheeseList[(Math.floor(Math.random()*cheeseList.length))]
}

/* Test*/
console.log(returnRandBun())
console.log(returnRandSauce())
console.log(returnRandTopping())
console.log(returnRandMeat())
console.log(returnRandCheese())






