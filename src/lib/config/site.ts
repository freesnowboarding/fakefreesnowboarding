import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'localhost:5173',
  title: 'freesnowboarding.xyz',
  subtitle: 'we RIDE FREE 4 Sisters and Brothers',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/nobodies.png',
    name: 'Freesnowboarding',
    status: '🏴‍☠️',
  },
  themeColor: '#3D4451'
}
