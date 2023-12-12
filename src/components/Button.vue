<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(["button", "mt-8 inline-flex items-center justify-center"], {
  variants: {
    intent: {
      primary: "rounded bg-discord-blue hover:bg-discord-blue-hover text-white",
      secondary: "secondary",
    },
    size: {
      small: "px-2 text-sm h-4",
      medium: "px-4 text-sm h-9",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "primaryMedium" }],
});

type ButtonProps = VariantProps<typeof button>;

withDefaults(
  defineProps<{ intent: ButtonProps["intent"]; size: ButtonProps["size"] }>(),
  {
    intent: "primary",
    size: "medium",
  },
);
</script>

<template>
  <button type="button" :class="button({intent, size})">
    <slot />
  </button>
</template>
<style></style>
