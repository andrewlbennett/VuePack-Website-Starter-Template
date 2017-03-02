
// Base Application
import Vue from 'vue';
import VueRouter from 'vue-router';

// Main Application Wrapper
import App from './App.vue';

// Page Templates
import Home from './Home.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import Services from './Services.vue';
import Portfolio from './Portfolio.vue';

// Allows access to use VueRouter Plugin
Vue.use(VueRouter);

// Configure Routes
const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/contact', component: Contact },
	{ path: '/services', component: Services },
	{ path: '/portfolio', component: Portfolio },

	// Catch all redirect
    { path: '*', redirect: '/' }
];

// Create Router
const router = new VueRouter({
	routes,
	mode: "history"
});

// Init Vue App and Router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
