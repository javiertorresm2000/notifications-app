import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const selectedMenu = ref('')

  function selectMenu(menu) {
    selectedMenu.value = menu
  }

  return { selectedMenu, selectMenu }
})
