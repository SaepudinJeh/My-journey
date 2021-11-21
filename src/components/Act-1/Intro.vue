<template>
    <kinesis-container :duration=4000 :perspective=4000>
    <kinesis-element :strength="10" axis="x">
      <section class="w-full overflow-hidden relative font-comfortaa font-extrabold" style="background-image: url(bg/bg6.png)">
        <div class="w-full">
          <div class="flex flex-col justify-center mt-12">
            <div class="mx-auto relative">
              <kinesis-element :strength="20" type="depth_inv" :originY=100 axis="x">
                <div class="w-96 h-96 bg-fill bg-no-repeat bg-center bg-contain" style="background-image: url(caracter/quotes1.png)"></div>
              </kinesis-element>
              <kinesis-element axis="y" type="depth_inv" :originY=100 class="absolute top-5 w-44 -left-12">
                <img src="chat/chat-1.svg" alt="">
                <p class="absolute top-4 left-4 antialiased">hayyy</p>
              </kinesis-element>
            </div>
          </div>
        </div>
      </section>
    </kinesis-element>
  </kinesis-container>
</template>