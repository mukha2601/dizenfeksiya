<template>
  <div>
    <div
      class="w-full h-screen absolute z-40 flex justify-end hidden"
      style="background-color: rgba(0, 0, 0, 0.418);"
    >
      <div class="menu-bar h-full w-96 border-2 bg-gray-500">
        <button>x</button>
      </div>
    </div>
    <Header />
    <slot />
    <!-- <Footer/> -->
  </div>
</template>
