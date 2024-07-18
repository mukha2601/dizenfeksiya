<template>
  <section class="home">
    <div class="container grid md:grid-cols-2">
      <div class="home-left flex-1 flex flex-col justify-between">
        <div class="md:flex flex-col gap-4 pe-4 max-md:hidden">
          <h1>Dizenfeksiya xizmati</h1>
          <p class="lg:text-2xl">
            Biz Toshkentda 10 yildan beri professional dizenfeksiya ishlarini
            olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday
            qutilishni bilamiz
          </p>
        </div>

        <Button class="flex w-max gap-3 items-center max-md:hidden mt-6">
          Bog'lanish
          <Icon
            class="text-2xl"
            name="material-symbols:arrow-outward"
            color="black"
          />
        </Button>
      </div>
      <div
        class="home-right flex shrink-0 justify-end max-md:mt-4 max-md:relative"
      >
        <div
          class="md:hidden h-full flex flex-col gap-4 justify-center max-md:absolute max-md:top-0 p-2 sm:p-4 z-10"
        >
          <h1 class="text-white">Dizenfeksiya xizmati</h1>
          <p class="text-white">
            Biz Toshkentda 10 yildan beri professional dizenfeksiya ishlarini
            olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday
            qutilishni bilamiz
          </p>
          <Button class="flex w-max gap-3 items-center border-white text-white">
            Bog'lanish
            <Icon
              name="material-symbols:arrow-outward"
              class="text-2xl max-md:text-white"
            />
          </Button>
        </div>
        <img
          src="../assets/home/home right img.png"
          alt="home-img"
          class="max-md:blur-[2px] object-cover"
        />
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container flex flex-col gap-12">
      <h1 class="border-b-2">Biz haqimizda</h1>
      <div class="about-card grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AboutCard>
          <img src="../assets/icon/icon (1).png" alt="" width="70" />
          <h3>Tezda xizmat ko'rsatish</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            voluptas asperiores quia aut quam! Aspernatur doloremque at nemo.
            Obcaecati tempora earum pariatur iure labore minus totam, eaque
            esse? Quos, aut?
          </p>
        </AboutCard>
        <AboutCard>
          <img src="../assets/icon/icon (2).png" alt="" width="70" />
          <h3>Yetuk mutaxasislarimiz</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            voluptas asperiores quia aut quam! Aspernatur doloremque at nemo.
            Obcaecati tempora earum pariatur iure labore minus totam, eaque
            esse? Quos, aut?
          </p>
        </AboutCard>
        <AboutCard>
          <img src="../assets/icon/icon (3).png" alt="" width="70" />
          <h3>Sizga maqul vaqtda</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            voluptas asperiores quia aut quam! Aspernatur doloremque at nemo.
            Obcaecati tempora earum pariatur iure labore minus totam, eaque
            esse? Quos, aut?
          </p>
        </AboutCard>
      </div>

      <div class="relative">
        <img
          src="../assets/about/about img.png"
          alt=""
          class="object-cover object-center max-md:blur-sm"
        />
        <div
          class="absolute md:w-2/3 lg:w-1/2 p-3 md:p-4 right-0 top-0 gap-4 flex flex-col justify-center h-full max-md:text-white"
        >
          <h2>Klapa va zararli hashorot endi yo'q dep xisoblang !!!</h2>
          <p class="max-md:hidden">
            Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan
            kampaniyamiz. Mijozlarimiz bizdan mamnun
          </p>
          <div>
            <Button class="max-md:border-white">Bog'lanish</Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="service">
    <div class="container flex flex-col gap-6">
      <h1>Xizmatlar</h1>
      <p>Biz sizga samarali va kafolatli xizmat taqdim etamiz</p>
      <div class="flex flex-col mt-4 w-full justify-between gap-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div class="service-type">
        <h1>Xizmat turi</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <ServiceTypeCard />
          <ServiceTypeCard />
          <ServiceTypeCard />
          <ServiceTypeCard />
          <ServiceTypeCard />
        </div>
      </div>
      <div
        class="p-6 w-full grid md:grid-cols-2 md:gap-12 lg:gap-18 bg-blue-400 mt-12"
      >
        <img
          class="max-md:hidden object-cover object-center"
          src="../assets/service/service.png"
          alt=""
        />
        <div class="flex flex-col justify-around gap-6">
          <img class="" src="../assets/service/shit.png" alt="" width="80" />
          <h2 class="max-lg:text-sm text-white">
            Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
            talaygina
          </h2>
          <Button class="w-max text-white border-white">Bog’lanish</Button>
        </div>
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="container">
      <div class="grid max-sm:grid-cols-1 grid-cols-3 border-t-2">
        <h1>FAQ</h1>

        <UAccordion
          :items="items"
          :ui="{ wrapper: 'flex flex-col  col-span-2' }"
        >
          <template #default="{ item, index, open }">
            <UButton
              color="black"
              variant="ghost"
              class="border-b text-gray-500"
              :ui="{ rounded: 'rounded-none', padding: { sm: 'py-8' } }"
            >
              <h2>{{ item.label }}</h2>
              <template #trailing>
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
                />
              </template>
            </UButton>
          </template>
        </UAccordion>
      </div>

      <div
        class="lg:h-[430px] grid max-lg:grid-cols-1 grid-cols-2 w-full bg-blue-600 p-3 md:p-5 relative my-12"
      >
        <div class="flex content-center">
          <div
            class="gap-6 bg-white w-full p-2 md:p-4 flex flex-col justify-between"
          >
            <h2>Malumotingizni qoldiring</h2>
            <div class="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Ism"
                class="border-2 w-full text-xs md:text-xl"
              />
              <input
                type="text"
                placeholder="+998"
                class="border-2 w-full text-xs md:text-xl"
              />
              <div class="flex gap-2">
                <input type="checkbox" id="myChekbox" class="w-8" />
                <label for="myChekbox">Maxfiylik siyosati</label>
              </div>
            </div>
            <button class="w-full py-2 bg-primary text-white">Yozilish</button>
          </div>
        </div>
        <div class="flex-1 h-full">
          <img
            src="../assets/faq/faq.png"
            alt=""
            width="450"
            class="absolute bottom-0 right-0 max-lg:hidden"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { _textColor } from "#tailwind-config/theme";

const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>
