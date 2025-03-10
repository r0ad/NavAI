---
title: AI 提示词库
description: 收集整理高效的提示词模板，针对不同场景和需求，帮助你更好地与AI沟通，获得更精准的回答
useAILayout: false
---

<script setup>
import { NAV_DATA } from './data'
</script>

# AI 提示词库

提示词（Prompt）是与 AI 模型交互的关键。一个好的提示词可以帮助你获得更精准、更有用的回答。在这里，我们收集整理了各种场景下的高效提示词模板，帮助你更好地与 AI 沟通。

## 热门

<template v-for="section in NAV_DATA" :key="section.title">
  <AINavSection
    :title="section.title"
    :items="section.items"
    :columns="3"
  />
</template>

## 提示词工程技巧

良好的提示词工程（Prompt Engineering）可以显著提高 AI 输出的质量。以下是一些关键技巧：

1. **明确指定角色**：告诉 AI 应该以什么角色或专业身份回答
2. **提供详细上下文**：包括背景信息、目标和约束条件
3. **使用结构化格式**：清晰地组织你的提示词，使用编号或分段
4. **指定输出格式**：明确你希望得到的回答格式（列表、表格、段落等）
5. **迭代优化**：根据 AI 的回答调整你的提示词，不断改进

<div class="ai-cta-section">
  <h3>想要分享你的提示词？</h3>
  <p>如果你有高效的提示词模板，欢迎在GitHub上提交贡献</p>
  <div class="ai-cta-buttons">
    <a href="https://github.com/r0ad/NavAI" target="_blank" class="ai-button primary">前往GitHub</a>
  </div>
</div>

<style>
.ai-prompt-example {
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--ai-card-radius);
  font-size: 0.9rem;
}

.ai-prompt-example p {
  margin: 0;
}

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
