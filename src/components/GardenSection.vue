<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { ArrowUpRight } from "@lucide/vue";
import {
  getFeaturedGardenPosts,
  getGardenPosts,
  type GardenCategory,
  type GardenPost,
} from "@/lib/garden";
import { useReveal } from "@/composables/useReveal";

type Category = "all" | GardenCategory;
type GardenMode = "all" | "featured";

const props = withDefaults(
  defineProps<{
    /** `featured` shows only posts with featured: true; `all` is the full garden */
    mode?: GardenMode;
  }>(),
  { mode: "all" },
);

const active = ref<Category>("all");
const { el: headerEl, visible: headerVisible } = useReveal();

const tagClass: Record<string, string> = {
  tech: "garden-tag-tech",
  travel: "garden-tag-travel",
  life: "garden-tag-life",
  baking: "garden-tag-baking",
};

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "💻 Tech", value: "tech" },
  { label: "✈️ Travel", value: "travel" },
  { label: "🌿 Life", value: "life" },
  { label: "🧁 Baking", value: "baking" },
];

const sourcePosts = computed(() =>
  props.mode === "featured" ? getFeaturedGardenPosts() : getGardenPosts(),
);

const categoriesWithPosts = computed(() => {
  const set = new Set<GardenCategory>();
  for (const post of sourcePosts.value) {
    set.add(post.meta.category);
  }
  return set;
});

const visibleFilters = computed(() =>
  filters.filter(
    (filter) =>
      filter.value === "all" || categoriesWithPosts.value.has(filter.value),
  ),
);

const filtered = computed(() => {
  const posts = sourcePosts.value;
  if (props.mode === "featured") {
    return posts;
  }
  const isActiveVisible =
    active.value === "all" || categoriesWithPosts.value.has(active.value);
  if (active.value === "all" || !isActiveVisible) {
    return posts;
  }
  return posts.filter((p) => p.meta.category === active.value);
});

const lead = computed(() => filtered.value[0] as GardenPost | undefined);
const rest = computed(() => filtered.value.slice(1));

const isHomePreview = computed(() => props.mode === "featured");
</script>

<template>
  <section
    id="garden"
    class="no-print pb-24 md:pb-28"
    :class="isHomePreview ? 'pt-10 md:pt-14' : 'pt-16 md:pt-20'"
  >
    <div class="container">
      <div
        class="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
      >
        <div
          ref="headerEl"
          class="max-w-xl transition-all duration-500"
          :class="headerVisible ? 'opacity-100' : 'opacity-0'"
        >
          <p
            class="mb-3 font-body text-sm font-medium tracking-wide text-accent"
          >
            {{ isHomePreview ? "🌱 Growing" : "📚 Archive" }}
          </p>
          <h2
            class="font-display text-4xl font-bold leading-snug tracking-tight text-foreground md:text-5xl md:leading-snug"
          >
            {{ isHomePreview ? "From the garden" : "The garden" }}
          </h2>
          <!-- <p class="mt-3 max-w-[42ch] font-body leading-relaxed text-muted-foreground">
            <template v-if="isHomePreview">
              A few notes I'm featuring right now — the full garden has more.
            </template>
<template v-else>
              Seeds of ideas, half-formed thoughts, and notes that stuck around long enough to
              publish.
            </template>
