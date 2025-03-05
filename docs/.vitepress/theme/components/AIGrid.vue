<template>
  <div class="ai-grid" :class="[`ai-grid-${columns}`]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: [Number, String],
    default: 3,
    validator: (value) => {
      const num = Number(value)
      return !isNaN(num) && num > 0 && num <= 4
    },
  },
})
</script>

<style scoped>
.ai-grid {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.ai-grid-1 {
  grid-template-columns: 1fr;
}

.ai-grid-2 {
  grid-template-columns: repeat(1, 1fr);
}

.ai-grid-3 {
  grid-template-columns: repeat(1, 1fr);
}

.ai-grid-4 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .ai-grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .ai-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .ai-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .ai-grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .ai-grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
