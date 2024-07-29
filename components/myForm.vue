<template>
  <!-- <div class="absolute w-full">
    <UNotification
      :show="notification"
      icon="i-heroicons-check-badge"
      color="blue"
      :id="6"
      title="Notification"
      description="This is a notification."
      :timeout="6000"
      :close="closeNotification"
    />
  </div> -->

  <form
    id="myForm"
    @submit.prevent="submitForm"
    class="gap-6 bg-white w-full p-2 md:p-4 flex flex-col justify-between"
  >
    <h2>{{ $t("form.title") }}</h2>
    <div class="flex flex-col gap-6">
      <input
        v-model="formData.name"
        required
        type="text"
        :placeholder="$t('form.placeholder')"
        class="border-2 w-full text-xs md:text-lg"
      />
      <input
        v-model="formData.phone"
        required
        type="number"
        placeholder="+998"
        class="border-2 w-full text-xs md:text-lg"
      />
      <div class="flex gap-2">
        <input type="checkbox" id="myChekbox" class="w-8" />
        <label for="myChekbox">{{ $t("form.chekbox") }}</label>
      </div>
    </div>
    <button
      type="submit"
      class="w-full py-2 bg-black text-white"
      label="Show toast"

    >
      <span v-if="loading">{{ $t("form.loadingBtn") }}</span>
      <span v-else>{{ $t("form.button") }}</span>
    </button>
  </form>
</template>

<script setup>
import axios from "axios";
const toast = useToast();
const formData = ref({
  name: "",
  phone: "",
  token: "7286785147:AAHMzIsD7ZjnQFIqdP-Gf4BSrciqcAz4UyQ",
  chat_id: "6507400166",
});
const loading = ref(false);

const submitForm = () => {
  loading.value = true;
  const messageContent = `Ismi: ${
    formData.value.name
  } \nPhone: ${formData.value.phone.toString()}`;
  axios({
    url: `https://api.telegram.org/bot${formData.value.token}/sendMessage`,
    method: "post",
    data: {
      chat_id: formData.value.chat_id,
      text: messageContent,
    },
  })
    .then(() => {
      document.getElementById("myForm").reset();
      formData.value.name = "";
      formData.value.phone = "";
      toast.add({
        title: "Xabaringiz yuborildi",
      });
    })
    .catch((errorMessages) => console.log("Yuborilmadi: ", errorMessages))
    .finally(() => (loading.value = false));
};
</script>
