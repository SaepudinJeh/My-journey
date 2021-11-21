<template>
  <section class="w-full relative antialiased">
    <div class="w-full">
      <img class="object-fill" src="bg/main.jpg" alt="">
    </div>

    <kinesis-container :duration=2000 :perspective=4000 class="absolute z-20 top-0 text-center w-screen h-screen">
      <kinesis-element>
        <h1 class="text-black font-comfortaa text-8xl mt-12">
          Hello World
        </h1>
      </kinesis-element>
    </kinesis-container>
  </section>
</template>