</p> -->
        </div>

        <div
          v-if="!isHomePreview && visibleFilters.length > 1"
          class="flex flex-wrap gap-x-5 gap-y-2"
          role="tablist"
          aria-label="Filter posts"
        >
          <button
            v-for="f in visibleFilters"
            :key="f.value"
            type="button"
            role="tab"
            :aria-selected="active === f.value"
            class="font-body text-sm transition-colors duration-200"
            :class="
              active === f.value
                ? 'font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8'
                : 'text-muted-foreground hover:text-foreground'
            "
            @click="active = f.value"
          >
            {{ f.label }}
          </button>
        </div>

        <RouterLink
          v-else-if="isHomePreview"
          to="/garden"
          class="shrink-0 font-body text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          View all posts
        </RouterLink>
      </div>

      <p v-if="filtered.length === 0" class="font-body text-muted-foreground">
        <template v-if="isHomePreview">
          Nothing featured on the home page yet —
          <RouterLink
            to="/garden"
            class="underline underline-offset-4 hover:text-accent"
            >browse the garden</RouterLink
          >
          .
        </template>
        <template v-else>Nothing planted in this bed yet.</template>
      </p>

      <!-- Home: equal-weight grid so a few featured posts stay balanced -->
      <div
        v-else-if="isHomePreview"
        class="grid gap-10 border-t border-foreground/15 pt-8 sm:grid-cols-2 sm:gap-x-12"
      >
        <RouterLink
          v-for="post in filtered"
          :key="post.slug"
          :to="`/garden/${post.slug}`"
          class="group flex flex-col"
        >
          <div class="mb-4 flex items-center gap-3">
            <span :class="tagClass[post.meta.category]">{{
              post.meta.category
            }}</span>
            <span
              v-if="post.meta.date"
              class="font-body text-xs text-muted-foreground"
            >
              {{ post.meta.date }}
            </span>
          </div>
          <h3
            class="mb-3 font-display text-2xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent md:text-[1.65rem] md:leading-snug"
          >
            {{ post.meta.title }}
          </h3>
          <p
            class="mb-5 max-w-[40ch] flex-1 font-body text-sm leading-relaxed text-muted-foreground"
          >
            {{ post.meta.excerpt }}
          </p>
          <span
            class="inline-flex items-center gap-1.5 font-body text-sm font-medium text-foreground transition-transform duration-200 group-hover:translate-x-0.5"
          >
            Read
            <ArrowUpRight
              :size="16"
              :stroke-width="1.75"
              class="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </RouterLink>
      </div>

      <!-- Full archive: lead + sidebar list -->
      <div v-else class="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div v-if="lead" class="lg:col-span-7">
          <RouterLink
            :to="`/garden/${lead.slug}`"
            class="group block border-t border-foreground/15 pt-8 transition-colors duration-200 hover:border-accent"
          >
            <div class="mb-5 flex items-center gap-3">
              <span :class="tagClass[lead.meta.category]">{{
                lead.meta.category
              }}</span>
              <span
                v-if="lead.meta.date"
                class="font-body text-xs text-muted-foreground"
              >
                {{ lead.meta.date }}
              </span>
            </div>
            <h3
              class="mb-4 font-display text-3xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent md:text-4xl md:leading-snug"
            >
              {{ lead.meta.title }}
            </h3>
            <p
              class="mb-6 max-w-[48ch] font-body text-base leading-relaxed text-muted-foreground"
            >
              {{ lead.meta.excerpt }}
            </p>
            <span
              class="inline-flex items-center gap-1.5 font-body text-sm font-medium text-foreground transition-transform duration-200 group-hover:translate-x-0.5"
            >
              Read
              <ArrowUpRight
                :size="16"
                :stroke-width="1.75"
                class="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </RouterLink>
        </div>

        <div class="flex flex-col lg:col-span-5">
          <RouterLink
            v-for="post in rest"
            :key="post.slug"
            :to="`/garden/${post.slug}`"
            class="group flex flex-col gap-3 border-t border-border py-7 transition-colors duration-200 hover:border-accent/50"
          >
            <div class="flex items-center justify-between gap-3">
              <span :class="tagClass[post.meta.category]">{{
                post.meta.category
              }}</span>
              <span
                v-if="post.meta.date"
                class="font-body text-xs text-muted-foreground"
              >
                {{ post.meta.date }}
              </span>
            </div>
            <h3
              class="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent"
            >
              {{ post.meta.title }}
            </h3>
            <p
              class="font-body text-sm leading-relaxed text-muted-foreground line-clamp-2"
            >
              {{ post.meta.excerpt }}
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
