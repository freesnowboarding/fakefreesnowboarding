import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'localhost:5173',
  title: 'freesnowboarding.xyz',
  subtitle: 'Ride Happy',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {  
  name: 'Drink Water'}
}
