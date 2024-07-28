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
import icon1 from "../assets/about/about-icon(1).png";
import icon2 from "../assets/about/about-icon(2).png";
import icon3 from "../assets/about/about-icon(3).png";

defineProps<{
  icon: string;
  title: string;
  subtitle: string;
}>();
</script>
