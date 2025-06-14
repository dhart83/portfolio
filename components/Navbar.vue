<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const isScrolled = ref(false);
const isOpen = ref(false);
const isDesktop = ref(false);

const checkScreen = () => (isDesktop.value = window.innerWidth >= 768);
const checkScroll = () => (isScrolled.value = window.scrollY > 50);
const openMenu = () => (isOpen.value = true);
const closeMenu = () => (isOpen.value = false);

onMounted(() => {
  checkScreen();
  checkScroll();
  window.addEventListener("resize", checkScreen);
  window.addEventListener("scroll", checkScroll);
});

onBeforeUnmount(() => {
  window.addEventListener("resize", checkScreen);
});

watch(isOpen, (val) => (document.body.style.overflow = val ? "hidden" : ""));
</script>

<template>
  <header
    :class="[
      'fixed top-0 z-40 w-full bg-light/85 backdrop-blur-md transition-all duration-300 ease-in-out',
      isScrolled ? 'shadow-md' : '',
    ]"
  >
    <div class="container items-center h-20 flex justify-between">
      <div>
        <h1 class="mb-0 text-xl text-primary font-bold">Donnie's Portfolio</h1>
      </div>

      <transition
        enter-active-class="transition transform duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition transform duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <nav
          v-show="isOpen || isDesktop"
          id="menu"
          :class="[
            'fixed top-0 right-0 h-screen z-50 bg-primary text-light flex flex-col gap-8 p-16 pt-24 md:text-inherit md:w-auto md:h-auto md:static md:inset-auto md:transform-none md:flex-row md:gap-6 md:bg-transparent md:p-0',
          ]"
        >
          <button
            @click="closeMenu"
            class="inline-flex items-center justify-center rounded-md md:hidden absolute right-8 top-8"
          >
            <Icon name="lucide:x" class="w-6 h-6" />
          </button>
          <div class="flex items-center">
            <Icon
              v-show="!isDesktop"
              name="lucide:house"
              class="w-6 h-6 mr-4"
            />
            <a @click="closeMenu" class="hover:text-accent" href="#hero"
              >Home</a
            >
          </div>
          <div class="flex items-center">
            <Icon v-show="!isDesktop" name="lucide:user" class="w-6 h-6 mr-4" />
            <a @click="closeMenu" class="hover:text-accent" href="#about"
              >About</a
            >
          </div>
          <div class="flex items-center">
            <Icon
              v-show="!isDesktop"
              name="lucide:layers"
              class="w-6 h-6 mr-4"
            />
            <a @click="closeMenu" class="hover:text-accent" href="#projects"
              >Projects</a
            >
          </div>
          <div class="flex items-center">
            <Icon
              v-show="!isDesktop"
              name="lucide:file-text"
              class="w-6 h-6 mr-4"
            />
            <a @click="closeMenu" class="hover:text-accent" href="#experience"
              >Experience</a
            >
          </div>
          <div class="flex items-center">
            <Icon
              v-show="!isDesktop"
              name="lucide:telescope"
              class="w-6 h-6 mr-4"
            />
            <a @click="closeMenu" class="hover:text-accent" href="#vision"
              >Vision</a
            >
          </div>
          <div v-show="!isDesktop" class="flex items-center">
            <Icon name="lucide:mail" class="w-6 h-6 mr-4" />
            <a @click="closeMenu" class="hover:text-accent" href="#contact"
              >Contact</a
            >
          </div>
        </nav>
      </transition>

      <div class="flex gap-4">
        <div>
          <a
            href="#contact"
            class="bg-accent font-medium text-light px-4 py-2 rounded-md hover:bg-accent/80"
          >
            Let's Connect
          </a>
        </div>
        <button
          @click="openMenu"
          class="inline-flex items-center justify-center px-2 md:hidden"
        >
          <Icon name="lucide:menu" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>
