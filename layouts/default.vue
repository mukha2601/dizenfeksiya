<template>
  <div class="relative">
    <aside
      class="w-full h-screen border-2 border-red-500 flex justify-end absolute z-50"
    >
      <div
        class="w-96 h-full border-2 border-red-300 flex flex-col p-6 gap-8 bg-white"
      >
        <div class="flex justify-end">
          <button>
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
        <USelect v-model="selected" :options="language" />
      </div>
    </aside>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const language = [
  {
    id: 1,
    label: "UZBEK",
  },
  {
    id: 2,
    label: "RUSSIAN",
  },
];

const selected = ref(language[1]);
</script>
