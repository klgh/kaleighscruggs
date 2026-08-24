<script setup lang="ts">
import SiteShell from "@/components/SiteShell.vue";
import { usesPage } from "@/data/uses";
</script>

<template>
  <SiteShell>
    <section class="no-print pb-28 pt-20 md:pb-36 md:pt-12">
      <div class="container max-w-3xl">
        <p class="mb-3 font-body text-sm font-medium tracking-wide text-accent">
          🧰 Uses
        </p>
        <h1
          class="mb-4 font-display text-4xl font-bold leading-snug tracking-tight text-foreground md:text-5xl md:leading-snug"
        >
          Uses
        </h1>
        <!-- <p class="mb-14 max-w-[52ch] font-body text-lg leading-relaxed text-muted-foreground">
          {{ usesPage.intro }}
        </p> -->

        <div class="space-y-14">
          <section
            v-for="category in usesPage.categories"
            :key="category.title"
          >
            <h2
              class="mb-6 border-b border-border pb-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground"
            >
              {{ category.title }}
            </h2>
            <ul class="space-y-6">
              <li v-for="item in category.items" :key="item.name">
                <p
                  class="font-display text-lg font-semibold tracking-tight text-foreground"
                >
                  <a
                    v-if="'url' in item && item.url"
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="transition-colors hover:text-accent"
                  >
                    {{ item.name }}
                  </a>
                  <span v-else>{{ item.name }}</span>
                </p>
                <p
                  class="mt-1 max-w-[52ch] font-body text-sm leading-relaxed text-muted-foreground"
                >
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </section>
        </div>

        <p class="mt-16 font-body text-sm text-muted-foreground">
          Check out other awesome
          <a
            href="https://github.com/wesbos/awesome-uses"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
            >uses</a
          >.
        </p>
      </div>
    </section>
  </SiteShell>
</template>
