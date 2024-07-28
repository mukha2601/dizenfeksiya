<template>
  <section id="home" class="home">
    <div class="container grid md:grid-cols-2">
      <div class="home-left flex-1 flex flex-col justify-between">
        <div class="md:flex flex-col gap-4 pe-4 max-md:hidden">
          <h1
            v-motion
            :initial="{ opacity: 0, x: -250 }"
            :visible="{ opacity: 1, x: 0 }"
            :duration="800"
          >
            {{ $t("home.title") }}
          </h1>
          <p
            class="lg:text-2xl"
            v-motion
            :initial="{ opacity: 0, x: -250 }"
            :visible="{ opacity: 1, x: 0 }"
            :duration="800"
          >
            {{ $t("home.subtitle") }}
          </p>
        </div>

        <Button
          class="flex w-max gap-3 items-center max-md:hidden mt-6"
          v-motion
          :initial="{ opacity: 0, x: 250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
        >
          {{ $t("button") }}
          <Icon class="text-2xl" name="material-symbols:arrow-outward" />
        </Button>
      </div>
      <div
        class="home-right flex shrink-0 justify-end max-md:mt-4 max-md:relative"
      >
        <div
          class="md:hidden h-full flex flex-col gap-4 justify-center max-md:absolute max-md:top-0 p-2 sm:p-4 z-10"
          v-motion-pop-visible
          :duration="800"
        >
          <h1 class="text-white">{{ $t("home.title") }}</h1>
          <p class="text-white">
            {{ $t("home.subtitle") }}
          </p>
          <Button class="flex w-max gap-3 items-center text-white">
            {{ $t("button") }}
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
          v-motion-slide-visible-right
          :duration="600"
        />
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container flex flex-col gap-12">
      <h1 class="border-b-2">{{ $t("about.title") }}</h1>
      <div class="about-card grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AboutCard
          v-for="(item, index) in languageSwitch(aboutDataUZ, aboutDataRU)"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :subtitle="item.subtitle"
          v-motion
          :initial="{ opacity: 0, x: -250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
        />
      </div>

      <div class="relative">
        <img
          src="../assets/about/about img.png"
          alt=""
          class="object-cover object-center max-md:blur-sm"
          v-motion
          :initial="{ opacity: 0, x: -250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="700"
        />
        <div
          class="absolute md:w-2/3 lg:w-1/2 p-3 md:p-4 right-0 top-0 gap-4 flex flex-col justify-center h-full max-md:text-white"
          v-motion
          :initial="{ opacity: 0, x: 250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="900"
        >
          <h2>{{ $t("about.banner.title") }}</h2>
          <p class="max-md:hidden">
            {{ $t("about.banner.subtitle") }}
          </p>
          <div>
            <Button class="max-md:border-white">{{ $t("button") }}</Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="service" class="service">
    <div class="container flex flex-col gap-6">
      <h1>{{ $t("service.title") }}</h1>
      <p>{{ $t("service.subtitle") }}</p>
      <div class="flex flex-col mt-4 w-full justify-between gap-4">
        <ServiceCard
          v-for="item in languageSwitch(serviceDataUZ, serviceDataRU)"
          :key="item.id"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          v-motion
          :initial="{ opacity: 0, x: 250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
        />
      </div>

      <section class="service-type">
        <h1 class="my-8">{{ $t("serviceType.title") }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <ServiceTypeCard
            v-for="item in languageSwitch(serviceTypeDataUZ, serviceTypeDataRU)"
            :key="item.id"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            v-motion
            :initial="{ opacity: 0, x: 250 }"
            :visible="{ opacity: 1, x: 0 }"
            :duration="800"
          />
        </div>
      </section>
      <div
        class="p-6 w-full grid md:grid-cols-2 md:gap-12 lg:gap-18 bg-blue-400 mt-12"
      >
        <img
          class="max-md:hidden object-cover object-center"
          src="../assets/service/service.png"
          alt=""
          v-motion
          :initial="{ opacity: 0, x: -250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
        />
        <div
          class="flex flex-col justify-around gap-6"
          v-motion
          :initial="{ opacity: 0, x: 250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
        >
          <img class="" src="../assets/service/shit.png" alt="" width="80" />
          <h2 class="max-lg:text-sm text-white">
            {{ $t("serviceType.banner") }}
          </h2>
          <Button class="w-max text-white border-white">{{
            $t("button")
          }}</Button>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="faq">
    <div class="container">
      <div class="grid max-sm:grid-cols-1 grid-cols-3 border-t-2">
        <h1>FAQ</h1>

        <UAccordion
          :items="languageSwitch(faqDataUZ, faqDataRU)"
          :ui="{ wrapper: 'flex flex-col  col-span-2' }"
        >
          <template #default="{ item, open }">
            <UButton
              color="black"
              variant="ghost"
              class="border-b text-gray-500"
              :ui="{ rounded: 'rounded-none', padding: { sm: 'py-8' } }"
            >
              <h3 class="truncate leading-8 text-lg md:text-xl">
                {{ item.label }}
              </h3>
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
        <div
          class="flex content-center"
          v-motion
          :initial="{ opacity: 0, x: -250 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
        >
          <MyForm />
        </div>
        <div class="flex-1 h-full">
          <img
            src="../assets/faq/faq.png"
            alt=""
            width="450"
            class="absolute bottom-0 right-0 max-lg:hidden"
            v-motion
            :initial="{ opacity: 0, y: 250 }"
            :visible="{ opacity: 1, y: 0 }"
            :duration="800"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
import {
  faqDataUZ,
  faqDataRU,
  aboutDataUZ,
  aboutDataRU,
  serviceDataUZ,
  serviceDataRU,
  serviceTypeDataRU,
  serviceTypeDataUZ,
} from "../data.js";

//---------til o'zgarganda ishlaydigan funksiya-------
const languageSwitch = (uz, ru) => {
  if (locale.value == "uz-UZ") {
    return uz;
  } else {
    return ru;
  }
};
</script>
