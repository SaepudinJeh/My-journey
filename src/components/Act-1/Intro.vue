<script setup>
</script>

<template>
<div class="h-screen relative font-comfortaa font-extrabold flex items-center justify-center">
  <kinesis-container :duration=4000>
    <kinesis-element :strength="10" axis="x">
      <section class="w-full h-full overflow-hidden bg-no-repeat bg-center">
        <div class="flex flex-col justify-center">
          <div class="mx-auto relative w-full">
            <kinesis-element :strength="20" type="depth_inv" :originY=100 axis="x">
              <img src="/caracter/intro_1.jpg" alt="1" class="w-48 h-48 md:w-96 md:h-96 object-cover bg-no-repeat bg-center bg-contain rounded-full shadow border-2 border-gray-600">
            </kinesis-element>
          </div>
        </div>
      </section>
    </kinesis-element>
  </kinesis-container>

  <div data-aos="fade-down-right" class="absolute left-24 top-40 md:left-96 md:top-24">
    <img src="/chat/chat2.svg" alt="1" class="w-36 md:w-52">
  </div>

  <div data-aos="zoom-in-left" class="absolute right-24 bottom-40 md:right-96 md:bottom-24">
    <img src="/chat/chat3.svg" alt="1" class="w-32 md:w-52">
  </div>
</div>
</template>