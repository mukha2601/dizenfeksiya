<template>
  <div class="relative">
    <aside
      class="w-full h-screen flex justify-end absolute z-50 bg-transparent"
      v-if="isOpen"
    >
      <div class="w-96 h-full border-2 flex flex-col p-6 gap-8 bg-white">
        <div class="flex justify-end">
          <button @click="isOpen = false">
            <Icon
              class="text-4xl hover:text-red-600"
              name="ant-design:close-square-outlined"
            />
          </button>
        </div>
        <AsideBtn>Asosiy</AsideBtn>
        <AsideBtn>Biz haqimizda</AsideBtn>
        <AsideBtn>Xizmatlar</AsideBtn>
        <AsideBtn>FAQ</AsideBtn>
        <div class="p-2 max-md:px-4 px-8">
          <USelect v-model="selected" :options="language" />
        </div>
      </div>
    </aside>

    <Header @openMenu="openMenu" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const language = ["UZBEK", "RUSSIAN"];

const selected = ref(language[0]);
const isOpen = ref(false);
const openMenu = () => (isOpen.value = true);
// const bgDisable = computed(() => {
//   window;
// });
</script>
