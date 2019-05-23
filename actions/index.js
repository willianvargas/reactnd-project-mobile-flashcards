import { fetchInitialData } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_DECK_CARD = 'ADD_DECK_CARD'


export const handleInitialData = () => {
  console.log(1)
  return (dispatch) => {
    console.log(2)
    return fetchInitialData()
      .then(data => dispatch(receiveDecks(data)))
  }
}

export const receiveDecks = (payload) => {
  return {
    type: RECEIVE_DECKS,
    payload
  }
}

export const addDeck = (payload) => {
  return {
    type: ADD_DECK,
    payload
  }
}

export const addDeckCard = (id, card) => {
  return {
    type: ADD_DECK_CARD,
    payload: {
      id,
      card
    }
  }
}
