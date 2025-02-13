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
    title: '开源',
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
    title: '商业',
    items: [
      {
        icon: '/icons/coze.svg',
        title: '扣子',
        desc: '字节出品AI应用构建平台',
        link: 'https://www.coze.cn/',
      },
    ],
  },
]
