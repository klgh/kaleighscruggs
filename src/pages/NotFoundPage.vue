<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

onMounted(() => {
  console.error(
    "404 Error: User attempted to access non-existent route:",
    route.path,
  );
});
</script>

<template>
  <div class="relative flex min-h-[100dvh] items-center hero-atmosphere">
    <div class="grain-overlay" aria-hidden="true" />
    <div class="container relative z-10 max-w-lg">
      <p class="mb-3 font-body text-sm font-medium tracking-wide text-accent">
        404
      </p>
      <h1
        class="mb-4 font-display text-4xl leading-snug font-bold tracking-tight text-foreground md:text-5xl md:leading-snug"
      >
        Page not found
      </h1>
      <p
        class="mb-8 max-w-[40ch] font-body leading-relaxed text-muted-foreground"
      >
        That path isn't planted here. Head back to the garden and try another
        trail.
      </p>
      <RouterLink
        to="/"
        class="inline-flex items-center bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
      >
        Return home
      </RouterLink>
    </div>
  </div>
</template>
