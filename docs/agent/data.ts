import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '最常用',
    items: [
      {
        icon: 'https://fastgpt.cn/logo.svg',
        title: 'FastGPT',
        desc: '开源AI知识库构建平台',
        link: 'https://fastgpt.cn/',
      },
      {
        icon: '/icons/dify.png',
        title: 'Dify',
        desc: '开源AI应用构建平台',
        link: 'https://dify.ai/',
      },
      {
        icon: '/icons/ragflow.svg',
        title: 'RagFlow',
        desc: '开源AI应用构建平台',
        link: 'https://ragflow.io/',
      },
      {
        icon: '/icons/coze.svg',
        title: '扣子',
        desc: '字节出品AI应用构建平台',
        link: 'https://www.coze.cn/',
      },
      {
        icon: '/icons/langchain.svg',
        title: 'LangChain',
        desc: '智能体工作流开发框架，支持Python\JS\Java',
        link: 'https://www.langchain.com/langchain',
      },
      {
        icon: '/icons/langgraph.svg',
        title: 'LangGraph',
        desc: '智能体编排开发框架,，支持Python\JS',
        link: 'https://www.langchain.com/langgraph',
      },
    ],
  },
  {
    title: '智能体开发开源',
    items: [
      {
        icon: 'https://fastgpt.cn/logo.svg',
        title: 'FastGPT',
        desc: '开源AI知识库构建平台',
        link: 'https://fastgpt.cn/',
      },
      {
        icon: '/icons/dify.png',
        title: 'Dify',
        desc: '开源AI应用构建平台',
        link: 'https://dify.ai/',
      },
      {
        icon: '/icons/ragflow.svg',
        title: 'RagFlow',
        desc: '开源AI应用构建平台',
        link: 'https://ragflow.io/',
      },
      {
        icon: '/icons/langchain.svg',
        title: 'LangChain',
        desc: '智能体工作流开发框架，支持Python\JS\Java',
        link: 'https://www.langchain.com/langchain',
      },
      {
        icon: '/icons/langgraph.svg',
        title: 'LangGraph',
        desc: '智能体编排开发框架,，支持Python\JS',
        link: 'https://www.langchain.com/langgraph',
      },
    ],
  },
  {
    title: '大模型微调开源',
    items: [
      {
        icon: '/icons/unsloth.jpg',
        title: 'unsloth',
        desc: '开源+速度+低显存，支持DeepSeek R1',
        link: 'https://github.com/unslothai/unsloth',
      },
      {
        icon: '/icons/llamafactory.png',
        title: 'LLaMA-Factory',
        desc: '开源+多模型支持，各种显存都能跑',
        link: 'https://github.com/hiyouga/LLaMA-Factory',
      },
      {
        icon: '/icons/kiln.svg',
        title: 'Kiln AI',
        desc: '桌面端+生成合成数据+模型微调+开源',
        link: 'https://github.com/Kiln-AI/Kiln',
      },
    ],
  },
  {
    title: '智能体开发商业',
    items: [
      {
        icon: '/icons/coze.svg',
        title: '扣子',
        desc: '字节出品AI应用构建平台',
        link: 'https://www.coze.cn/',
      },
    ],
  },
  {
    title: '编程IDE',
    items: [
      {
        icon: '/icons/cursor.svg',
        title: 'Cursor',
        desc: '实力强大的古早（2023）AI编程',
        link: 'https://www.cursor.com/',
      },
      {
        icon: '/icons/trae.svg',
        title: 'Trae',
        desc: 'AI编程工具，免费，目前只有MAC',
        link: 'https://www.trae.ai/',
      },
      {
        icon: '/icons/windsurf.svg',
        title: 'Windsurf',
        desc: 'AI编程工具，付费',
        link: 'https://codeium.com/windsurf',
      },
    ],
  },
  {
    title: '编程AGENT',
    items: [
      {
        icon: '/icons/continue.svg',
        title: 'Continue',
        desc: '基于上下文理解，开源，和Cursor的聊天编程类似',
        link: 'https://www.continue.dev/',
      },
      {
        icon: '/icons/cline.png',
        title: 'Cline',
        desc: '基于上下文理解，开源，和Cursor的Composer编程类似，目前只支持VS Code',
        link: 'https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev',
      },
      {
        icon: '/icons/v0.svg',
        title: 'V0',
        desc: '原型设计转代码',
        link: 'https://v0.dev/',
      },
      {
        icon: '/icons/tongyi.svg',
        title: '通义灵码',
        desc: 'Cursor的替代，聊天+Composer的组合插件',
        link: 'https://lingma.aliyun.com/',
      },
      {
        icon: '/icons/bolt.svg',
        title: 'bolt',
        desc: '一句话出APP，基于web生态的全栈自动化开发',
        link: 'https://bolt.new/',
      },
      {
        icon: '/icons/openhands.svg',
        title: 'OpenHands',
        desc: '一句话AI出应用，开源，Devin平替',
        link: 'https://all-hands.dev',
      },
      {
        icon: '/icons/devin.png',
        title: 'Devin',
        desc: 'AI工程师，很强大，收费',
        link: 'https://devin.ai/',
      },
    ],
  },
]
