<template>
  <div
    class="flex gap-4"
    v-motion
    :initial="{ opacity: 0, x: -250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <Icon name="uil:location-pin-alt" color="black" class="text-3xl" />
    <slot />
    <Icon
      name="material-symbols:arrow-outward"
      color="black"
      class="text-2xl"
    />
  </div>
</template>
