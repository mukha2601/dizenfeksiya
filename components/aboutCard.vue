<template>
  <div class="flex flex-col gap-4 border-2 p-3 sm:p-4 md:p-6">
    <img :src="icon" alt="" width="70" />
    <h3>{{ title }}</h3>
    <p>
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  subtitle: string;
}>();
</script>
