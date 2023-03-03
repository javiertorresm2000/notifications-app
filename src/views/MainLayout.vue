<template >
  <div class="wrapper" id="wrapper">
    <Sidebar></Sidebar>
    <div class="layout">
      <Topbar></Topbar>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';
</script>