import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/pages/IndexPage.vue";
import GardenPage from "@/pages/GardenPage.vue";
import GardenPostPage from "@/pages/GardenPostPage.vue";
import NowPage from "@/pages/NowPage.vue";
import UsesPage from "@/pages/UsesPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import { setPageMeta } from "@/lib/meta";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexPage,
      meta: {
        title: "Kaleigh Scruggs",
        description:
          "Software engineer and creator writing about software, baking, travel, and life.",
      },
    },
    {
      path: "/garden",
      name: "garden",
      component: GardenPage,
      meta: {
        title: "Digital Garden",
        description:
          "Notes from Kaleigh Scruggs about software engineering, baking, travel, and life.",
      },
    },
    {
      path: "/garden/:slug",
      name: "garden-post",
      component: GardenPostPage,
    },
    {
      path: "/now",
      name: "now",
      component: NowPage,
      meta: {
        title: "Now",
        description:
          "What Kaleigh Scruggs is currently working on, learning, reading, and exploring.",
      },
    },
    {
      path: "/uses",
      name: "uses",
      component: UsesPage,
      meta: {
        title: "Uses",
        description:
          "The software, hardware, tools, and technology Kaleigh Scruggs uses.",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
      meta: {
        title: "Page Not Found",
        description: "The requested page could not be found.",
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }

    return { top: 0 };
  },
});

router.afterEach((to) => {
  /*
   * Garden posts set their metadata after loading the corresponding
   * Markdown post.
   */
  if (to.name === "garden-post") return;

  const title =
    typeof to.meta.title === "string" ? to.meta.title : "Kaleigh Scruggs";

  const description =
    typeof to.meta.description === "string"
      ? to.meta.description
      : "Notes on software, baking, and travel from Kaleigh Scruggs.";

  setPageMeta({
    title,
    description,
    path: to.path,
  });
});

export default router;
