<template>
  <section>
    <div class="container">
      <SectionHeader
        tag="Projects"
        title="Things I've Built"
        subTitle="Side projects developed to extend my capabilities beyond formal roles."
        color="accent"
      />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from "/assets/data/projects.json";
</script>
