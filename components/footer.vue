<template>
  <div class="container flex justify-between">
    <Logo />
    <div class="footer-right flex flex-col gap-4 my-8">
      <div class="border-b-2 flex flex-col gap-4 pb-4">
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
      <div class="flex gap-4">
        <SocialLink>Facebook</SocialLink>
        <SocialLink>Instagram</SocialLink>
        <SocialLink>Telegram</SocialLink>
      </div>
    </div>
  </div>
</template>
