<template>
  <div class="ai-search">
    <div class="ai-search-container">
      <div class="ai-search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input
        type="text"
        class="ai-search-input"
        placeholder="搜索 AI 工具、提示词、智能体..."
        v-model="searchQuery"
        @focus="isFocused = true"
        @blur="handleBlur"
        @keyup.enter="handleSearch"
      />
      <div class="ai-search-button" @click="handleSearch">
        <span>搜索</span>
      </div>
    </div>
    <div class="ai-search-dropdown" v-if="isFocused && searchQuery">
      <div class="ai-search-suggestions">
        <div class="ai-search-category">
          <div class="ai-search-category-title">工具</div>
          <div
            class="ai-search-item"
            v-for="(item, index) in filteredTools"
            :key="'tool-' + index"
            @click="navigateTo(item.link)"
          >
            <div class="ai-search-item-icon tool">📖</div>
            <div class="ai-search-item-content">
              <div class="ai-search-item-title">{{ item.title }}</div>
              <div class="ai-search-item-desc">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div class="ai-search-category">
          <div class="ai-search-category-title">提示词</div>
          <div
            class="ai-search-item"
            v-for="(item, index) in filteredPrompts"
            :key="'prompt-' + index"
            @click="navigateTo(item.link)"
          >
            <div class="ai-search-item-icon prompt">💡</div>
            <div class="ai-search-item-content">
              <div class="ai-search-item-title">{{ item.title }}</div>
              <div class="ai-search-item-desc">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div class="ai-search-category">
          <div class="ai-search-category-title">智能体</div>
          <div
            class="ai-search-item"
            v-for="(item, index) in filteredAgents"
            :key="'agent-' + index"
            @click="navigateTo(item.link)"
          >
            <div class="ai-search-item-icon agent">🤖</div>
            <div class="ai-search-item-content">
              <div class="ai-search-item-title">{{ item.title }}</div>
              <div class="ai-search-item-desc">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const searchQuery = ref('')
const isFocused = ref(false)

// 示例数据，实际使用时可以从配置文件或API获取
const tools = [
  { title: 'ChatGPT', description: 'OpenAI的对话式AI模型', link: '/tool/chatgpt' },
  { title: 'Claude', description: 'Anthropic的对话式AI助手', link: '/tool/claude' },
  { title: 'Midjourney', description: 'AI图像生成工具', link: '/tool/midjourney' },
  { title: 'DALL-E', description: 'OpenAI的图像生成模型', link: '/tool/dall-e' },
]

const prompts = [
  { title: '编程助手', description: '帮助编写和调试代码的提示词', link: '/promote/coding' },
  { title: '内容创作', description: '用于创作文章、博客的提示词', link: '/promote/content' },
  { title: '数据分析', description: '用于数据分析和可视化的提示词', link: '/promote/data' },
]

const agents = [
  { title: '文档助手', description: '自动处理文档的智能体', link: '/agent/doc-assistant' },
  { title: '研究助手', description: '辅助研究和学习的智能体', link: '/agent/research' },
  { title: '创意助手', description: '激发创意和灵感的智能体', link: '/agent/creative' },
]

const filteredTools = computed(() => {
  if (!searchQuery.value) return []
  return tools
    .filter(
      (tool) =>
        tool.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
    .slice(0, 3)
})

const filteredPrompts = computed(() => {
  if (!searchQuery.value) return []
  return prompts
    .filter(
      (prompt) =>
        prompt.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
    .slice(0, 3)
})

const filteredAgents = computed(() => {
  if (!searchQuery.value) return []
  return agents
    .filter(
      (agent) =>
        agent.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
    .slice(0, 3)
})

const handleBlur = () => {
  // 延迟关闭下拉框，以便用户可以点击下拉框中的内容
  setTimeout(() => {
    isFocused.value = false
  }, 200)
}

const handleSearch = () => {
  if (searchQuery.value) {
    // 实际应用中可以跳转到搜索结果页
    console.log('搜索:', searchQuery.value)
  }
}

const navigateTo = (link) => {
  router.go(link)
  searchQuery.value = ''
  isFocused.value = false
}
</script>

<style scoped>
.ai-search {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.ai-search-container {
  display: flex;
  align-items: center;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: var(--ai-card-shadow);
  padding: 0.5rem;
  transition: var(--ai-transition);
}

.ai-search-container:focus-within {
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

.ai-search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  color: var(--vp-c-text-2);
}

.ai-search-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  outline: none;
}

.ai-search-input::placeholder {
  color: var(--vp-c-text-3);
}

.ai-search-button {
  background: var(--ai-gradient-1);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--ai-transition);
}

.ai-search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ai-search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  z-index: 100;
  overflow: hidden;
}

.ai-search-suggestions {
  max-height: 400px;
  overflow-y: auto;
}

.ai-search-category {
  padding: 0.5rem 0;
}

.ai-search-category:not(:last-child) {
  border-bottom: 1px solid var(--vp-c-divider);
}

.ai-search-category-title {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
}

.ai-search-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: var(--ai-transition);
}

.ai-search-item:hover {
  background-color: var(--vp-c-bg-soft);
}

.ai-search-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.ai-search-item-icon.tool {
  background-color: rgba(243, 156, 18, 0.1);
  color: var(--ai-accent-3);
}

.ai-search-item-icon.prompt {
  background-color: rgba(231, 76, 60, 0.1);
  color: var(--ai-accent-2);
}

.ai-search-item-icon.agent {
  background-color: rgba(155, 89, 182, 0.1);
  color: var(--ai-accent-1);
}

.ai-search-item-content {
  flex: 1;
}

.ai-search-item-title {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.ai-search-item-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
</style>
