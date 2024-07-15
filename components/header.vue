<template>
    <div class="header border-b-2 py-4 w-full sticky top-0 z-10 bg-white">
        <div class="container flex justify-between items-center">
            <Logo/>
            <ul class="flex gap-8 text-xs">
                <li><nuxt-link to="#"><p>Asosiy</p></nuxt-link></li>
                <li><nuxt-link to="#"><p>Biz haqimizda</p></nuxt-link></li>
                <li><nuxt-link to="#"><p>Xizmatlar</p></nuxt-link></li>
                <li><nuxt-link to="#"><p>FAQ</p></nuxt-link></li>
            </ul>
            <div class="flex">
                <!-- <select>
                    <option value="ru">Русский</option>
                    <option value="uz">O'zbekcha</option>
                </select> -->
                <Button class="py-1 text-sm">Kirish</Button>
            </div>
        </div>
    </div>
</template>