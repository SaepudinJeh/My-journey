<script setup>
  import chapterNavigation from './components/ChapterNavigation.vue'
</script>

<template>
  <main class="h-screen" style="background-image: url(bg/bg3.jpg)">
    <chapter-navigation />
    <router-view></router-view>
  </main>
</template>