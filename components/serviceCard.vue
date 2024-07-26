<template>
  <div class="flex flex-col gap-4">
    <!-- ------------------card-----------------  -->
    <div
      class="w-full border-2 overflow-hidden"
      v-motion
      :initial="{ opacity: 0, x: 250 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="800"
    >
      <div class="md:flex">
        <div
          class="md:shrink-0 p-2 content-center text-center flex justify-center items-center"
        >
          <img
            class="shrink-0 w-32 h-32 md:w-48 md:h-48"
            :src="icon4"
            alt="Modern building architecture"
          />
        </div>
        <div class="p-3 sm:p-6 md:p-8">
          <h3 class="uppercase tracking-wide text-sm font-semibold">
            {{ $t("service.serviceCard.title1") }}
          </h3>
          <p class="mt-2 text-slate-500">
            {{ $t("service.serviceCard.subtitle1") }}
          </p>
        </div>
      </div>
    </div>

    <!-- -------------------------------------------------- -->

    <div
      class="w-full border-2 overflow-hidden"
      v-motion
      :initial="{ opacity: 0, x: 250 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="800"
    >
      <div class="md:flex">
        <div
          class="md:shrink-0 p-2 content-center text-center flex justify-center items-center"
        >
          <img
            class="shrink-0 w-32 h-32 md:w-48 md:h-48"
            :src="icon5"
            alt="Modern building architecture"
          />
        </div>
        <div class="p-3 sm:p-6 md:p-8">
          <h3 class="uppercase tracking-wide text-sm font-semibold">
            {{ $t("service.serviceCard.title2") }}
          </h3>
          <p class="mt-2 text-slate-500">
            {{ $t("service.serviceCard.subtitle2") }}
          </p>
        </div>
      </div>
    </div>

    <!-- ----------------------------------------------- -->

    <div
      class="w-full border-2 overflow-hidden"
      v-motion
      :initial="{ opacity: 0, x: 250 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="800"
    >
      <div class="md:flex">
        <div
          class="md:shrink-0 p-2 content-center text-center flex justify-center items-center"
        >
          <img
            class="shrink-0 w-32 h-32 md:w-48 md:h-48"
            :src="icon6"
            alt="Modern building architecture"
          />
        </div>
        <div class="p-3 sm:p-6 md:p-8">
          <h3 class="uppercase tracking-wide text-sm font-semibold">
            {{ $t("service.serviceCard.title3") }}
          </h3>
          <p class="mt-2 text-slate-500">
            {{ $t("service.serviceCard.subtitle3") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import icon4 from "../assets/service/service-icon(1).png";
import icon5 from "../assets/service/service-icon(2).jpg";
import icon6 from "../assets/service/service-icon(3).jpg";
// defineProps<{
//   icon: string;
//   title: string;
//   description: string;
// }>();
</script>
