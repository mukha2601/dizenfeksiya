<template>
  <!-- <div class="flex flex-col gap-4"> -->
  <div
    class="border-2 p-2 md:p-4 flex flex-col gap-8"
    v-motion
    :initial="{ opacity: 0, x: 250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <div>
      <h2 class="my-4">{{ $t("serviceType.card.title1").toUpperCase() }}</h2>
      <p>
        {{ $t("serviceType.card.subtitle1") }}
      </p>
    </div>
    <div class="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="content-end">
        <Button class="inline-block">{{ $t("button") }}</Button>
      </div>
      <div class="flex justify-end md:justify-start lg:justify-end">
        <img
          class="h-36 w-36 border-2 object-cover"
          :src="icon7"
          alt="parasite-type-image"
        />
      </div>
    </div>
  </div>
  <!-- ------------------------------------------- -->
  <div
    class="border-2 p-2 md:p-4 flex flex-col gap-8"
    v-motion
    :initial="{ opacity: 0, x: 250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <div>
      <h2 class="my-4">{{ $t("serviceType.card.title2").toUpperCase() }}</h2>
      <p>
        {{ $t("serviceType.card.subtitle2") }}
      </p>
    </div>
    <div class="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="content-end">
        <Button class="inline-block">{{ $t("button") }}</Button>
      </div>
      <div class="flex justify-end md:justify-start lg:justify-end">
        <img
          class="h-36 w-36 border-2 object-cover"
          :src="icon8"
          alt="parasite-type-image"
        />
      </div>
    </div>
  </div>
  <!-- ------------------------------------------- -->
  <div
    class="border-2 p-2 md:p-4 flex flex-col gap-8"
    v-motion
    :initial="{ opacity: 0, x: 250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <div>
      <h2 class="my-4">{{ $t("serviceType.card.title3").toUpperCase() }}</h2>
      <p>
        {{ $t("serviceType.card.subtitle3") }}
      </p>
    </div>
    <div class="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="content-end">
        <Button class="inline-block">{{ $t("button") }}</Button>
      </div>
      <div class="flex justify-end md:justify-start lg:justify-end">
        <img
          class="h-36 w-36 border-2 object-cover"
          :src="icon9"
          alt="parasite-type-image"
        />
      </div>
    </div>
  </div>
  <!-- ------------------------------------------- -->
  <div
    class="border-2 p-2 md:p-4 flex flex-col gap-8"
    v-motion
    :initial="{ opacity: 0, x: 250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <div>
      <h2 class="my-4">{{ $t("serviceType.card.title4").toUpperCase() }}</h2>
      <p>
        {{ $t("serviceType.card.subtitle4") }}
      </p>
    </div>
    <div class="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="content-end">
        <Button class="inline-block">{{ $t("button") }}</Button>
      </div>
      <div class="flex justify-end md:justify-start lg:justify-end">
        <img
          class="h-36 w-36 border-2 object-cover"
          :src="icon10"
          alt="parasite-type-image"
        />
      </div>
    </div>
  </div>
  <!-- ------------------------------------------- -->
  <div
    class="border-2 p-2 md:p-4 flex flex-col gap-8"
    v-motion
    :initial="{ opacity: 0, x: 250 }"
    :visible="{ opacity: 1, x: 0 }"
    :duration="800"
  >
    <div>
      <h2 class="my-4">{{ $t("serviceType.card.title5").toUpperCase() }}</h2>
      <p>
        {{ $t("serviceType.card.subtitle5") }}
      </p>
    </div>
    <div class="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="content-end">
        <Button class="inline-block">{{ $t("button") }}</Button>
      </div>
      <div class="flex justify-end md:justify-start lg:justify-end">
        <img
          class="h-36 w-36 border-2 object-cover"
          :src="icon11"
          alt="parasite-type-image"
        />
      </div>
    </div>
  </div>
  <!-- ------------------------------------------- -->

  <!-- </div> -->
</template>

<script setup lang="ts">
import icon7 from "../assets/service/parasites (1).jpg";
import icon8 from "../assets/service/parasites (2).jpg";
import icon9 from "../assets/service/parasites (3).jpg";
import icon10 from "../assets/service/parasites (4).jpg";
import icon11 from "../assets/service/parasites (5).jpg";
// defineProps<{
//   icon: string;
//   title: string;
//   description: string;
// }>();
</script>
