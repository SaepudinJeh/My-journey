<script setup>
</script>

<template>
<div class="h-screen relative font-comfortaa font-extrabold">
  <kinesis-container :duration=4000>
    <kinesis-element :strength="10" axis="x">
      <section class="w-full h-full overflow-hidden bg-no-repeat bg-center" style="background-image: url(bg/bg6.png)">
        <div class="w-full pt-24">
          <div class="flex flex-col justify-center">
            <div class="mx-auto relative">
              <kinesis-element :strength="20" type="depth_inv" :originY=100 axis="x">
                <img src="caracter/22.jpg" alt="1" class="panel w-96 h-96 object-cover bg-no-repeat bg-center bg-contain rounded-full shadow border-2 border-gray-600">
              </kinesis-element>
            </div>
          </div>
        </div>
      </section>
    </kinesis-element>
  </kinesis-container>

  <div data-aos="fade-down-right" class="chat chat-left absolute left-96 top-16">
    <img src="chat/chat2.svg" alt="1" class="w-52">
  </div>

  <div data-aos="zoom-in-left" class="chat chat-right absolute right-96 bottom-24">
    <img src="chat/chat3.svg" alt="1" class="w-52">
  </div>
</div>
</template>