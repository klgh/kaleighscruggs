import { flushPromises, mount } from "@vue/test-utils";
import { createMemoryHistory, createRouter } from "vue-router";
import { describe, expect, it } from "vitest";
import GardenPostPage from "@/pages/GardenPostPage.vue";

describe("garden post links", () => {
  it("shows the back control and markdown links as links", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: "/garden/:slug", component: GardenPostPage },
        { path: "/garden", component: { template: "<div />" } },
        { path: "/", component: { template: "<div />" } },
        { path: "/now", component: { template: "<div />" } },
        { path: "/uses", component: { template: "<div />" } },
      ],
    });

    await router.push("/garden/asheville");
    await router.isReady();

    const wrapper = mount(GardenPostPage, {
      global: { plugins: [router] },
    });
    await flushPromises();

    const back = wrapper
      .findAll("a")
      .find((anchor) => anchor.text().includes("Back to the garden"));
    expect(back?.classes()).toContain("text-link");

    const body = wrapper.get(".garden-prose");
    const docLink = body.get("a");
    expect(docLink.attributes("href")).toContain("docs.google.com");
    expect(docLink.text()).toBe(
      "Visit my list on places to visit in Asheville",
    );
  });
});
