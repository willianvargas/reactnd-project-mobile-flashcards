import { RECEIVE_DECKS, ADD_DECK, ADD_DECK_CARD } from '../actions'


const INITIAL_STATE = {
  requested: false,
  decks: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        requested: true,
        decks: {
          ...action.payload
        }
      }
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.payload.id]: {
            cards: [],
            ...action.payload
          }
        }
      }
    case ADD_DECK_CARD: {
      const { payload: { id, card } } = action
      return {
        ...state,
        decks: {
          ...state.decks,
          [id]: {
            ...state.decks[id],
            cards: [
              ...(state.decks[id].cards || []), {
                ...card
              }
            ]
          }
        }
      }
    }
    default:
      return state
  }
}
