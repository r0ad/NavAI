<template>
  <div class="ai-latest-updates">
    <h2 class="ai-latest-updates-title">最新更新</h2>
    <div class="ai-latest-updates-grid">
      <div v-for="(update, index) in updates" :key="index" class="ai-update-card">
        <div class="ai-update-card-tag" :class="update.type">{{ update.typeText }}</div>
        <h3 class="ai-update-card-title">{{ update.title }}</h3>
        <p class="ai-update-card-desc">{{ update.description }}</p>
        <div class="ai-update-card-footer">
          <span class="ai-update-card-date">{{ update.date }}</span>
          <a v-if="update.link" :href="update.link" class="ai-update-card-link">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 示例数据，实际使用时可以从API或配置文件获取
const updates = [
  {
    title: 'Claude 3.5 Sonnet 发布',
    description:
      '全新的Claude 3.5 Sonnet模型发布，性能大幅提升，支持更长的上下文窗口和更精确的回答。',
    date: '2024-05-15',
    type: 'tool',
    typeText: '工具',
    link: '/tool/claude',
  },
  {
    title: '高效编程提示词模板',
    description: '新增一系列针对编程任务的提示词模板，帮助开发者更高效地使用AI辅助编程。',
    date: '2024-05-10',
    type: 'prompt',
    typeText: '提示词',
    link: '/promote/coding',
  },
  {
    title: '自动化文档智能体',
    description: '学习如何构建一个自动化文档处理智能体，实现文档摘要、信息提取和内容生成。',
    date: '2024-05-05',
    type: 'agent',
    typeText: '智能体',
    link: '/agent/doc-assistant',
  },
  {
    title: 'Midjourney v6 使用指南',
    description: '详细介绍Midjourney v6的新功能和使用技巧，帮助你创作出更精美的AI图像。',
    date: '2024-04-28',
    type: 'tool',
    typeText: '工具',
    link: '/tool/midjourney',
  },
]
</script>

<style scoped>
.ai-latest-updates {
  margin: 4rem 0;
}

.ai-latest-updates-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: var(--ai-gradient-2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.ai-latest-updates-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .ai-latest-updates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .ai-latest-updates-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.ai-update-card {
  background: var(--vp-c-bg);
  border-radius: var(--ai-card-radius);
  padding: 1.5rem;
  box-shadow: var(--ai-card-shadow);
  transition: var(--ai-transition);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ai-update-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.ai-update-card-tag {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  border-bottom-left-radius: var(--ai-card-radius);
}

.ai-update-card-tag.tool {
  background-color: var(--ai-accent-3);
}

.ai-update-card-tag.prompt {
  background-color: var(--ai-accent-2);
}

.ai-update-card-tag.agent {
  background-color: var(--ai-accent-1);
}

.ai-update-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.75rem;
  color: var(--vp-c-text-1);
}

.ai-update-card-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  flex: 1;
}

.ai-update-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.ai-update-card-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.ai-update-card-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: var(--ai-transition);
}

.ai-update-card-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>
