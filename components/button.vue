<template>
  <nuxt-link
  to="#myForm"
    :class="activeSection === 'myForm'"
    class="p-2 border-2 border-black inline-block cursor-pointer hover:bg-blue-600 max-md:border-white hover:text-white max-md:text-xs max-md:px-4 px-8"
  >
    <slot />
  </nuxt-link>
</template>
<script setup>
const activeSection = ref("home");
const sections = ref([]);
const onScroll = () => {
  let currentSection = "home";

  sections.value.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      currentSection = section.id;
    }
  });

  activeSection.value = currentSection;
};

onMounted(() => {
  sections.value = document.querySelectorAll("section");
  window.addEventListener("scroll", onscroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
