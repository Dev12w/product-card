import { comments } from './comments.js'


const nambers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const filteredNumbers = nambers.filter( namber => namber >= 5 )


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

const checkTool = ( tools, tool ) => tools.includes( tool )

checkTool(tools, "Отвертка фигурная");


const reverseArrays = ( nambers, tools ) => 
 [ nambers, tools ].map( arr => arr.reverse())

reverseArrays( nambers, tools )


const filteredComments = comments.filter( comment => comment.email.includes(".com") )

const commentsText = filteredComments.map( comment => comment.body )  


const updatedCommentsPostId= comments.map(comment => ({
    ...comment, 
    postId: comment.id <= 5 ? 2 : 1 
}))


const commentsIdNameList = comments.map( comment => ({
    id: comment.id,
    name: comment.name
}))


const validatedComments = comments.map( comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}))


const emailsList = comments.reduce(( emails, comment ) => {
  return [...emails, comment.email]
}, [])

const emailsArray = comments.map( comment => comment.email)


const emailsListString = emailsList.toString()
const emailsListJoin = emailsList.join(" ")