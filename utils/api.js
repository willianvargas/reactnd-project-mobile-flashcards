import { AsyncStorage } from 'react-native'


export const DECKS_KEY = 'flashcards:decks'
export const NOTIFICATION_CHANNEL_KEY = 'flashcards:notification_channel'
export const NOTIFICATION_KEY = 'flashcards:notification'


export const fetchInitialData = () => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => JSON.parse(data))
}

export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [deck.id]: deck
  }))
}

export const fetchLocalNotification = () => {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
}

export const saveLocalNotification = () => {
  return AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
}

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
}
