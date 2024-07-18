<template>
  <div class="border-t-2 pt-4">
    <div class="container w-full grid lg:grid-cols-3">
      <Logo />
      <div class="footer-right col-span-2 flex flex-col gap-4 my-8">
        <div class="flex flex-col gap-4">
          <nuxt-link to="#">
            <FooterItem
              ><p>
                Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat
              </p></FooterItem
            >
          </nuxt-link>
          <nuxt-link to="#">
            <FooterItem><p>+998 94 099 3434</p></FooterItem>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
