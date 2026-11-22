<script setup>
import {computed,ref} from 'vue';
import {centers} from '../data/demo.js';
import {Droplet,Network,FileText,HeartHandshake} from 'lucide-vue-next';
const icons={drop:Droplet,network:Network,file:FileText,heart:HeartHandshake};
const term=ref('');const filter=ref('Усі категорії');
const choices=['Усі категорії','Кров','Кістковий мозок','Лікування','Партнери'];
const results=computed(()=>centers.filter(x=>(filter.value==='Усі категорії'||filter.value==='Партнери'&&x.kind==='Лікування'||filter.value===x.kind)&&`${x.title} ${x.description} ${x.partners?.map(p=>p.title).join(' ')||''}`.toLocaleLowerCase('uk').includes(term.value.toLocaleLowerCase('uk'))));</script>
<template>
<div class="page-intro">
    <h1>Каталог можливостей</h1>
    <p>Оберіть тип допомоги або відкрийте офіційні партнерські ресурси.</p>
    </div>
    <div class="catalog-toolbar">
        <input aria-label="Пошук у каталозі" v-model="term" class="catalog-search" type="search" placeholder="⌕  Пошук у каталозі..."/>
        <div class="filter-pills">
            <button v-for="choice in choices" :key="choice" :class="{active:filter===choice}" @click="filter=choice">{{choice}}</button>
        </div>
    </div>
        <div class="directory-list"><article v-for="item in results" :key="item.title" class="surface directory-card"><div class="directory-icon">
            <component :is="icons[item.icon]" :size="29"/>
        </div>
            <div class="directory-copy">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div v-if="item.partners" class="partner-list">
            <template v-for="partner in item.partners" :key="partner.title">
            <a v-if="partner.url" class="partner-chip" :href="partner.url" target="_blank" rel="noopener noreferrer">{{partner.title}} ↗</a>
            <span v-else class="partner-chip">{{partner.title}}</span>
        </template>
    </div>
</div>
            <a v-if="item.url" :href="item.url" class="btn-secondary" rel="noopener noreferrer" target="_blank">Офіційний ресурс ↗</a>
        <span v-else class="small-kicker">Каталог організацій</span>
    </article>
    <p v-if="!results.length" class="surface empty-state">Нічого не знайдено. Спробуйте інший запит.</p>
    </div>
    </template>