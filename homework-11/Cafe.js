import { Cola } from './Cola.js';
import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `
    Кафе ${this.name} 
    Наша локация ${this.location}`;
  }

  orderDrink(drink) {
    drink.serve();
  }
}

const cafe = new Cafe('BLACK CUP', 'Эфиопия');
console.log(cafe.getInfo())
const coffee = new Coffee('Большой', 300, 'Sidamo', 'коровьем')
const tea = new Tea('Маленький', 100, 'лимоном')
const cola = new Cola('Маленький', 150, 'льдом')

cafe.orderDrink(coffee)
cafe.orderDrink(tea)
cafe.orderDrink(cola)
console.log(coffee.getInfo())
console.log(tea.getInfo())
console.log(cola.getInfo())