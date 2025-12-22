import { Drink } from './Drink.js';

export class Tea extends Drink {

  constructor(size, price, withLemon) {
    super('Чай', size, price);
    this.withLemon = withLemon;
  }

  serve() {
    this.setTemperature(75);
    console.log(`Чай c ${this.withLemon}`);
    super.serve();
  }
}

