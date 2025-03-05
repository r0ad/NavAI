---
title: AI 工具库
description: 精选当前流行的AI工具，提供详细使用指南和最佳实践，助你快速掌握各类AI工具的使用方法
useAILayout: true
---

# AI 工具库

在这里，我们精心挑选了当前最流行、最实用的 AI 工具，并提供详细的使用指南和最佳实践，帮助你快速掌握这些工具的使用方法。无论你是 AI 新手还是专业用户，都能在这里找到适合自己的 AI 工具。

## 文本生成工具

<AIGrid columns="3">
  <AICard 
    title="ChatGPT" 
    description="OpenAI开发的对话式大型语言模型，可以进行自然对话、回答问题、创作内容等" 
    icon="🤖" 
    iconColor="var(--ai-accent-3)"
    link="/tool/chatgpt"
    linkText="查看详情"
  />
  <AICard 
    title="Claude" 
    description="Anthropic开发的AI助手，擅长长文本处理、复杂推理和遵循详细指令" 
    icon="🧠" 
    iconColor="var(--vp-c-brand-1)"
    link="/tool/claude"
    linkText="查看详情"
  />
  <AICard 
    title="Gemini" 
    description="Google开发的多模态AI模型，可以理解和生成文本、图像、音频等多种形式的内容" 
    icon="💬" 
    iconColor="var(--ai-accent-2)"
    link="/tool/gemini"
    linkText="查看详情"
  />
</AIGrid>

## 图像生成工具

<AIGrid columns="3">
  <AICard 
    title="Midjourney" 
    description="基于Discord的AI图像生成工具，以其艺术性和高质量的图像输出而闻名" 
    icon="🎨" 
    iconColor="var(--ai-accent-1)"
    link="/tool/midjourney"
    linkText="查看详情"
  />
  <AICard 
    title="DALL-E" 
    description="OpenAI开发的AI图像生成系统，可以根据文本描述创建逼真的图像" 
    icon="🖼️" 
    iconColor="var(--ai-accent-3)"
    link="/tool/dalle"
    linkText="查看详情"
  />
  <AICard 
    title="Stable Diffusion" 
    description="开源的AI图像生成模型，可以在本地部署，支持多种图像生成和编辑功能" 
    icon="📷" 
    iconColor="var(--vp-c-brand-1)"
    link="/tool/stable-diffusion"
    linkText="查看详情"
  />
</AIGrid>

## 音频处理工具

<AIGrid columns="3">
  <AICard 
    title="ElevenLabs" 
    description="AI语音合成平台，提供逼真的多语言语音生成和克隆功能" 
    icon="🔊" 
    iconColor="var(--ai-accent-2)"
    link="/tool/elevenlabs"
    linkText="查看详情"
  />
  <AICard 
    title="Whisper" 
    description="OpenAI开发的自动语音识别系统，支持多种语言的转录和翻译" 
    icon="🎤" 
    iconColor="var(--ai-accent-1)"
    link="/tool/whisper"
    linkText="查看详情"
  />
  <AICard 
    title="Mubert" 
    description="AI音乐生成平台，可以创建各种风格的背景音乐和音效" 
    icon="🎵" 
    iconColor="var(--ai-accent-3)"
    link="/tool/mubert"
    linkText="查看详情"
  />
</AIGrid>

## 视频处理工具

<AIGrid columns="3">
  <AICard 
    title="Runway" 
    description="AI视频编辑和生成平台，提供多种视频处理和创作功能" 
    icon="🎬" 
    iconColor="var(--vp-c-brand-1)"
    link="/tool/runway"
    linkText="查看详情"
  />
  <AICard 
    title="Synthesia" 
    description="AI视频生成平台，可以创建逼真的数字人视频，支持多种语言" 
    icon="📹" 
    iconColor="var(--ai-accent-2)"
    link="/tool/synthesia"
    linkText="查看详情"
  />
  <AICard 
    title="D-ID" 
    description="AI数字人生成平台，可以将静态图像转换为会说话的视频" 
    icon="👤" 
    iconColor="var(--ai-accent-1)"
    link="/tool/d-id"
    linkText="查看详情"
  />
</AIGrid>

## 开发者工具

<AIGrid columns="3">
  <AICard 
    title="GitHub Copilot" 
    description="AI代码助手，可以根据注释和上下文生成代码，提高开发效率" 
    icon="💻" 
    iconColor="var(--ai-accent-3)"
    link="/tool/github-copilot"
    linkText="查看详情"
  />
  <AICard 
    title="Cursor" 
    description="基于AI的代码编辑器，集成了强大的代码生成和编辑功能" 
    icon="📝" 
    iconColor="var(--vp-c-brand-1)"
    link="/tool/cursor"
    linkText="查看详情"
  />
  <AICard 
    title="Codeium" 
    description="免费的AI代码助手，支持多种编程语言和IDE" 
    icon="🔍" 
    iconColor="var(--ai-accent-2)"
    link="/tool/codeium"
    linkText="查看详情"
  />
</AIGrid>

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
