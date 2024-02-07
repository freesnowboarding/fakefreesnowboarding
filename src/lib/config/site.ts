import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'maerle7.work',
  title: 'freesnowboarding.xyz',
  subtitle: 'Happy',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {  
  avatar: '/assets/gshit.png',
    name: 'Drink Water',
  status: '',
    bio: '<a href=https://www.wedrinkwater.com/>🚰</a> </br> </br> </br> and more </br> <a href=https://www.waldhaus-bier.de/>🌊</a> '}
}
