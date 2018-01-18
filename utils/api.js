import { AsyncStorage }  from 'react-native';
const FLASHCARDS_STORAGE_KEY = 'flashcards:decks'

const initialData = {
  Geography: {
    title: "Geography",

    questions: [
      {
        questions: "Is south africa  a country?",
        answer: "No , It is  a region",
        correctAnswer: "false"
      },
      {
        questions: "Is india  a country?",
        answer: "Yes, It is  ",
        correctAnswer: "false"
      }
    ]
  },

  JavaScript: {
    title: "JavaScript",

    questions: [
      {
        questions: "What is a closure? ",
        answer:
          "combination of a funciton and the lexical environment within which function was declared ",
        correctAnswer: "true"
      },
      {
        questions: "What is a variable",
        answer: "something that stors information  ",
        correctAnswer: "true"
      }
    ]
  }
};


export const getData = () =>{
    return initialData
} 

export function getDecks(deck){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results=> {
    if(results === null){
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY,JSON.stringify(initialData))
      return initialData;
    } else {
      return JSON.parse(results)
    }
  })
}

export function saveDeckTitle(title){
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY,JSON.stringify({
   [title]:{
     title: title,
     questions:[]
   } 
  }))
   
}