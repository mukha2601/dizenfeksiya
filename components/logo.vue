<template>
  <nuxt-link
    to="#home"
    :class="activeSection === 'myForm'"
    class="flex gap-2 items-center"
  >
    <div class="w-6 h-6 bg-[#0000ff] rounded-e-full"></div>
    <p class="font-bold text-[20px] max-[425px]:hidden">Dizenfeksiya</p>
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
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
