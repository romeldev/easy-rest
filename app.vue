<template>
  <div class="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
    <Head>
      <Title>Sistema de Restaurante</Title>
    </Head>

    <header class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b-2 border-red-500 py-12 px-4 text-center">
      <div class="flex items-center justify-center gap-3">
        <span class="text-4xl">&#127869;</span>
        <h1 class="text-4xl font-bold text-white">Easy Rest</h1>
      </div>
      <p class="mt-2 text-lg text-red-400 font-medium tracking-wide">Sistema de Restaurante</p>
    </header>

    <main class="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
      <section class="text-center mb-10">
        <h2 class="text-2xl font-semibold text-white mb-3">Gestiona tu restaurante de forma simple</h2>
        <p class="text-gray-400 max-w-lg mx-auto">Administra mesas, pedidos, cocina e inventario desde un solo lugar.</p>
      </section>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <UCard v-for="feature in features" :key="feature.title">
          <div class="flex items-start gap-4">
            <span class="text-3xl">{{ feature.icon }}</span>
            <div>
              <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="text-sm text-gray-400 mt-1">{{ feature.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </main>

    <footer class="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
      <p>&copy; 2026 Easy Rest - Sistema de Restaurante</p>
    </footer>
  </div>
</template>

<script setup>
const features = [
  {
    icon: '\u{1F4DD}',
    title: 'Pedidos',
    description: 'Registra y gestiona los pedidos de tus clientes en tiempo real.'
  },
  {
    icon: '\u{1F961}',
    title: 'Mesas',
    description: 'Controla la disponibilidad y asignacion de mesas del local.'
  },
  {
    icon: '\u{1F373}',
    title: 'Cocina',
    description: 'Vista para cocina con los pedidos pendientes y en preparacion.'
  },
  {
    icon: '\u{1F4E6}',
    title: 'Inventario',
    description: 'Lleva el control de insumos y recibe alertas de stock bajo.'
  }
]
</script>
