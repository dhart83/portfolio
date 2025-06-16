<template>
  <!-- Card body -->
  <div
    class="bg-white text-sm rounded-2xl shadow-xl overflow-hidden transition-transform duration-700"
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
          v-for="tag in project.tech"
          class="bg-accent/10 text-accent text-sm py-0.5 px-3 rounded-2xl"
          >{{ tag }}</span
        >
      </div>
      <div>
        <p class="text-sm text-gray-500 line-clamp-2 font-thin">
          {{ project.description }}
        </p>
        <NuxtLink
          :to="`/projects/${project.id}`"
          class="flex uppercase text-xs text-accent items-center justify-end mt-3"
        >
          Learn more
          <Icon name="lucide:arrow-right" class="text-accent w-3 h-3 ml-1" />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-4 bg-secondary/10 rounded-lg p-3 my-6">
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
          <div class="text-xs font-bold">{{ project.completed }}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 mt-auto">
        <a
          :href="project.demo && project.active ? project.demo : '#'"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'text-center py-2 rounded-md font-medium transition-all duration-300 ease-in-out',
            project.demo && project.active
              ? 'bg-secondary text-light hover:bg-secondary/80'
              : 'bg-gray-300 text-gray-200 cursor-not-allowed pointer-events-none',
          ]"
          @click.prevent="!(project.demo && project.active)"
        >
          View Demo
        </a>

        <a
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-secondary text-secondary text-center py-2 rounded-md font-medium hover:bg-secondary/10 transition-all duration-300 ease-in-out"
        >
          GitHub
        </a>
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
