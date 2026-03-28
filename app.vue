<template>
  <div class="app">
    <Head>
      <Title>Sistema de Restaurante</Title>
    </Head>

    <header class="header">
      <div class="logo">
        <span class="logo-icon">&#127869;</span>
        <h1>Easy Rest</h1>
      </div>
      <p class="subtitle">Sistema de Restaurante</p>
    </header>

    <main class="main">
      <section class="hero">
        <h2>Gestiona tu restaurante de forma simple</h2>
        <p>Administra mesas, pedidos, cocina e inventario desde un solo lugar.</p>
      </section>

      <section class="features">
        <div class="card">
          <span class="card-icon">&#128221;</span>
          <h3>Pedidos</h3>
          <p>Registra y gestiona los pedidos de tus clientes en tiempo real.</p>
        </div>

        <div class="card">
          <span class="card-icon">&#129361;</span>
          <h3>Mesas</h3>
          <p>Controla la disponibilidad y asignacion de mesas del local.</p>
        </div>

        <div class="card">
          <span class="card-icon">&#127859;</span>
          <h3>Cocina</h3>
          <p>Vista para cocina con los pedidos pendientes y en preparacion.</p>
        </div>

        <div class="card">
          <span class="card-icon">&#128230;</span>
          <h3>Inventario</h3>
          <p>Lleva el control de insumos y recibe alertas de stock bajo.</p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2026 Easy Rest - Sistema de Restaurante</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #0a0a0a;
  color: #e0e0e0;
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 3rem 1rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-bottom: 2px solid #e94560;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.logo-icon {
  font-size: 2.5rem;
}

.logo h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
}

.subtitle {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #e94560;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.main {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h2 {
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 0.75rem;
}

.hero p {
  font-size: 1.05rem;
  color: #aaa;
  max-width: 500px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
}

.card {
  background: #1a1a2e;
  border: 1px solid #2a2a4a;
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: #e94560;
  transform: translateY(-2px);
}

.card-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.card h3 {
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.9rem;
  color: #999;
  line-height: 1.5;
}

.footer {
  text-align: center;
  padding: 1.5rem;
  color: #555;
  font-size: 0.85rem;
  border-top: 1px solid #1a1a2e;
}
</style>
