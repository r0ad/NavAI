<template>
  <div class="ai-home">
    <div class="ai-hero">
      <div class="ai-hero-content">
        <h1 class="ai-hero-title">
          <span class="ai-hero-name">{{ frontmatter.hero.name }}</span>
          <span class="ai-hero-text">{{ frontmatter.hero.text }}</span>
        </h1>
        <p class="ai-hero-tagline">{{ frontmatter.hero.tagline }}</p>
        <div class="ai-hero-actions">
          <a
            v-for="action in frontmatter.hero.actions"
            :key="action.link"
            :href="action.link"
            class="ai-hero-action"
            :class="action.theme"
          >
            {{ action.text }}
          </a>
        </div>
      </div>
      <div class="ai-hero-image">
        <img
          v-if="frontmatter.hero.image"
          :src="frontmatter.hero.image.src"
          :alt="frontmatter.hero.image.alt"
          class="ai-hero-image-src"
        />
      </div>
    </div>

    <!-- 导航 todo -->

    <!-- <div class="ai-search-section">
      <AISearch />
    </div> -->

    <div class="ai-features">
      <AINavGrid />
    </div>

    <div class="ai-why-section">
      <div class="ai-introduction">
        <div class="ai-introduction-content">
          <h2>为什么选择 NavAI？</h2>
          <p>
            在人工智能快速发展的今天，各类AI工具层出不穷，如何高效地使用这些工具成为了一个挑战。NavAI
            致力于为你提供一站式的AI导航服务，无论你是AI新手还是专业用户，都能在这里找到适合自己的AI工具和使用方法。
          </p>
          <div class="ai-learn-more">
            <a href="/why-navai" class="ai-learn-more-link">
              了解更多
              <span class="ai-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 更新 todo -->

    <!-- <div class="ai-updates-section">
      <AILatestUpdates />
    </div> -->

    <div class="ai-footer">
      <div class="ai-footer-content">
        <p>NavAI - 让AI成为你的副驾</p>
        <div class="ai-footer-links">
          <a href="https://github.com/r0ad/NavAI" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ai-icon"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import AINavGrid from './AINavGrid.vue'
import AILatestUpdates from './AILatestUpdates.vue'
import AISearch from './AISearch.vue'

const { frontmatter } = useData()
</script>

<style scoped>
.ai-home {
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.ai-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0;
  position: relative;
}

.ai-hero-content {
  z-index: 1;
}

.ai-hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.ai-hero-name {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  color: var(--vp-home-hero-name-color);
  display: block;
  margin-bottom: 0.5rem;
}

.ai-hero-text {
  display: block;
  color: var(--vp-c-text-1);
}

.ai-hero-tagline {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.ai-hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.ai-hero-action {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: var(--ai-transition);
  text-decoration: none;
}

.ai-hero-action.brand {
  background: var(--ai-gradient-1);
  color: white;
}

.ai-hero-action.alt {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.ai-hero-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.ai-hero-image {
  position: relative;
  margin-top: 3rem;
  width: 100%;
  max-width: 300px;
}

.ai-hero-image-src {
  width: 100%;
  height: auto;
  transition: var(--ai-transition);
  animation: float 6s ease-in-out infinite;
}

.ai-hero-image::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  z-index: -1;
  border-radius: 50%;
}

.ai-search-section {
  margin: 2rem 0;
}

.ai-features {
  padding: 2rem 0 4rem;
}

.ai-why-section {
  margin: 2rem 0;
}

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

.ai-introduction-content h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  background: var(--ai-gradient-1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.ai-introduction-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--ai-text-primary);
}

.ai-learn-more {
  text-align: right;
}

.ai-learn-more-link {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: var(--ai-transition);
}

.ai-learn-more-link:hover {
  color: var(--vp-c-brand-2);
}

.ai-arrow {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.ai-learn-more-link:hover .ai-arrow {
  transform: translateX(4px);
}

.ai-updates-section {
  padding: 2rem 0;
  background: var(--ai-bg-soft);
  border-radius: var(--ai-card-radius);
  margin: 2rem 0;
}

.ai-footer {
  padding: 2rem 0;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 4rem;
}

.ai-footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ai-footer-links {
  display: flex;
  gap: 1rem;
}

.ai-icon {
  color: var(--vp-c-text-2);
  transition: var(--ai-transition);
}

.ai-icon:hover {
  color: var(--vp-c-brand-1);
}

@media (min-width: 640px) {
  .ai-hero {
    padding: 6rem 0;
  }

  .ai-hero-title {
    font-size: 3rem;
  }

  .ai-hero-image {
    max-width: 400px;
  }
}

@media (min-width: 960px) {
  .ai-hero {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 8rem 0;
  }

  .ai-hero-content {
    max-width: 50%;
  }

  .ai-hero-actions {
    justify-content: flex-start;
  }

  .ai-hero-image {
    margin-top: 0;
  }
}

/* 添加浮动动画 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
