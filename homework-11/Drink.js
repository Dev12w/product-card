export class Drink {

  #temperature

  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = 0;
  }

  getInfo() {
    return `
      Напиток: ${this.name}
      Размер: ${this.size}
      Цена: ${this.price}\u20BD
      Температура: ${this.#temperature}\u2103
    `;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    this.#temperature = value;
  }

  #prepare() {
    console.log(`Напиток ${this.name} готов`);
  }

  serve() {
    this.#prepare();
    console.log(`Напиток ${this.name} подан`);
  }
}