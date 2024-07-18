<template>
  <section class="home">
    <div class="container grid md:grid-cols-2">
      <div class="home-left flex-1 flex flex-col justify-between">
        <div class="md:flex flex-col gap-4 pe-4 max-md:hidden">
          <h1>Dizenfeksiya xizmati</h1>
          <p>
            Biz Toshkentda 10 yildan beri professional dizenfeksiya ishlarini
            olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday
            qutilishni bilamiz
          </p>
        </div>

        <Button class="flex w-max gap-3 items-center max-md:hidden">
          Bog'lanish
          <Icon
            name="material-symbols:arrow-outward"
            color="black"
            class="text-2xl"
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
              color="black"
              class="text-2xl"
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
      <div class="p-6 w-full flex gap-24 bg-blue-400 mt-12">
        <img src="../assets/service/service.png" alt="" />
        <div class="flex flex-col justify-between">
          <div>
            <img src="../assets/service/shit.png" alt="" width="80" />
            <h2 class="mt-6 text-white">
              Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
              talaygina
            </h2>
          </div>
          <Button class="w-max text-white border-white">Bog’lanish</Button>
        </div>
      </div>

      <div class="service-type">
        <h1>Xizmat turi</h1>
      </div>
    </div>
  </section>

  <!-- <section class="faq">
        <div class="container">
            <div class="flex border-t-2">
                <h1 class=" flex-1">FAQ</h1>
            </div>
            <div class="w-full bg-blue-600 p-6 flex relative my-12">
                <div class=" flex-1">
                    <div class="w-96 h-96 bg-white flex-1 p-6 flex flex-col justify-between">
                        <h2>Malumotingizni qoldiring</h2>
                        <div class="flex flex-col gap-6">
                            <input type="text" placeholder="Ism" class="border-2 w-full"/>
                            <input type="text" placeholder="+998" class="border-2 w-full"/>
                            <div class="flex gap-2">
                                <input type="checkbox" id="myChekbox"/>
                                <label for="myChekbox">Maxfiylik siyosati</label>
                            </div>
                        </div>
                        <button class="w-full py-2 bg-black text-white">Yozilish</button>
                    </div>

                </div>
                <div class="flex-1 h-full">
                    <h6 class="w-80 text-white mt-20">Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</h6>
                    <img src="../assets/faq/faq.png" alt="" width="450" class="absolute bottom-0 right-10">
                </div>
            </div>

        </div>
    </section> -->
</template>

<style scoped>
@media (max-width: 425px) {
  p {
    font-size: 12px;
    font-weight: 200;
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
  section {
    padding-top: 1rem;
  }
}

@media (min-width: 425px) {
  p {
    font-size: 16px;
    font-weight: 200;
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
  }
  h2 {
    font-size: 22px;
    font-weight: 700;
  }
  section {
    padding-top: 2rem;
  }
}

@media (min-width: 640px) {
  h1 {
    font-size: 35px;
    font-weight: 700;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  section {
    padding-top: 3rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 35px;
    font-weight: 700;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
  }
  section {
    padding-top: 4rem;
  }
}

@media (min-width: 1280px) {
  h1 {
    font-size: 42px;
    font-weight: 700;
  }
}

/* h2 {
  font-size: 32px;
  font-weight: 700;
} */
</style>
