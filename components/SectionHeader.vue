<template>
  <div class="text-center bg-inherit">
    <div
      :class="[
        'uppercase tracking-widest rounded-full text-sm',
        `text-${color}`,
      ]"
    >
      {{ tag }}
    </div>

    <h2 class="text-primary mt-4">{{ title }}</h2>

    <p class="max-w-xl mx-auto font-light text-gray-400 mt-2 mb-6">
      {{ subTitle }}
    </p>
  </div>

  <slot />

  <div class="flex items-center justify-center">
    <div class="border-t border-gray-400 w-20"></div>
    <div class="flex mx-3">
      <div class="w-1 h-6 mx-1 rotate-45 bg-primary rounded-full"></div>
      <div class="w-1 h-6 mx-1 rotate-45 bg-secondary rounded-full"></div>
      <div class="w-1 h-6 mx-1 rotate-45 bg-accent rounded-full"></div>
    </div>
    <div class="border-t border-gray-400 w-20"></div>
  </div>
</template>

<script setup>
defineProps({
  tag: String,
  title: String,
  subTitle: String,
  color: String,
});
</script>
