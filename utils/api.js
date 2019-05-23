import { AsyncStorage } from 'react-native'


export const STORAGE_KEY = 'reactnd:flashcards'


export const fetchInitialData = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(data => JSON.parse(data))
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deck.id]: deck
  }))
}
