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
    ],
  },
  
]
