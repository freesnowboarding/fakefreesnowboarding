import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'https://maerle7.work',
  title: 'freesnowboarding.xyz',
  subtitle: 'Happy',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {  
  name: 'Drink Water'}
}
