import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'black',
    text: '🖤 Black'
  },
  {
    name: 'retro',
    text: '🌇 Analog'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemon'
  },
  {
    name: 'garden',
    text: '🍁 Garden'
  },
  {
    name: 'cupcake',
    text: '☯️ Outbalanced'
  },
  // {
  //   name: 'dracula',
  //   text: '🧛 Dark'
  // },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'cmyk',
    text: '🖨 Swan'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: '',
      link: '/'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'FCG',
      link: 'https://fc-geisslingen.de/'
    },
    {
      text: 'SHOP',
      link: 'https://www.jako.de/de/team/fc_geisslingen/'
    },
        {
      text: 'OP',
      link: 'https://onepiece-tube.com/'
    },
    {
      text: 'Gondola',
      link: 'https://onepiece-tube.com/manga/kapitel/1106/1'
    },
    {
      text: 'Not Work',
      link: 'https://www.maerle7.work'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
