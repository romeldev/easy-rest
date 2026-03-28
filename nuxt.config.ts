// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
  ssr: true,
  app: {
    baseURL: '/easy-rest/'
  },
  nitro: {
    preset: 'static'
  },
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
    key: process.env.SUPABASE_KEY || 'placeholder-key'
  }
})
