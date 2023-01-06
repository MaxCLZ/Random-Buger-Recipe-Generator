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

//Returns or not an extra topping
const returnExtraTopping = () => {
    const giveExtraTopping = Math.floor(Math.random()*2);
    return giveExtraTopping ? returnRandTopping() : '';
}

// Create a random burger object
const burgerMaker = () => {

    const bun = returnRandBun();
    const topping = returnRandTopping();
    const cheese = returnRandCheese();
    const extraTopping = returnExtraTopping();
    const sauce= returnRandSauce();
    const meat= returnRandMeat()
    let burger={
        _bun: bun,
        _topping: topping,
        _extraTopping: extraTopping,
        _meat: meat,
        _cheese: cheese,
        _sauce: sauce,
        get bun() {
            return `Bun : ${this._bun}\n`;
        },
        get topping() {
            return this._extraTopping ? `Toppings : ${this._topping}\nOh you look hungry ! Here an extra one :  ${this._extraTopping}\n` :  `Topping : ${this._topping}\n`;
        },
        get cheese() {
            return `Cheese : ${this._cheese}\n`;
        },
        get sauce() {
            return `Bun : ${this._sauce}\n`;
        },
        get extraTopping() {
            return this._extraTopping ? this._extraTopping : `No extra toppings for you\n`;
        },
        get meat() {
            return `Meat : ${this._meat}\n`;
        },
        get burgerIngredients() {
            return `Here is your random ingredients to make a delicious burger!\n` + this.bun + this.topping + this.sauce + this.meat + this.cheese
        }

    }
    return burger;

}




/* Test*/
// console.log(returnRandBun())
// console.log(returnRandSauce())
// console.log(returnRandTopping())
// console.log(returnRandMeat())
// console.log(returnRandCheese())
// console.log(returnExtraTopping())
// const burger = burgerMaker()
// console.log(burger.bun);
// console.log(burger.chesse);
// console.log(burger.meat);
// console.log(burger.sauce);
// console.log(burger.topping);
// console.log(burger.extraTopping);
// console.log(burger.burgerIngredients);



/* Script (node main.js in terminal to run) */
const burger = burgerMaker()
console.log(burger.burgerIngredients);
