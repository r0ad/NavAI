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
        title: 'DeepSeek',
        desc: '联网搜索+推理=王炸',
        link: 'https://chat.deepseek.com/',
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
        title: '豆包',
        desc: '语音+绘图+聊天+编程=全能小王子',
        link: 'https://www.doubao.com/chat/',
      },
      {
        icon: '/icons/kimi.png',
        title: 'KIMI',
        desc: '办公达人全能助手，自动生成PPT',
        link: 'https://kimi.moonshot.cn/',
      }
    ],
  },
  {
    title: '文本',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: '最早做聊天的平台',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: '/icons/deepseek.png',
        title: 'DeepSeek',
        desc: '联网搜索+推理=王炸',
        link: 'https://chat.deepseek.com/',
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
        title: '豆包',
        desc: '语音+绘图+聊天+编程=全能小王子',
        link: 'https://www.doubao.com/chat/',
      },
      {
        icon: '/icons/kimi.png',
        title: 'KIMI',
        desc: '办公达人全能助手，自动生成PPT',
        link: 'https://kimi.moonshot.cn/',
      },
      {
        icon: '/icons/yiyan.png',
        title: '文心一言',
        desc: '百度出品，综合能力强',
        link: 'https://yiyan.baidu.com/',
      },
      {
        icon: '/icons/xinghuo.svg',
        title: '星火讯飞',
        desc: '讯飞出品，走的比较前沿',
        link: 'https://xinghuo.xfyun.cn/',
      },
      {
        icon: '/icons/tongyi.svg',
        title: '通义千问',
        desc: '阿里出品，综合能力强',
        link: 'https://tongyi.aliyun.com/qianwen/',
      },
      {
        icon: '/icons/yuanbao.png',
        title: '腾讯元宝',
        desc: '腾讯出品，综合能力强',
        link: 'https://yuanbao.tencent.com',
      },
      {
        icon: '/icons/tiangong.webp',
        title: '天工',
        desc: '有特点的模型',
        link: 'https://www.tiangong.cn/',
      }
    ],
  },
  {
    title: '绘图',
    items: [
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
        title: '豆包',
        desc: '语音+绘图+聊天+编程=全能小王子',
        link: 'https://www.doubao.com/chat/',
      },
      {
        icon: '/icons/tongyi.svg',
        title: '通义万象',
        desc: '图片+视频全能',
        link: 'https://tongyi.aliyun.com/wanxiang/',
      },
      {
        icon: '/icons/jimeng.png',
        title: '即梦',
        desc: '剪映出品',
        link: 'https://jimeng.jianying.com/',
      },
      {
        icon: '/icons/liblib.png',
        title: '哩布哩布',
        desc: '基于StableDiffusion和ComfyUI的平台',
        link: 'https://www.liblib.art/',
      },
    ],
  },
  {
    title: '视频',
    items: [
      {
        icon: '/icons/hunyuan.png',
        title: '混元文生视频',
        desc: '腾讯出品',
        link: 'https://video.hunyuan.tencent.com',
      },
      {
        icon: '/icons/keling.png',
        title: '可灵',
        desc: '快手出品',
        link: 'https://klingai.kuaishou.com/',
      },
      {
        icon: '/icons/hailuo.png',
        title: '海螺',
        desc: 'MINIMAX出品',
        link: 'https://hailuoai.com/video',
      },
      {
        icon: '/icons/jimeng.png',
        title: '即梦',
        desc: '剪映出品',
        link: 'https://jimeng.jianying.com/',
      },
      {
        icon: '/icons/zhipu.png',
        title: '清影',
        desc: '智谱出品',
        link: 'https://chatglm.cn',
      },
      {
        icon: '/icons/bairimeng.png',
        title: '白日梦',
        desc: '通过文案一键创作视频',
        link: 'https://aibrm.com',
      }
    ],
  },
  {
    title: '语音',
    items: [
      {
        icon: '/icons/tongyi.svg',
        title: '通义听悟',
        desc: '语音理解能力强大',
        link: 'https://tingwu.aliyun.com/home',
      },
      {
        icon: '/icons/tianyin.png',
        title: '网易天音',
        desc: '一站式AI音乐创作',
        link: 'https://tianyin.music.163.com/#/',
      }
    ],
  },
  {
    title: '3D',
    items: [
      {
        icon: '/icons/tripo.webp',
        title: 'Tripo',
        desc: '在线文生、图生3D模型',
        link: 'https://www.tripo3d.ai/',
      },
      {
        icon: '/icons/hunyuan.png',
        title: '混元3D',
        desc: '腾讯出品，在线文生、图生3D模型',
        link: 'https://3d.hunyuan.tencent.com/',
      }
    ],
  }
]
