<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const tooltip = cva(["span", "mt-8 inline-flex items-center justify-center"], {
  variants: {
    intent: {
      primary: "hover:bg-discord-blue-hover rounded bg-discord-blue text-white",
      secondary: "secondary",
    },
    size: {
      small: "h-4 px-2 text-sm",
      medium: "h-9 px-4 text-sm",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "primaryMedium" }],
});

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
</script>

<template>
  <span class="group relative">
    <slot />
    <span
      class="shadow-lg shadow-zinc-800 invisible absolute top-8 max-w-xs w-max left-1/2 -translate-x-1/2 rounded-lg bg-zinc-900 px-4 py-2 text-sm leading-tight opacity-0 transition-opacity group-hover:visible group-hover:flex group-hover:opacity-100 group-focus:hidden">
      {{ tooltipText }}
    </span>
  </span>
</template>
