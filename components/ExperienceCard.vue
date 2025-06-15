<template>
  <div>
    <div class="bg-white rounded-2xl shadow-lg p-6">
      <!-- Company Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div class="">
          <h2 class="text-xl font-semibold mb-0">{{ company.name }}</h2>
          <p class="text-medium font-semibold italic text-gray-500 mt-0">
            {{ company.role }}
          </p>
          <p class="text-sm font-thin text-gray-500 mt-1">
            {{ company.sector }}
          </p>
          <div class="">
            <p class="text-xs font-semibold">
              {{ company.location.city }}, {{ company.location.state }}
            </p>
            <p class="text-xs font-semibold mt-1">
              {{ company.dates.start }} -
              {{ company.dates.finish }}
            </p>
          </div>
        </div>
        <button
          v-if="expanded.programs.length > 0"
          @click="toggleCompany()"
          class="mt-4 sm:mt-0 text-sm text-accent hover:underline"
        >
          {{ expanded.company ? "Hide Details" : "Show Details" }}
        </button>
      </div>

      <!-- Program Accordion -->
      <transition-group name="fade" tag="div" class="">
        <div
          v-if="expanded.company"
          v-for="(program, index) in company.programs"
          :key="index"
          class="border-l-4 border-accent pl-4 mt-4"
        >
          <div
            @click="toggleProgram(index)"
            class="cursor-pointer flex items-center justify-between bg-gray-100 p-4 rounded-md hover:bg-gray-200"
          >
            <div>
              <h3 class="font-medium mt-1">{{ program.title }}</h3>
            </div>
            <span class="text-accent">{{
              expanded.programs[index] ? "▲" : "▼"
            }}</span>
          </div>

          <transition name="fade">
            <div v-if="expanded.programs[index]" class="p-4">
              <p class="text-sm text-gray-700 mb-2">
                {{ program.description }}
              </p>
              <div>
                <div v-for="(task, index) in program.tasks">
                  <p>{{ task.name }}</p>
                  <div v-for="(achievement, index) in task.achievements">
                    <p class="text-sm">{{ achievement }}</p>
                  </div>
                </div>
              </div>
              <div class="text-xs text-gray-500 space-y-1">
                <p><strong>Role:</strong> {{ program.role }}</p>
                <p>
                  <strong>Tech:</strong> {{ program.technologies.join(", ") }}
                </p>
                <p><strong>Tools:</strong> {{ program.tools.join(", ") }}</p>
              </div>
            </div>
          </transition>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const { company } = defineProps({
  company: Object,
});

const expanded = reactive({
  company: false,
  programs: company.programs.map(() => false),
});

function toggleCompany() {
  expanded.company = !expanded.company;

  if (expanded.company == false) {
    expanded.programs = expanded.programs.map(() => false);
  }
}

function toggleProgram(index) {
  expanded.programs[index] = !expanded.programs[index];
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
