<template>
  <div class="ai-page-layout">
    <div class="ai-page-header">
      <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
      <p v-if="frontmatter.description" class="ai-page-description">
        {{ frontmatter.description }}
      </p>
    </div>

    <div class="ai-page-content">
      <slot></slot>
    </div>

    <div class="ai-page-footer">
      <div v-if="editLink" class="ai-edit-link">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ai-icon"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          编辑此页
        </a>
      </div>

      <div class="ai-page-nav">
        <div v-if="prev" class="ai-page-nav-item ai-page-nav-prev">
          <a :href="prev.link">
            <span class="ai-page-nav-label">上一页</span>
            <span class="ai-page-nav-title">{{ prev.text }}</span>
          </a>
        </div>

        <div v-if="next" class="ai-page-nav-item ai-page-nav-next">
          <a :href="next.link">
            <span class="ai-page-nav-label">下一页</span>
            <span class="ai-page-nav-title">{{ next.text }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, theme, frontmatter } = useData()

const editLink = computed(() => {
  const { repo, docsDir = '', docsBranch = 'main', docsRepo = repo } = theme.value
  const { relativePath } = page.value

  if (!repo || !relativePath) return null

  return `https://github.com/${docsRepo}/edit/${docsBranch}/${
    docsDir ? `${docsDir}/` : ''
  }${relativePath}`
})

const prev = computed(() => {
  const prevPage = page.value.prev
  return prevPage ? { text: prevPage.text, link: prevPage.link } : null
})

const next = computed(() => {
  const nextPage = page.value.next
  return nextPage ? { text: nextPage.text, link: nextPage.link } : null
})
</script>

<style scoped>
.ai-page-layout {
  padding: 0 var(--vp-layout-padding);
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.ai-page-header {
  padding: 3rem 0 2rem;
  text-align: center;
}

.ai-page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: var(--ai-gradient-1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.ai-page-description {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
  white-space: pre-line;
  word-break: break-word;
}

.ai-page-content {
  min-height: 400px;
}

.ai-page-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.ai-edit-link {
  margin-bottom: 2rem;
  text-align: right;
}

.ai-edit-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: var(--ai-transition);
}

.ai-edit-link a:hover {
  color: var(--vp-c-brand-1);
}

.ai-page-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.ai-page-nav-item {
  max-width: 48%;
}

.ai-page-nav-prev a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ai-page-nav-next a {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.ai-page-nav a {
  text-decoration: none;
  transition: var(--ai-transition);
  padding: 1rem;
  border-radius: var(--ai-card-radius);
  background-color: var(--vp-c-bg-soft);
}

.ai-page-nav a:hover {
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}

.ai-page-nav-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.ai-page-nav-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.ai-icon {
  display: inline-block;
  vertical-align: middle;
}

@media (max-width: 640px) {
  .ai-page-layout {
    padding: 0 1rem;
  }

  .ai-page-header h1 {
    font-size: 2rem;
  }

  .ai-page-description {
    font-size: 1rem;
    padding: 0;
  }

  .ai-page-nav {
    flex-direction: column;
    gap: 1rem;
  }

  .ai-page-nav-item {
    max-width: 100%;
  }
}

@media (min-width: 960px) {
  .ai-page-layout {
    padding: 0 2rem;
  }
}
</style>
