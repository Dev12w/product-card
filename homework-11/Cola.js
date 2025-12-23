import { Drink } from './Drink.js';

export class Cola extends Drink {

  constructor(size, price, ice) {
    super('Cola', size, price);
    this.ice = ice;
  }

  serve() {
    this.setTemperature(0);
    console.log(`Cola c ${this.ice}`);
    super.serve();
  }
}