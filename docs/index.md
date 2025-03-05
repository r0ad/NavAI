---
layout: home
layoutClass: 'm-home-layout ai-home-layout'

hero:
  name: NavAI
  text: 让AI成为你的副驾
  tagline: 简单 · 快速 · 强大
  image:
    src: /logo.webp
    alt: AI使用导航
  actions:
    - theme: brand
      text: 🔍 工具库
      link: /tool/
    - theme: brand
      text: 💡 提示词
      link: /promote/
    - theme: brand
      text: 🤖 智能体
      link: /agent/
    - theme: alt
      text: 了解更多
      link: /why-navai

features:
  - icon: 📖
    title: 工具库
    details: 精选当前流行的AI工具，提供详细使用指南和最佳实践，助你快速掌握各类AI工具的使用方法
    link: /tool/
    linkText: 探索工具库
  - title: 提示词
    details: 收集整理高效的提示词模板，针对不同场景和需求，帮助你更好地与AI沟通，获得更精准的回答
    icon: 💡
    link: /promote/
    linkText: 查看提示词
  - title: 智能体
    details: 学习如何构建和定制你自己的AI智能体，实现自动化任务处理，提升工作效率和创新能力
    icon: 🤖
    link: /agent/
    linkText: 了解智能体

customContent: |
  ## 为什么选择 NavAI？

  在人工智能快速发展的今天，各类AI工具层出不穷，如何高效地使用这些工具成为了一个挑战。NavAI 致力于为你提供一站式的AI导航服务，无论你是AI新手还是专业用户，都能在这里找到适合自己的AI工具和使用方法。

  <div class="ai-features-grid">
    <div class="ai-feature-item">
      <div class="ai-feature-icon">🚀</div>
      <h3>快速上手</h3>
      <p>精简的教程和指南，帮助你迅速掌握AI工具的核心功能</p>
    </div>
    <div class="ai-feature-item">
      <div class="ai-feature-icon">🔄</div>
      <h3>持续更新</h3>
      <p>定期更新最新的AI工具和技术，确保你始终走在技术前沿</p>
    </div>
    <div class="ai-feature-item">
      <div class="ai-feature-icon">🌐</div>
      <h3>全面覆盖</h3>
      <p>涵盖文本、图像、音频、视频等多领域的AI工具和应用</p>
    </div>
    <div class="ai-feature-item">
      <div class="ai-feature-icon">👥</div>
      <h3>社区支持</h3>
      <p>加入我们的社区，与其他AI爱好者交流经验和心得</p>
    </div>
  </div>
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}

/* 新增样式 */
.ai-introduction {
  padding: 3rem 1.5rem;
  margin: 2rem 0;
  background: var(--ai-bg-soft);
  border-radius: var(--ai-card-radius);
}

.ai-introduction-content {
  max-width: 1100px;
  margin: 0 auto;
}

.ai-introduction h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: var(--ai-gradient-1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.ai-introduction p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--ai-text-primary);
}

.ai-features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .ai-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .ai-features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.ai-feature-item {
  background: var(--vp-c-bg);
  padding: 1.5rem;
  border-radius: var(--ai-card-radius);
  box-shadow: var(--ai-card-shadow);
  transition: var(--ai-transition);
}

.ai-feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.ai-feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.ai-feature-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.ai-feature-item p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0;
}

.ai-feature-item:nth-child(1) .ai-feature-icon {
  color: var(--ai-accent-3);
}

.ai-feature-item:nth-child(2) .ai-feature-icon {
  color: var(--vp-c-brand-1);
}

.ai-feature-item:nth-child(3) .ai-feature-icon {
  color: var(--ai-accent-2);
}

.ai-feature-item:nth-child(4) .ai-feature-icon {
  color: var(--ai-accent-1);
}
</style>
