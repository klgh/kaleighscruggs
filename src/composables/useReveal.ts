import { onMounted, onUnmounted, ref, type Ref } from "vue";

/**
 * Reveals an element once when it enters the viewport (fade/slide up).
 */
export function useReveal(options: { delayMs?: number } = {}): {
  el: Ref<HTMLElement | null>;
  visible: Ref<boolean>;
} {
  const el = ref<HTMLElement | null>(null);
  const visible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!el.value) {
      visible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          window.setTimeout(() => {
            visible.value = true;
          }, options.delayMs ?? 0);
          observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { el, visible };
}
