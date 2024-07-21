<template>
  <div class="w-full border-2 overflow-hidden">
    <div class="md:flex">
      <div
        class="md:shrink-0 p-2 content-center text-center flex justify-center items-center"
      >
        <img
          class="shrink-0 w-32 h-32 md:w-48 md:h-48"
          :src="icon"
          alt="Modern building architecture"
        />
      </div>
      <div class="p-3 sm:p-6 md:p-8">
        <h3 class="uppercase tracking-wide text-sm font-semibold">
          {{ title }}
        </h3>
        <p class="mt-2 text-slate-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
