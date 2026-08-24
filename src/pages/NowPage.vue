<script setup lang="ts">
import SiteShell from "@/components/SiteShell.vue";
import { nowPage } from "@/data/now";
</script>

<template>
  <SiteShell>
    <section class="no-print pb-28 pt-20 md:pb-36 md:pt-12">
      <div class="container max-w-2xl">
        <p class="mb-3 font-body text-sm font-medium tracking-wide text-accent">
          ✨ Now
        </p>
        <h1
          class="mb-4 font-display text-4xl font-bold leading-snug tracking-tight text-foreground md:text-5xl md:leading-snug"
        >
          What I'm doing now
        </h1>
        <p class="mb-2 font-body text-sm text-muted-foreground">
          Updated {{ nowPage.updated }}
        </p>
        <p
          class="mb-12 max-w-[52ch] font-body text-lg leading-relaxed text-muted-foreground"
        >
          {{ nowPage.intro }}
        </p>

        <div class="space-y-12">
          <section v-for="section in nowPage.sections" :key="section.title">
            <h2
              class="mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground"
            >
              {{ section.title }}
            </h2>
            <ul
              class="list-disc space-y-2 pl-5 font-body leading-relaxed text-muted-foreground"
            >
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
          </section>
        </div>

        <p class="mt-16 font-body text-sm text-muted-foreground">
          This is a
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
            >/now</a
          >
          page.
        </p>
      </div>
    </section>
  </SiteShell>
</template>
