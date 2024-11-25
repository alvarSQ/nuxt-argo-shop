const authStore = useAuthStore();

export default defineNuxtRouteMiddleware(to => {
    if (!authStore.isAuthenticated) {
        return navigateTo('/login')
    } 
})
