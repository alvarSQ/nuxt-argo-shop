import { defineStore } from 'pinia';

const URL = 'https://dummyjson.com/docs/';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref({} as IJwt)
  const userLogin = ref({
    username: '',
    password: '',
    expiresInMins: 30
  } as IUserLogin)

  const getterUserLogin = computed(() => userLogin)

  const authUser = async () => {
    if (userLogin.value.username && userLogin.value.password) {
      try {
        const res = await $fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userLogin.value)
        }
        );
        user.value = res as IJwt
        isAuthenticated.value = true
        navigateTo('/')
      } catch (err) {
        alert('Неправильное имя или пароль')
      }
    } else alert('заполни все поля')
  }


  return { isAuthenticated, user, userLogin, getterUserLogin, authUser }
})
