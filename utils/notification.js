import { Permissions, Notifications } from 'expo'

import {
  fetchLocalNotification,
  saveLocalNotification,
  clearLocalNotification as apiClearLocalNotification
} from './api'


const createNotification = () => ({
  title: `You didn't studied today!`,
  body: `Hello, don't forget to study your flashcards today`,
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
})

const getTomorrowDate = () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  date.setHours(20)
  return date
}

export const setLocalNotification = () => {
  fetchLocalNotification()
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              Notifications.scheduleLocalNotificationAsync(
                createNotification(), {
                  time: getTomorrowDate(),
                  repeat: 'day',
                }
              )
              saveLocalNotification()
            }
          })
      }
    })
}

export const clearLocalNotification = () => {
  return apiClearLocalNotification()
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
