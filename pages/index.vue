<template>
    <section class="home">
    <div class="container flex">
        <div class="home-left flex-1 flex flex-col justify-between">
            <div class="flex flex-col gap-4">
                <h1 class="md:text-[60px]">Dizenfeksiya xizmati</h1>
                <p>Biz Toshkentda 10 yildan beri professional dizenfeksiya ishlarini olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday qutilishni bilamiz</p>
            </div>
                <Button class="flex w-max gap-3 items-center">
                    Bog'lanish 
                    <Icon name="material-symbols:arrow-outward" color="black" class="text-2xl" />
                </Button>
        </div>
        <div class="home-right flex flex-1 justify-end">
            <img src="../assets/home/home right img.png" alt="home-img" width="500px" >
        </div>
    </div>
    </section>
    <section class="about">
        <div class="container flex flex-col gap-12">
            <h1 class="border-b-2">Biz haqimizda</h1>
            <div class="about-card flex gap-4 ">
                <AboutCard>
                    <img src="../assets/icon/icon (1).png" alt="" width="70">
                    <h3>Tezda xizmat ko'rsatish</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero voluptas asperiores quia aut quam! Aspernatur doloremque at nemo. Obcaecati tempora earum pariatur iure labore minus totam, eaque esse? Quos, aut?</p>
                </AboutCard>
                <AboutCard>
                    <img src="../assets/icon/icon (2).png" alt="" width="70">
                    <h3>Yetuk mutaxasislarimiz</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero voluptas asperiores quia aut quam! Aspernatur doloremque at nemo. Obcaecati tempora earum pariatur iure labore minus totam, eaque esse? Quos, aut?</p>
                </AboutCard>
                <AboutCard>
                    <img src="../assets/icon/icon (3).png" alt="" width="70">
                    <h3>Sizga maqul vaqtda</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero voluptas asperiores quia aut quam! Aspernatur doloremque at nemo. Obcaecati tempora earum pariatur iure labore minus totam, eaque esse? Quos, aut?</p>
                </AboutCard>
            </div>

            <div class="relative">
                <img src="../assets/about/about img.png" alt="" >
                <div class="absolute w-[50%] right-0 top-0 p-8  gap-4 flex flex-col justify-center h-full">
                    <h2>Klapa va zararli hashorot endi yo'q dep xisoblang !!!</h2>
                    <p>Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kampaniyamiz. Mijozlarimiz bizdan mamnun</p>
                    <div>
                        <Button >Bog'lanish</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="service">
        <div class="container flex flex-col gap-6">
            <h1>Xizmatlar</h1>
            <p>Biz sizga samarali va kafolatli xizmat taqdim etamiz</p>
            <div class="flex mt-4 w-full justify-between gap-4">
                <ServiceCard>
                    <h3>Boshlang’ich tushunchalar</h3>
                    <h5>Nazariy bilimlar</h5>
                    <p>16 dars</p>
                    <div>
                        <img src="../assets/service/service (1).png" alt="" width="50">
                    </div>
                </ServiceCard>
                <ServiceCard>
                    <h3>Boshlang’ich tushunchalar</h3>
                    <h5>Nazariy bilimlar</h5>
                    <p>16 dars</p>
                    <div>
                        <img src="../assets/service/service (2).png" alt="" width="50">
                    </div>
                </ServiceCard>
                <ServiceCard>
                    <h3>Boshlang’ich tushunchalar</h3>
                    <h5>Nazariy bilimlar</h5>
                    <p>16 dars</p>
                    <div>
                        <img src="../assets/service/service (3).png" alt="" width="50">
                    </div>
                </ServiceCard>
    
            </div>
            <div class="p-6 w-full flex gap-24 bg-blue-400 mt-12">
                <img src="../assets/service/service.png" alt="">
                <div class="flex flex-col justify-between">
                    <div>
                        <img src="../assets/service/shit.png" alt="" width="80">
                        <h2 class="mt-6 text-white">Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</h2>
                    </div>
                    <Button class="w-max text-white border-white">Bog’lanish</Button>
                </div>
            </div>
        </div>
    </section>
    <section class="faq">
        <div class="container">
            <div class="flex border-t-2">
                <h1 class=" flex-1">FAQ</h1>
                <!-- <select class="">
                    <option value="">Kursdan nima topaman</option>
                    <option value="">Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi</option>
                </select> -->
            </div>
            <div class="w-full bg-blue-600 p-6 flex relative my-12">
                <div class=" flex-1">
                    <div class="w-96 h-96 bg-white flex-1 p-6 flex flex-col justify-between">
                        <h2>Malumotingizni qoldiring</h2>
                        <div class="flex flex-col gap-6">
                            <input type="text" placeholder="Ism" class="border-2 w-full"/>
                            <input type="text" placeholder="+998" class="border-2 w-full"/>
                            <div class="flex gap-2">
                                <input type="checkbox"/>
                                <p>Maxfiylik siyosati</p>
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
    </section>

</template>