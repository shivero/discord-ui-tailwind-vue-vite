<script setup lang="ts">
import { ref } from "vue";

const imagesList = ref([
  { url: "https://picsum.photos/64/64", active: true },
  { url: "https://picsum.photos/64/64", active: false },
  { url: "https://picsum.photos/64/64", active: false },
  { url: "https://picsum.photos/64/64", active: false },
]);

const setActiveImage = (index: number) => {
  imagesList.value.forEach((image, idx) => {
    image.active = idx === index;
  });
};

const activeIndicatorClass =
  "before:content-[' '] before:rounded-lg before:w-2 before:-translate-x-1 before:-translate-y-1/2 before:top-1/2 before:block before:absolute before:h-[80%] before:m-auto before:bg-white overflow-hidden";
const hoverIndicatorClass = `before:opacity-0 hover:before:opacity-100 before:content-[' '] before:rounded-lg before:w-2 before:-translate-x-1 before:-translate-y-1/2 
  before:top-1/2 before:-translate-y-1/2 before:top-1/2 before:block before:absolute before:h-[40%] before:m-auto before:bg-white overflow-hidden`;
</script>

<template>
  <div class="flex w-20 bg-discord-dark-3 h-full overflow-y-auto">
    <div class="flex flex-col items-center gap-4 pt-4">
      <div
        v-for="(image, index) in imagesList"
        :class="[
          image.active ? activeIndicatorClass : '',
          image.active ? '' : hoverIndicatorClass,
        ]"
        class="before:transition-property-transform before:transition-property-opacity relative before:duration-300"
        @click="setActiveImage(index)">
        <div class="px-3">
          <img
            class="duration-50 h-[56px] w-[56px] rounded-2xl outline-lime-200 duration-300 hover:rounded-3xl"
            :class="image.active ? '' : 'rounded-5xl'"
            :src="image.url"
            alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
