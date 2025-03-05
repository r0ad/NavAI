<template>
  <div class="ai-nav-grid">
    <AINavCard
      type="tool"
      title="工具库"
      description="目前流行AI工具的使用导航"
      icon="📖"
      link="/tool/"
      linkText="点击更多"
    />
    <AINavCard
      type="prompt"
      title="提示词"
      description="一个提示词包含所有"
      icon="💡"
      link="/promote/"
      linkText="点击更多"
    />
    <AINavCard
      type="agent"
      title="智能体"
      description="打造自己的智能体"
      icon="🤖"
      link="/agent/"
      linkText="点击更多"
    />
  </div>
</template>

<script setup>
import AINavCard from './AINavCard.vue'
</script>

<style scoped>
.ai-nav-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (min-width: 640px) {
  .ai-nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .ai-nav-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
