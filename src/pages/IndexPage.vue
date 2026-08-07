<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import GardenSection from "@/components/GardenSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-[100dvh] bg-background">
    <a href="#main" class="skip-link">Skip to content</a>
    <div class="grain-overlay no-print" aria-hidden="true" />
    <Navbar />
    <main id="main">
      <HeroSection />
      <GardenSection mode="featured" />
      <AboutSection />
    </main>
    <Footer />
  </div>
</template>
