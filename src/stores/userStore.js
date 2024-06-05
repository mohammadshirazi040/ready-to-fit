import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [
      {
        welcomeMsg: '',
        firstname: '',
        lastname: '',
        email: '',
        selectedoptions: ''
      }
    ]
  }),
  actions: {
    updateWelcomeMsg(newMsg) {
      this.users[0].welcomeMsg = newMsg
    },
    updateFirstName(data) {
      this.users[0].firstname = data
    },
    updateLastName(data) {
      this.users[0].lastname = data
    },
    updateEmail(data) {
      this.users[0].email = data
    },
    selectedOptions(data) {
      this.users[0].selectedoptions = data
    }
  }
})
