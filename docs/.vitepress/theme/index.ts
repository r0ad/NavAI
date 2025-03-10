import { h, watch } from 'vue'
import { useData, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { createMediumZoomProvider } from './composables/useMediumZoom'

import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'
import AIHome from './components/AIHome.vue'
import AINavCard from './components/AINavCard.vue'
import AINavGrid from './components/AINavGrid.vue'
import AILatestUpdates from './components/AILatestUpdates.vue'
import AISearch from './components/AISearch.vue'
import AIPageLayout from './components/AIPageLayout.vue'
import AICard from './components/AICard.vue'
import AIGrid from './components/AIGrid.vue'
import AINavSection from './components/AINavSection.vue'

import './styles/index.scss'
import './style.css'
import './styles/nav.css'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter, page } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    // 如果是首页，使用自定义首页组件
    if (page.value.relativePath === 'index.md') {
      return h(AIHome)
    }

    return h(MLayout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router)

    app.provide('DEV', process.env.NODE_ENV === 'development')

    app.component('MNavLinks', MNavLinks)
    app.component('AINavCard', AINavCard)
    app.component('AINavGrid', AINavGrid)
    app.component('AILatestUpdates', AILatestUpdates)
    app.component('AISearch', AISearch)
    app.component('AIPageLayout', AIPageLayout)
    app.component('AICard', AICard)
    app.component('AIGrid', AIGrid)
    app.component('AINavSection', AINavSection)

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
            location.pathname === '/' || location.pathname === '/vitepress-nav-template/',
          ),
        { immediate: true },
      )
    }
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
