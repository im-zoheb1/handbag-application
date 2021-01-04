<template>
  <div class="admin-section">
    <div
      class="admin__hamburger"
      style="margin-bottom: 2.5rem;"
      @click="$emit('showSidebar', true)"
    >
      <div class="bar1" style="background-color: #011627;"></div>
      <div class="bar2" style="background-color: #011627;"></div>
      <div class="bar3" style="background-color: #011627;"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>