<template>
  <!-- Card body -->
  <div
    class="bg-white text-sm rounded-2xl shadow-xl cursor-pointer overflow-hidden hover:-translate-y-3 transition-transform duration-700"
  >
    <!-- top -->
    <div class="relative h-56 overflow-hidden group">
      <img
        :src="project.image"
        alt="Sample project image"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
      ></div>
      <div
        class="absolute top-4 left-4 text-light font-bold bg-accent px-3 py-1 rounded-2xl"
      >
        {{ project.status }}
      </div>
      <div class="absolute bottom-4 left-4">
        <h3 class="text-white mb-1">{{ project.title }}</h3>
        <div>
          <h4 class="text-light font-bold">{{ project.year }}</h4>
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="p-6">
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in project.tags"
          class="bg-primary/10 text-primary text-sm py-0.5 px-3 rounded-2xl"
          >{{ tag }}</span
        >
      </div>
      <div>
        <p class="text-sm text-gray-500 line-clamp-2 font-thin">
          {{ project.description }}
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 bg-secondary/5 rounded-lg p-3 my-6">
        <div>
          <div class="text-gray-500 text-xs mb-1">Type</div>
          <div class="text-xs font-bold">{{ project.type }}</div>
        </div>
        <div>
          <div class="text-gray-500 text-xs mb-1">Usage</div>
          <div class="text-xs font-bold">{{ project.usage }}</div>
        </div>
        <div>
          <div class="text-gray-500 text-xs mb-1">Access</div>
          <div class="text-xs font-bold">{{ project.access }}</div>
        </div>
        <div>
          <div class="text-gray-500 text-xs mb-1">Status</div>
          <div class="text-xs font-bold">{{ project.status }}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 mt-auto">
        <button class="bg-secondary/20 py-2 rounded-md font-medium">
          View Demo
        </button>
        <button
          class="border border-secondary/50 text-secondary/80 py-2 rounded-md font-medium"
        >
          GitHub
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>

<style scoped></style>
