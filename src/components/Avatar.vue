<script setup lang="ts">
const props = defineProps({ size: Number });
let hSize = `h-${props.size}`;
let wSize = `w-${props.size}`;
let sizeClass = `${hSize} ${wSize}`;
switch (props.size) {
  case 4:
    sizeClass = "h-4 w-4";
    break;
  case 11:
    sizeClass = "h-11 w-11";
    break;
  default:
    break;
}
</script>

<template>
  <div
    :class="sizeClass"
    class="ml-1 shrink-0 rounded-full border-2 border-transparent bg-gray-600">
    <!-- <img src="" /> -->
  </div>
</template>
