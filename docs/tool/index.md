---
title: AI 工具库
description: 精选当前流行的AI工具，提供详细使用指南和最佳实践，助你快速掌握各类AI工具的使用方法
useAILayout: false
---

<script setup>
import { NAV_DATA } from './data'
</script>

# AI 工具库

在这里挑选了当前最流行、最实用的 AI 工具，并提供详细的使用指南和最佳实践，帮助你快速掌握这些工具的使用方法。无论你是 AI 新手还是专业用户，都能在这里找到适合自己的 AI 工具。

## 热门

<template v-for="section in NAV_DATA" :key="section.title">
  <AINavSection
    :title="section.title"
    :items="section.items"
    :columns="3"
  />
</template>

<div class="ai-cta-section">
  <h3>想要推荐更多AI工具？</h3>
  <p>如果你有好用的AI工具推荐，欢迎在GitHub上提交Issue或Pull Request</p>
  <div class="ai-cta-buttons">
    <a href="https://github.com/r0ad/NavAI" target="_blank" class="ai-button primary">前往GitHub</a>
  </div>
</div>

<style>
.ai-cta-section {
  margin: 3rem 0;
  padding: 2rem;
  background: var(--ai-bg-soft);
  border-radius: var(--ai-card-radius);
  text-align: center;
}

.ai-cta-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.ai-cta-section p {
  margin-bottom: 1.5rem;
}

.ai-cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
