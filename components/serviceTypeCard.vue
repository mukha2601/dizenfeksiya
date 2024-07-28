<template>
  <div class="border-2 p-2 md:p-4 flex flex-col gap-8">
    <div>
      <h2 class="my-4">{{ title.toUpperCase() }}</h2>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="content-end">
        <Button class="inline-block">{{ $t("button") }}</Button>
      </div>
      <div class="flex justify-end md:justify-start lg:justify-end">
        <img
          class="h-36 w-36 border-2 object-cover"
          :src="icon"
          alt="parasite-type-image"
        />
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
