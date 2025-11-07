// 3)Массив с данными о пользователе.


const userProfile = {
  firstName: "Зейд",
  lastName: "Мухаммадов",
  email: "zeid@gmail.com",
  occupation: "Программист",
  position: "Фронтенд",
  age: 22,
  country: "ОАЭ",
  city: "Дубай",
  relationshipStatus: "Холост"
};


// 4) Объект с информацией о машине, добовляем к нему свойсва и значение его объект.


const car = {
  brand: "Bentley",
  model: "Continental",
  year: "2025",
  color: "Черный",
  transmission: "Автомат"
}

car.carOwner = { ...userProfile }

/*
5) Функция принимает аргументом объект car c пункта 4, 
   и проверяет если свойство и значение, если нет то добавляет.
*/

const addSpeedProperty = car => {
  if (!car.hasOwnProperty('maxSpeed')) {
    carObj.maxSpeed = 400
  }
}

addSpeedProperty(car)


/*
6) Функцию которая получает первым аргументом объект, 
   а вторым аргументом свойство объекта, выводит его значение.
*/

const showPropertyValue = (car, property) => {
  if (car.hasOwnProperty(property)) {
    console.log(carObj[property])
  }
}

showPropertyValue(car, "brand")


// 7. Массив с товаром

const productCards = [
  "Ноутбук",
  "Телефон",
  "Фотоаппарат",
  "Наушники",
  "Часы",
  "Планшет",
  "Клавиатура",
  "Мышка",
  "Карта памяти"
];



/*
8) Массив из объектов с данными о машинах, 
   с добавлением в конец массива еше один объект с машиной.
*/

const cars = [
  {
    brand: "Honda",
    model: "Civic",
    year: 2025,
    color: "Пурпурный",
    engine: "1.5"
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2025,
    color: "Красный",
    engine: "5.0 V8"
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2020,
    color: "Белый",
    engine: "2.0"
  }
];

cars.push({
  brand: "Tesla",
  model: "Model 3",
  year: 2021,
  color: "Синий",
  engine: "761 кВт"
});


/*
9) Массив с определенной категорией данных о машинах.
   Объединение двух массивов cars и jeepCars в один новый массив allCars.
*/

const jeepCars = [
  {
    brand: "Jeep",
    model: "Wrangler",
    year: 2022,
    color: "Кварц",
    engine: "3.6 V6"
  },
  {
    brand: "Jeep",
    model: "Grand Cherokee",
    year: 2018,
    color: "Черный",
    engine: "3.0 дизель"
  }
];


const allCars = [...cars, ...jeepCars];



/*
10) Функцию которая принимает массив cars, 
    с помощью метода перебора массива добавляем новое свойства с значением boolean.
*/

const addRareProperties = cars => {
  cars.forEach(car => {
    car.isRare = car.year <= 2023 ? true : false
  })
}

addRareProperties(cars);
