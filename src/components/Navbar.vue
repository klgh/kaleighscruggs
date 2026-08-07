<script setup lang="ts">
  import { ref } from "vue";
  import { RouterLink, useRoute } from "vue-router";
  import { Menu, X } from "@lucide/vue";
  import ksLogo from "@/assets/kslogo.svg";

  const route = useRoute();
  const open = ref(false);

  const navLinks = [
    { label: "Garden", to: "/garden" },
    // { label: "Experience", to: "/experience" },
    { label: "Now", to: "/now" },
    { label: "Uses", to: "/uses" },
    { label: "About", to: "/#about" },
  ];

  /**
   * Returns whether a nav destination matches the current route.
   */
  function isActive(to: string): boolean {
    if (to.startsWith("/#")) {
      return route.path === "/" && route.hash === to.slice(1);
    }
    if (to === "/garden") {
      return route.path === "/garden" || route.path.startsWith("/garden/");
    }
    return route.path === to;
  }
</script>

<template>
  <nav class="no-print fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
    <div class="container flex h-16 items-center justify-between">
      <RouterLink to="/"
        class="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-80">
        <img :src="ksLogo" alt="" class="h-5 w-auto shrink-0" width="32" height="24" aria-hidden="true" />
        kaleigh scruggs
      </RouterLink>

      <div class="hidden items-center gap-8 lg:flex">
        <component :is="link.to.startsWith('/#') ? 'a' : RouterLink" v-for="link in navLinks" :key="link.label"
          v-bind="link.to.startsWith('/#') ? { href: link.to } : { to: link.to }"
          class="font-body text-sm font-medium transition-colors duration-200" :class="isActive(link.to)
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
            ">
          {{ link.label }}
        </component>
      </div>

      <button type="button" class="text-foreground transition-transform duration-200 active:scale-95 lg:hidden"
        :aria-expanded="open" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
        <X v-if="open" :size="20" :stroke-width="1.75" />
        <Menu v-else :size="20" :stroke-width="1.75" />
      </button>
    </div>

    <div v-show="open" class="overflow-hidden border-b border-border bg-background lg:hidden">
      <div class="flex flex-col gap-1 px-6 pb-5 pt-1">
        <component :is="link.to.startsWith('/#') ? 'a' : RouterLink" v-for="link in navLinks" :key="link.label"
          v-bind="link.to.startsWith('/#') ? { href: link.to } : { to: link.to }"
          class="py-2.5 font-body text-sm font-medium transition-colors duration-200" :class="isActive(link.to)
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
            " @click="open = false">
          {{ link.label }}
        </component>
      </div>
    </div>
  </nav>
</template>
