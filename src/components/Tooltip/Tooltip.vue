<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { ref } from "vue";
let isClicked = ref(false);
const tooltip = cva(
  [
    "absolute left-1/2 top-8 w-max max-w-xs -translate-x-1/2",
    "invisible rounded-lg opacity-0 transition-opacity group-hover:visible group-hover:flex group-hover:opacity-100 group-focus:hidden select-none",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-zinc-900 shadow-lg shadow-zinc-800",
          isClicked.value ? "text-red-500" : "",
        ],
        secondary: "",
      },
      size: {
        small: "",
        medium: "px-4 py-2 text-sm leading-tight",
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium", class: "primaryMedium" }],
  },
);

type SpanProps = VariantProps<typeof tooltip>;

withDefaults(
  defineProps<{
    intent: SpanProps["intent"];
    size: SpanProps["size"];
    tooltipText: string;
  }>(),
  {
    intent: "primary",
    size: "medium",
    tooltipText: "Tooltip",
  },
);
const onSlotClick = () => {
  isClicked.value = !isClicked.value;
};
</script>

<template>
  <span class="group relative">
    <span @click="onSlotClick" @mouseleave="isClicked = false">
      <slot />
    </span>
    <span :class="[tooltip({ intent, size }), isClicked ? 'group-hover:invisible' : '']">
      {{ tooltipText }}
    </span>
  </span>
</template>
