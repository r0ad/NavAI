<template>
  <div class="ai-card" :class="{ 'ai-card-hover': hover }">
    <div class="ai-card-header">
      <div v-if="icon" class="ai-card-icon" :style="{ color: iconColor }">
        <img v-if="icon.startsWith('http') || icon.startsWith('/')" :src="icon" :alt="title" />
        <span v-else>{{ icon }}</span>
      </div>
      <h3 v-if="title" class="ai-card-title">{{ title }}</h3>
    </div>
    <div v-if="image" class="ai-card-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="ai-card-content">
      <p v-if="description" class="ai-card-description">{{ description }}</p>
      <slot></slot>
      <div v-if="link" class="ai-card-link">
        <a :href="link" class="ai-card-link-text">
          {{ linkText || '了解更多' }}
          <span class="ai-card-link-arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: 'var(--vp-c-brand-1)',
  },
  image: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
  hover: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.ai-card {
  background: var(--vp-c-bg);
  border-radius: var(--ai-card-radius);
  box-shadow: var(--ai-card-shadow);
  padding: 1.5rem;
  transition: var(--ai-transition);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.ai-card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.ai-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ai-card-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ai-card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.ai-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}

.ai-card-image {
  margin-bottom: 1rem;
  border-radius: var(--ai-card-radius);
  overflow: hidden;
}

.ai-card-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: var(--ai-transition);
}

.ai-card:hover .ai-card-image img {
  transform: scale(1.05);
}

.ai-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ai-card-description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
  line-height: 1.6;
}

.ai-card-link {
  margin-top: auto;
  padding-top: 1rem;
}

.ai-card-link-text {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: var(--ai-transition);
}

.ai-card-link-text:hover {
  color: var(--vp-c-brand-2);
}

.ai-card-link-arrow {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.ai-card-link-text:hover .ai-card-link-arrow {
  transform: translateX(4px);
}
</style>
