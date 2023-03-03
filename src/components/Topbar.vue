<template>
  <div class="topbar">
    <button class="btn-toggle" @click="toggleSidebar">
      <i class="pi pi-bars"></i>
    </button>
    <div class="d-flex align-items-center">
      <span>Admin User</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const toggleSidebar = () => {
      document.querySelector('#wrapper')?.classList.toggle('sidebar-hide')
    }

    return {
      toggleSidebar,
    }
  }
}

</script>