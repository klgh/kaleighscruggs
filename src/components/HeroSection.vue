<script setup lang="ts">
import { RouterLink } from "vue-router";

/**
 * Brand-first hero — content sits under the nav, not pinned to the viewport bottom.
 */
</script>

<template>
  <section class="no-print relative hero-atmosphere">
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]"
      aria-hidden="true"
    >
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="leaf-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill="currentColor"
              class="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leaf-grid)" />
      </svg>
    </div>

    <div class="container relative z-10 pb-16 pt-28 md:pb-20 md:pt-32">
      <div class="reveal-in max-w-3xl">
        <p class="mb-4 font-body text-sm font-medium tracking-wide text-accent">
          🌱 Digital garden
        </p>
        <h1
          class="mb-6 pb-[0.15em] font-display text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]"
          style="line-height: normal"
        >
          Kaleigh
          <br />
          Scruggs
        </h1>
        <p
          class="mb-8 max-w-[36ch] font-body text-lg text-muted-foreground md:text-xl"
          style="line-height: 1.7"
        >
          my digital garden🪴 a collection of notes I love to share
        </p>
        <div class="flex flex-wrap items-center gap-6">
          <RouterLink
            to="/garden"
            class="inline-flex items-center overflow-visible bg-primary px-6 py-3.5 font-body text-sm font-semibold leading-normal text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            Enter the garden
          </RouterLink>
          <!-- <RouterLink to="/experience"
            class="font-body text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent">
            Experience
          </RouterLink> -->
        </div>
      </div>
    </div>
  </section>
</template>
