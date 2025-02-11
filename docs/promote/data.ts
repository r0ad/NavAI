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
        link: '/promote/deepseek',
      },
      {
        icon: '/icons/deepseek.png',
        title: 'DeepSeek从入门到精通',
        desc: '来自余梦珑博士后的教程',
        link: '/file/DeepSeekMater.pdf',
      }
    ],
  },
]
