import { fetchInitialData, saveDeck } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_DECK_CARD = 'ADD_DECK_CARD'


export const handleInitialData = () => {
  return (dispatch) => {
    return fetchInitialData()
      .then(data => dispatch(receiveDecks(data)))
  }
}

export const handleAddDeck = (payload) => {
  return (dispatch) => {
    dispatch(addDeck(payload))
    return saveDeck(payload)
  }
}

export const handleAddDeckCard = (id, payload) => {
  return (dispatch, getState) => {
    const { decks } = getState()
    const deck = decks[id]
    dispatch(addDeckCard(id, payload))
    return saveDeck({
      ...deck,
      cards: [
        ...(deck.cards || []), {
          ...payload
        }
      ]
    })
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
