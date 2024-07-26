<template>
  <div class="border-t-2 pt-4">
    <div class="container w-full grid lg:grid-cols-3">
      <Logo />
      <div class="footer-right col-span-2 flex flex-col gap-4 my-8">
        <div class="flex flex-col gap-4">
          <nuxt-link to="#home">
            <FooterItem
              ><p>
                {{ $t("footer") }}
              </p>
            </FooterItem>
          </nuxt-link>
          <a href="+998906549659">
            <FooterItem><p>+998 94 099 3434</p></FooterItem>
          </a>
        </div>
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
