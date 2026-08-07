<script setup lang="ts">
  import { RouterLink } from "vue-router";

  const year = new Date().getFullYear();

  const links = [
    { label: "Garden", to: "/garden" },
    // { label: "Experience", to: "/experience" },
    { label: "Now", to: "/now" },
    { label: "Uses", to: "/uses" },
    { label: "About", to: "/#about" },
  ];
</script>

<template>
  <footer class="no-print border-t border-border pb-12 pt-10">
    <div class="container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="font-display text-sm font-semibold tracking-tight text-foreground">
          © {{ year }} Kaleigh Scruggs
        </p>
        <p class="mt-1 font-body text-xs text-muted-foreground">
          A
          <a href="https://maggieappleton.com/garden-history" target="_blank" rel="noopener noreferrer"
            class="underline transition-colors duration-200 hover:text-foreground">
            digital garden</a>, tended with care 🌿
        </p>
      </div>
      <nav aria-label="Footer" class="flex flex-wrap gap-x-6 gap-y-2">
        <component :is="link.to.startsWith('/#') ? 'a' : RouterLink" v-for="link in links" :key="link.label"
          v-bind="link.to.startsWith('/#') ? { href: link.to } : { to: link.to }"
          class="font-body text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground">
          {{ link.label }}
        </component>
        <a href="https://github.com/klgh" target="_blank" rel="noopener noreferrer"
          class="font-body text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground">
          GitHub
        </a>
      </nav>
    </div>
  </footer>
</template>
