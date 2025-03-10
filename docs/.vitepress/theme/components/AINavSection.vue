<template>
  <div class="ai-nav-section">
    <h2 v-if="title" class="ai-nav-section-title">{{ title }}</h2>
    <AIGrid :columns="columns">
      <AICard
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :description="item.desc"
        :icon="item.icon"
        :link="item.link"
        :hover="true"
      />
    </AIGrid>
  </div>
</template>

<script setup>
import AIGrid from './AIGrid.vue'
import AICard from './AICard.vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: [Number, String],
    default: 3,
  },
})
</script>

<style scoped>
.ai-nav-section {
  margin: 2rem 0;
}

.ai-nav-section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}
</style>
