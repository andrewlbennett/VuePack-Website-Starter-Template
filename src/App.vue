<template>

  <!-- Site Root Element -->
  <div id="app">
    
    <!-- Site Header -->
    <header>
      <nav class="navbar navbar-toggleable-md navbar-inverse">

        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <router-link to="/" class="navbar-brand">VuePack Industries</router-link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  
    <!-- Site Main Container -->
    <main>
      <div class="container">
        <!-- Site Content - This is where the templates will all load. -->
        <router-view></router-view>
      </div>
    </main>

    <!-- Site Footer -->
    <footer class="text-center">Footer</footer>

  </div>
</template>

<!-- Don't need these styles. -->
<style>
  .container { padding: 16rem 0;}
  header { background: #0277BD; }
  main { background: #0288D1; color: white;}
  footer { width: 100%; border-top: 1px solid #e5e5e5; padding: 1rem;}
</style>