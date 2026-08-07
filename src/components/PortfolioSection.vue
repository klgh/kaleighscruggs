<script setup lang="ts">
import { Printer } from "@lucide/vue";
import { resume, resumeContactLine } from "@/data/resume";

const contactLine = resumeContactLine();

/**
 * On-screen experience section that prints as a single-column ATS-friendly resume.
 */
function printResume(): void {
  window.print();
}
</script>

<template>
  <section id="portfolio" class="border-t border-border pb-28 pt-20 md:pb-36 md:pt-12">
    <div class="container">
      <div class="no-print mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="mb-3 font-body text-sm font-medium tracking-wide text-accent">
            Career
          </p>
          <h2
            class="font-display text-4xl leading-snug font-bold tracking-tight text-foreground md:text-5xl md:leading-snug">
            Experience
          </h2>
          <p class="mt-4 max-w-[42ch] font-body leading-relaxed text-muted-foreground">
            Roles, skills, and community work — print this page for an
            ATS-friendly resume PDF.
          </p>
        </div>

        <button type="button"
          class="inline-flex w-fit items-center gap-2 border border-border bg-background px-5 py-2.5 font-body text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
          @click="printResume">
          <Printer :size="16" :stroke-width="1.75" aria-hidden="true" />
          Print resume
        </button>
      </div>

      <article id="resume" class="resume-doc">
        <header class="resume-header mb-10 border-b border-border pb-8">
          <h1
            class="font-display text-3xl leading-snug font-bold tracking-tight text-foreground md:text-4xl md:leading-snug leading-snug">
            {{ resume.name }}
          </h1>
          <p class="mt-2 font-body text-base font-medium text-accent md:text-lg">
            {{ resume.headline }}
          </p>
          <p class="resume-contact mt-3 font-body text-sm text-muted-foreground">
            {{ contactLine }}
          </p>
          <p class="no-print screen-contact mt-3 flex flex-wrap gap-x-4 gap-y-1 font-body text-sm">
            <span class="text-muted-foreground">{{ resume.location }}</span>
            <a :href="`mailto:${resume.email}`"
              class="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
              {{ resume.email }}
            </a>
            <a v-for="link in resume.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer"
              class="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
              {{ link.label }}
            </a>
          </p>
        </header>

        <section class="resume-block mb-10" aria-labelledby="resume-summary">
          <h2 id="resume-summary"
            class="mb-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Professional Profile
          </h2>
          <p class="max-w-[65ch] font-body leading-relaxed text-muted-foreground">
            {{ resume.summary }}
          </p>
        </section>

        <section class="resume-block mb-10" aria-labelledby="resume-skills">
          <h2 id="resume-skills"
            class="mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Skills
          </h2>
          <ul class="space-y-2 font-body text-sm text-muted-foreground">
            <li v-for="group in resume.skills" :key="group.label">
              <span class="font-semibold text-foreground">{{ group.label }}:</span>
              {{ group.items.join(", ") }}
            </li>
            <li>
              <span class="font-semibold text-foreground">Interests:</span>
              {{ resume.interests.join(", ") }}
            </li>
          </ul>
        </section>

        <section class="resume-block mb-10" aria-labelledby="resume-experience">
          <h2 id="resume-experience"
            class="mb-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Work Experience
          </h2>
          <div class="space-y-8">
            <div v-for="role in resume.experience" :key="`${role.company}-${role.title}-${role.start}`"
              class="resume-role">
              <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 class="font-display text-xl font-semibold tracking-tight text-foreground">
                  {{ role.title }}
                </h3>
                <p class="shrink-0 font-body text-sm text-muted-foreground">
                  {{ role.start }} – {{ role.end }}
                </p>
              </div>
              <p class="mt-1 font-body text-sm font-medium text-foreground">
                {{ role.company }} · {{ role.location }}
              </p>
              <ul class="mt-3 list-disc space-y-1.5 pl-5 font-body text-sm leading-relaxed text-muted-foreground">
                <li v-for="bullet in role.bullets" :key="bullet">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="resume-block mb-10" aria-labelledby="resume-education">
          <h2 id="resume-education"
            class="mb-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Education
          </h2>
          <div class="space-y-5">
            <div v-for="edu in resume.education" :key="edu.school" class="resume-edu">
              <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 class="font-display text-lg font-semibold tracking-tight text-foreground">
                  {{ edu.school }}
                </h3>
                <p class="shrink-0 font-body text-sm text-muted-foreground">
                  {{ edu.start }} – {{ edu.end }}
                </p>
              </div>
              <p class="mt-1 font-body text-sm text-muted-foreground">
                {{ edu.degree }} · {{ edu.location }}
              </p>
            </div>
          </div>
        </section>

        <section class="resume-block" aria-labelledby="resume-volunteer">
          <h2 id="resume-volunteer"
            class="mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Volunteering
          </h2>
          <ul class="space-y-3 font-body text-sm text-muted-foreground">
            <li v-for="item in resume.volunteer" :key="`${item.org}-${item.title}`">
              <span class="font-semibold text-foreground">{{
                item.title
                }}</span>
              — {{ item.org }} ({{ item.dates }})
            </li>
          </ul>
        </section>
      </article>
    </div>
  </section>
</template>
