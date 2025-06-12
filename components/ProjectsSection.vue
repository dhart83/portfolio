<template>
  <section>
    <div class="container">
      <div class="text-center bg-inherit">
        <div
          class="inline-block bg-accent/10 text-accent font-semibold px-4 py-1 rounded-full text-sm mb-3"
        >
          What I’ve Done
        </div>
        <h2>Featured Projects</h2>
        <p class="max-w-2xl mx-auto">
          A selection of projects spanning embedded systems, DevOps automation,
          and practical web tools.
        </p>
      </div>
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
import projects from "~/assets/data/projects.json";
</script>
