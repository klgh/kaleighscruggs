<script setup lang="ts">
  import { computed } from "vue";
  import { useRoute, RouterLink } from "vue-router";
  import { marked } from "marked";
  import { ArrowLeft } from "@lucide/vue";
  import SiteShell from "@/components/SiteShell.vue";
  import { getGardenPost } from "@/lib/garden";

  const route = useRoute();
  const slug = computed(() => String(route.params.slug ?? ""));
  const post = computed(() =>
    slug.value ? getGardenPost(slug.value) : undefined,
  );

  const tagClass: Record<string, string> = {
    tech: "garden-tag-tech",
    travel: "garden-tag-travel",
    life: "garden-tag-life",
    baking: "garden-tag-baking",
  };

  const htmlBody = computed(() => {
    if (!post.value) return "";
    return marked.parse(post.value.body, { async: false }) as string;
  });

  const readTime = computed(() => (post.value?.meta.readTime ?? "").trim());
</script>

<template>
  <SiteShell>
    <template v-if="!post">
      <div class="container py-20">
        <p class="font-body text-muted-foreground">Post not found.</p>
        <RouterLink to="/garden"
          class="mt-4 inline-block font-body text-sm font-medium text-accent underline underline-offset-4">
          Back to the garden
        </RouterLink>
      </div>
    </template>

    <article v-else id="post" class="container max-w-2xl py-16 md:py-20">
      <RouterLink to="/garden"
        class="mb-10 inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-accent">
        <ArrowLeft :size="16" :stroke-width="1.75" />
        Back to the garden
      </RouterLink>
      <div class="mb-6 flex flex-wrap items-center gap-3">
        <span :class="tagClass[post.meta.category]">{{ post.meta.category }}</span>
        <span class="font-body text-sm text-muted-foreground">
          {{ post.meta.date }}
          <template v-if="readTime"> · {{ readTime }} read</template>
        </span>
      </div>
      <h1
        class="mb-5 font-display text-4xl font-bold leading-snug tracking-tight text-foreground md:text-5xl md:leading-snug">
        {{ post.meta.title }}
      </h1>
      <p class="mb-12 max-w-[52ch] font-body text-lg leading-relaxed text-muted-foreground">
        {{ post.meta.excerpt }}
      </p>
      <div
        class="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:my-8 prose-img:w-full prose-img:rounded-sm prose-neutral"
        v-html="htmlBody" />
    </article>
  </SiteShell>
</template>
