import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CatalogView from '../views/CatalogView.vue';
import CommunityView from '../views/CommunityView.vue';
import KnowledgeView from '../views/KnowledgeView.vue';
import RequestsView from '../views/RequestsView.vue';
import ProfileView from '../views/ProfileView.vue';
import RequestFormView from '../views/RequestFormView.vue';
import RequestDetailView from '../views/RequestDetailView.vue';
const router = createRouter({ history:createWebHistory(), scrollBehavior(){return {top:0}}, routes:[
{path:'/',name:'home',component:HomeView}, {path:'/catalog',name:'catalog',component:CatalogView},
{path:'/community',name:'community',component:CommunityView}, {path:'/knowledge',name:'knowledge',component:KnowledgeView},
{path:'/requests',name:'requests',component:RequestsView}, {path:'/requests/new',name:'request-new',component:RequestFormView},
{path:'/requests/:id',name:'request-detail',component:RequestDetailView},
{path:'/profile',name:'profile',component:ProfileView},
{path:'/:pathMatch(.*)*',redirect:'/'}]});
export default router;