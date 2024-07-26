<template>
  <div class="relative">
    <aside
      class="w-full h-screen flex justify-end fixed top-0 z-50 bg-transparent"
      v-if="isOpen"
    >
      <div
        class="w-full min-[375px]:w-[70%] md:w-96 h-full border-2 flex flex-col p-6 gap-8 bg-white"
      >
        <div class="flex justify-end">
          <button @click="closeModal">
            <Icon
              class="text-4xl hover:text-red-600"
              name="ant-design:close-square-outlined"
            />
          </button>
        </div>
        <AsideBtn :class="activeSection === 'home'"
          ><a href="#home"
            ><p>{{ $t("header.main") }}</p></a
          ></AsideBtn
        >
        <AsideBtn :class="activeSection === 'about'"
          ><a href="#about"
            ><p>{{ $t("header.about") }}</p></a
          ></AsideBtn
        >
        <AsideBtn :class="activeSection === 'service'"
          ><a href="#service"
            ><p>{{ $t("header.services") }}</p></a
          ></AsideBtn
        >
        <AsideBtn :class="activeSection === 'faq'"
          ><a href="#faq"><p>FAQ</p></a></AsideBtn
        >
      </div>
    </aside>

    <Header @openMenu="openMenu" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const isOpen = ref(false);

const openMenu = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const activeSection = ref("home");
const sections = ref([]);

const onScroll = () => {
  let currentSection = "home";

  sections.value.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      currentSection = section.id;
      closeModal();
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
