// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap';
document.head.appendChild(link);

createApp(App).mount('#app')
