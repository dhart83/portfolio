<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg dark:bg-zinc-900"
  >
    <div class="space-y-2">
      <label
        class="block text-sm font-semibold text-zinc-700 dark:text-zinc-200"
        for="name"
        >Name</label
      >
      <input
        v-model="form.name"
        type="text"
        id="name"
        required
        placeholder="Your full name"
        class="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-zinc-800"
      />
    </div>

    <div class="space-y-2 mt-6">
      <label
        class="block text-sm font-semibold text-zinc-700 dark:text-zinc-200"
        for="email"
        >Email</label
      >
      <input
        v-model="form.email"
        type="email"
        id="email"
        required
        placeholder="you@example.com"
        class="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-zinc-800"
      />
    </div>

    <div class="space-y-2 mt-6">
      <label
        class="block text-sm font-semibold text-zinc-700 dark:text-zinc-200"
        for="message"
        >Message</label
      >
      <textarea
        v-model="form.message"
        id="message"
        rows="5"
        required
        placeholder="Let’s build something together..."
        class="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-zinc-800 resize-none"
      ></textarea>
    </div>

    <div>
      <button
        type="submit"
        class="w-full py-2 px-4 mt-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 active:scale-[0.98] transition-transform duration-150 font-semibold shadow"
      >
        Send Message
      </button>
    </div>
  </form>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  // Placeholder: handle your form logic here
  console.log("Form submitted", form);
};
</script>
