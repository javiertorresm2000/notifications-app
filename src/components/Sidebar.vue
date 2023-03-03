<template>
  <div id="backdrop" @click="toggleSidebar"></div>
  <aside class="sidebar" id="sidebar">
    <nav class="navbar-nav p-2">
      <div class="d-flex align-items-center justify-content-center w-100 pt-4 py-3 white">
        <h4>Notification App</h4>
      </div>
      <Divider></Divider>
      <div class="menu-list">
        <div class="nav-item">
          <div class="menu-item" :class="{selected: selectedMenu === ''}"  @click="go('')">
            <i class="pi pi-home"></i>
            <label for="">Home</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item" :class="{selected: selectedMenu === 'categories'}" @click="go('categories')">
            <i class="pi pi-list"></i>
            <label for="">Categories</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item" :class="{selected: selectedMenu === 'channels'}" @click="go('channels')">
            <i class="pi pi-send"></i>
            <label for="">Channels</label>
          </div>
        </div>
        <div class="nav-item">
          <div class="menu-item" :class="{selected: selectedMenu === 'users'}" @click="go('users')">
            <i class="pi pi-users"></i>
            <label for="">Users</label>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>
<script>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Divider from 'primevue/divider'
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { useMenuStore } from '../stores/menu';

export default {
  components: {
    Divider
  },
  setup() {
    const router = useRouter()
    const isMobile = ref(false)
    const menuStore = useMenuStore()
    const selectedMenu = ref(menuStore.selectedMenu)

    const go = (link) => {
      menuStore.selectMenu(link)
      router.push('/' + link)

      if(isMobile.value) toggleSidebar()
    }
    const toggleSidebar = () => {
      document.querySelector('#wrapper')?.classList.toggle('sidebar-hide')
    }
  
    useMatchMedia(990, (isUnderSize) => isMobile.value = isUnderSize)

    watch(menuStore, () => {
      selectedMenu.value = menuStore.selectedMenu
    })

    return {
      go,
      toggleSidebar,
      selectedMenu,
    }
  }
}
</script>