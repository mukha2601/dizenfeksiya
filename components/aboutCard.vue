<template>
  <!-- About card -->
  <div
    class="flex flex-col gap-4 border-2 p-3 sm:p-4 md:p-6"
    v-motion
    :initial="{ opacity: 0, x: -250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <img :src="icon1" alt="" width="70" />
    <h3>{{ $t("about.card.title1") }}</h3>
    <p>
      {{ $t("about.card.subtitle1") }}
    </p>
  </div>
  <!-- --------------------------------------------- -->
  <div
    class="flex flex-col gap-4 border-2 p-3 sm:p-4 md:p-6"
    v-motion
    :initial="{ opacity: 0, x: -250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <img :src="icon2" alt="" width="70" />
    <h3>{{ $t("about.card.title2") }}</h3>
    <p>
      {{ $t("about.card.subtitle2") }}
    </p>
  </div>
  <!-- --------------------------------------------- -->
  <div
    class="flex flex-col gap-4 border-2 p-3 sm:p-4 md:p-6"
    v-motion
    :initial="{ opacity: 0, x: -250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <img :src="icon3" alt="" width="70" />
    <h3>{{ $t("about.card.title3") }}</h3>
    <p>
      {{ $t("about.card.subtitle3") }}
    </p>
  </div>
  <!-- --------------------------------------------- -->

  <!-- <div class="flex flex-col gap-4 border-2 p-3 sm:p-4 md:p-6">
    <img :src="icon" alt="" width="70" />
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>
  </div> -->
</template>

<script setup lang="ts">
import icon1 from "../assets/about/about-icon(1).png";
import icon2 from "../assets/about/about-icon(2).png";
import icon3 from "../assets/about/about-icon(3).png";

// defineProps<{
//   icon: string;
//   title: string;
//   description: string;
// }>();
</script>
