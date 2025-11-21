import { comments } from './comments.js'

//2) Массив строк с фильтрацией.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number >= 5)


//3) Массив сущностей, с проверкой сушности.

const tools = [
  "Ударный гайкаверт",
  "Шуруповерт",
  "УШМ",
  "Дрель",
  "Молоток",
  "Гаячный ключ",
  "Отвертка фигурная",
  "Трещетка",
  "Плоскогубцы",
  "Сверло по металлу"
];

const checkTool = (tools, tool) => tools.includes(tool)

checkTool(tools, "Отвертка фигурная");


//4) Функция принимает два массива и переверачивает. 

const reverseArray = arr => arr.reverse()

reverseArray(numbers)
reverseArray(tools)

//5) Создан файл комментариев, импортирован в начале файла.

//6) Создана const export

//7) Фильтрует массив по email (".com") и собирает тексты комментариев в новый массив.

const filteredComments = comments.filter(comment => comment.email.includes(".com"))
const commentsText = filteredComments.map(comment => comment.body)


//8) Переберает массив, проверяет значение postId, создает копию массива сновым значением postId.

const updatedCommentsPostId = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}))


//9) Переберает массив comments по его id и name, и возврашает новый массив только из id и name. 

const commentsIdNameList = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}))


//10) Переберает массив, проверяет длинну текста по условию, и создает новый массива свойством isInvalid: boolean значением.

const validatedComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}))


//11) Перебор массива comment, при каждом получении значения email, добовляет в новый массив emails.
//    При каждом добавлениии в emails он итерируется создовая новую копию, и содержит уже в себе придедушие значения.

const emailsList = comments.reduce((emails, comment) => [...emails, comment.email],[])

const emailsArray = comments.map(comment => comment.email)


//12) Строчные методы: 
// toString преобразует все к одной строке.
// join преобразует все к одной строке с добовлением пробелов символов между слов строки.

const emailsListString = emailsList.toString()
const emailsListJoin = emailsList.join(" ")