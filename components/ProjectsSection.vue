<template>
  <section>
    <div class="container">
      <SectionHeader
        tag="My projects"
        title="Projects, Prototypes, and Ideas"
        subTitle="This space is used to document my hands-on work outside of my career. Projects where I test ideas, try new stacks, or build things just to see if I can."
        color="accent"
      />
      <div>
        <p>
          This section will grow as I build. Some projects are meant for
          hands-on technical exploration; others are stepping stones toward
          tools or systems that solve real problems.
        </p>

        <p>
          Right now, I’m focusing on DevOps workflows, backend infrastructure,
          and automating development environments. Future projects may include
          embedded platforms, custom hardware, or user-facing utilities.
        </p>

        <p>All code and demos will be added as they’re started.</p>
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
