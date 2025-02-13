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
        icon: '/icons/deepseek.png',
        title: 'DeekSeek魔法',
        desc: '基于DS R1推理的正确打开方式',
        link: '/promote/deepseek/',
      },
      {
        icon: '/icons/deepseek.png',
        title: '7个万能提示词公式',
        desc: '推理模型不需要很详细的提示词，但不代表不需要提示词公式。',
        link: '/promote/deepseek/7formula',
      },
      {
        icon: '/icons/deepseek.png',
        title: '0经验掌握DeepSeek使用',
        desc: '如何利用DeepSeek学会使用DeepSeek',
        link: '/promote/deepseek/zero',
      }
    ],
  },
  {
    title: 'DeepSeek',
    items: [
      {
        icon: '/icons/deepseek.png',
        title: 'DeepSeek从入门到精通',
        desc: '来自清华余梦珑博士后的分享',
        link: '/promote/deepseek/DeepSeekMater',
      },
      {
        icon: '/icons/deepseek.png',
        title: 'DeekSeek魔法',
        desc: '基于DS R1推理的正确打开方式',
        link: '/promote/deepseek/',
      },
      {
        icon: '/icons/deepseek.png',
        title: '7个万能提示词公式',
        desc: '推理模型不需要很详细的提示词，但不代表不需要提示词公式。',
        link: '/promote/deepseek/7formula',
      }
    ],
  },
]
