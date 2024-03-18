import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'en',
  }),
  actions: {
    setLocale(newLocale: string) {
      this.locale = newLocale
      const cookie = useCookie('curentLocale')
      cookie.value = newLocale
    },
    initLocale() {
      const cookie = useCookie('curentLocale')
      if (cookie.value) {
        this.locale = cookie.value
      }
    },
  },
})
