<script setup>
  import { reactive } from '@vue/reactivity';

  const navigations = reactive([
    { nav: 1, link: '#' },
    { nav: 2, link: '#' },
    { nav: 3, link: '#' },
    { nav: 4, link: '#' },
  ])
</script>

<template>
  <section class="z-40 fixed w-16 py-12 rounded-tl-3xl rounded-bl-3xl top-1/4 right-0 object-cover filter drop-shadow-lg" style="background-image: url(bg/bg2.jpg)">
    <div class="flex items-center my-auto">
      <div class="flex flex-col gap-y-10 m-auto">
        <a v-for="navigation in navigations" :key="navigation" :href="navigation.link" class="">
          <button class="rounded-full border-2 w-7 h-7 border-black font-bold hover:text-white hover:border-white" name="button chapter 1">
            {{ navigation.nav }}
          </button>
        </a>
      </div>
    </div>
    </section>
</template>