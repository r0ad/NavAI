---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: NavAI
  text: 让AI成为你的副驾
  tagline: 简单 快速 强大
  image:
    src: /logo.png
    alt: AI使用导航
  actions:
    - theme: brand
      text: 工具库
      link: /tool/
    - theme: brand
      text: 提示词
      link: /promote/
    - theme: brand
      text: 智能体
      link: /agent/

features:
  - icon: 📖
    title: 工具库
    details: 目前流行AI工具的使用导航
    link: /tool/
    linkText: 点击更多
  - title: 提示词
    details: 一个提示词包含所有
    icon: 💡
    link: /promote/
    linkText: 点击更多
  - title: 智能体
    details: 打造自己的智能体
    icon: 🤖
    link: /agent/
    linkText: 点击更多
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
