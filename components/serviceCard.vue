<template>
  <div class="w-full border-2 overflow-hidden">
    <div class="md:flex">
      <div
        class="md:shrink-0 p-2 content-center text-center flex justify-center"
      >
        <img
          class="object-cover md:h-full shrink-0 w-48 h-48"
          :src="icon"
          alt="Modern building architecture"
        />
      </div>
      <div class="p-8">
        <h3 class="uppercase tracking-wide text-sm font-semibold">
          Company retreats
        </h3>
        <p class="mt-2 text-slate-500">
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
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
