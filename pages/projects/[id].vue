<template>
  <section>
    <div class="container">
      <h1 class="text-4xl font-extrabold text-primary mb-4">
        {{ project.title }}
      </h1>
      <p class="text-lg leading-relaxed">{{ project.description }}</p>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const { data: project } = await useFetch(`/api/projects/${route.params.id}`);
</script>
