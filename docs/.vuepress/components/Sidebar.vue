<template>
  <HopeSidebar>
    <!-- Introduce comment component using bottom slot -->
    <template #top>
      <Docsearch class="docsearch-test"/>
    </template>
  </HopeSidebar>
</template>
<script setup lang="ts">
import HopeSidebar from "vuepress-theme-hope/modules/sidebar/components/Sidebar.js";
</script>
