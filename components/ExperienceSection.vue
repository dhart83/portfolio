<template>
  <section>
    <div class="container">
      <SectionHeader
        tag="Experience"
        title="Professional Journey"
        subTitle="Roles, work, and the education that started it all."
        color="accent"
      >
        <div class="my-10">
          <a
            href="/docs/resume.pdf"
            download
            class="flex justify-center text-gray-500"
          >
            <Icon name="lucide:download" class="w-6 h-6 mr-3" />
            Download Resume
          </a>
        </div>
      </SectionHeader>

      <div class="mt-10">
        <ExperienceCard
          v-for="(company, key) in experience"
          :key="key"
          :company="company"
          class="mt-6"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import experience from "/assets/data/experience.json";
</script>
