<script setup lang="ts">
  import { useReveal } from "@/composables/useReveal";

  const links = [
    { label: "GitHub", href: "https://github.com/klgh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kaleigh/" },
    { label: "Instagram", href: "https://instagram.com/klgh.js" },
  ];

  const { el: titleEl, visible: titleVisible } = useReveal();
  const { el: bodyEl, visible: bodyVisible } = useReveal({ delayMs: 100 });
</script>

<template>
  <section id="about" class="no-print border-t border-border pb-28 pt-20 md:pb-36 md:pt-12">
    <div class="container">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div ref="titleEl" class="lg:col-span-4 transition-all duration-500"
          :class="titleVisible ? 'opacity-100' : 'opacity-0'">
          <p class="mb-3 font-body text-sm font-medium tracking-wide text-accent">
            👋 Hello
          </p>
          <h2
            class="font-display text-4xl leading-snug font-bold tracking-tight text-foreground md:text-5xl md:leading-snug">
            About
          </h2>
        </div>

        <div ref="bodyEl" class="lg:col-span-7 lg:col-start-6 transition-all duration-500"
          :class="bodyVisible ? 'opacity-100' : 'opacity-0'">
          <p class="mb-6 max-w-[52ch] font-body text-lg leading-relaxed text-foreground">
            👩🏼‍💻millennial software engineer | Senior Dog Activity Director 🐾 | Genealogy nerd🕵️ plant
            hoarder🌱gluten/dairy-free baker 🍪✨| sometimes comedian🎤| Probably
            reading📚
          </p>
          <!-- <p class="mb-10 max-w-[48ch] font-body leading-relaxed text-muted-foreground">
            When I'm not at a keyboard, you'll find me in a new city, in the
            kitchen, or halfway through a book I should have finished weeks ago.
          </p> -->
          <ul class="flex flex-wrap gap-x-8 gap-y-3">
            <li v-for="link in links" :key="link.label">
              <a :href="link.href" target="_blank" rel="noopener noreferrer"
                class="font-body text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
