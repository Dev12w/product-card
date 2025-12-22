import { Drink } from './Drink.js';

export class Coffee extends Drink {
  constructor(size, price, beanType, milkType) {
    super('Кофе', size, price);
    this.milkType = milkType;
    this.beanType = beanType;
  }

  serve() {
    this.setTemperature(70);
    console.log(`Кофе ${this.beanType}, на ${this.milkType} молоке`);
    super.serve();
  }
}