import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/pages/IndexPage.vue";
import GardenPage from "@/pages/GardenPage.vue";
import GardenPostPage from "@/pages/GardenPostPage.vue";
// import ExperiencePage from "@/pages/ExperiencePage.vue";
import NowPage from "@/pages/NowPage.vue";
import UsesPage from "@/pages/UsesPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: IndexPage },
    { path: "/garden", name: "garden", component: GardenPage },
    { path: "/garden/:slug", name: "garden-post", component: GardenPostPage },
    // { path: "/experience", name: "experience", component: ExperiencePage },
    { path: "/now", name: "now", component: NowPage },
    { path: "/uses", name: "uses", component: UsesPage },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
