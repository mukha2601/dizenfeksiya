<template>
  <div class="header border-b-2 py-4 w-full sticky top-0 z-10 bg-white">
    <div class="container flex justify-between items-center">
      <Logo />
      <ul class="flex gap-8 max-lg:hidden">
        <li :class="activeSection === 'home'">
          <a href="#"><p>Asosiy</p></a>
        </li>
        <li :class="activeSection === 'about'">
          <a href="#about"><p>Biz haqimizda</p></a>
        </li>
        <li :class="activeSection === 'service'">
          <a href="#service"><p>Xizmatlar</p></a>
        </li>
        <li :class="activeSection === 'FAQ'">
          <a href="#faq"><p>FAQ</p></a>
        </li>
      </ul>
      <div class="flex">
        <!-- <select>
                    <option value="ru">Русский</option>
                    <option value="uz">O'zbekcha</option>
                </select> -->
        <Button class="py-1 text-sm max-lg:hidden">Kirish</Button>
        <button class="border-2 flex content-center p-1 border-black lg:hidden" @click="$emit('openMenu')">
          <Icon name="fe:bar" color="black" class="text-2xl" />
        </button>
      </div>
    </div>
  </div>
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
