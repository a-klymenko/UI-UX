<script setup>
import {ref} from 'vue';
import {Home,LayoutGrid,Users,BookOpen,ListChecks,UserRound,Menu,X} from 'lucide-vue-next';
const open=ref(false);
const links=[{path:'/',title:'Головна',icon:Home},{path:'/catalog',title:'Каталог',icon:LayoutGrid},{path:'/community',title:'Спільнота',icon:Users},{path:'/knowledge',title:'Знання',icon:BookOpen},{path:'/requests',title:'Запити',icon:ListChecks},{path:'/profile',title:'Профіль',icon:UserRound}];
</script>
<template><header class="header-wrap container"><div class="topnav"><RouterLink class="brand" to="/" @click="open=false"><img src="/logo_original.png" alt="Логотип ЄдинеСерце"><span>ЄдинеСерце</span></RouterLink><button class="mobile-toggle" type="button" :aria-expanded="open" aria-label="Відкрити меню" @click="open=!open"><X v-if="open"/><Menu v-else/></button><nav class="nav-links" :class="{expanded:open}" aria-label="Основна навігація"><RouterLink v-for="link in links" :key="link.path" :to="link.path" class="nav-item" :class="{current:$route.path===link.path}" @click="open=false"><component :is="link.icon" :size="19"/><span>{{link.title}}</span></RouterLink></nav></div></header></template>