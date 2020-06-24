import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Sections from '@/components/Sections.vue';
import Projects from '@/components/Projects.vue';
import Resume from '@/components/Resume.vue';
import Contact from '@/components/Contact.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/sections',
    name: 'Sections',
    component: Sections
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
      return { x: 0, y: 0 };
    }
    
  })



  export default router