<template>
  <div class="ai-nav-card" :class="type">
    <div class="ai-nav-card-icon">
      <slot name="icon">
        <div class="default-icon">{{ icon }}</div>
      </slot>
    </div>
    <div class="ai-nav-card-content">
      <h3 class="ai-nav-card-title">{{ title }}</h3>
      <p class="ai-nav-card-description">{{ description }}</p>
      <div class="ai-nav-card-footer">
        <a v-if="link" :href="link" class="ai-nav-card-link">{{ linkText || '了解更多' }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '🔍',
  },
  type: {
    type: String,
    default: 'tool',
    validator: (value) => ['tool', 'prompt', 'agent'].includes(value),
  },
  link: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.ai-nav-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--ai-card-radius);
  overflow: hidden;
  transition: var(--ai-transition);
  height: 100%;
  position: relative;
  box-shadow: var(--ai-card-shadow);
}

.ai-nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.ai-nav-card.tool {
  border-top: 3px solid var(--ai-accent-3);
}

.ai-nav-card.prompt {
  border-top: 3px solid var(--ai-accent-2);
}

.ai-nav-card.agent {
  border-top: 3px solid var(--ai-accent-1);
}

.ai-nav-card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  font-size: 2.5rem;
}

.default-icon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(var(--vp-c-brand-1), 0.1);
}

.ai-nav-card-content {
  padding: 0 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ai-nav-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.ai-nav-card-description {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  flex: 1;
}

.ai-nav-card-footer {
  margin-top: auto;
}

.ai-nav-card-link {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: var(--ai-transition);
}

.ai-nav-card-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.tool .ai-nav-card-link {
  color: var(--ai-accent-3);
}

.tool .ai-nav-card-link:hover {
  color: var(--ai-accent-3);
}

.prompt .ai-nav-card-link {
  color: var(--ai-accent-2);
}

.prompt .ai-nav-card-link:hover {
  color: var(--ai-accent-2);
}

.agent .ai-nav-card-link {
  color: var(--ai-accent-1);
}

.agent .ai-nav-card-link:hover {
  color: var(--ai-accent-1);
}
</style>
