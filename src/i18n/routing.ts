import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fa', 'ar-AE', "hi-IN", "zh-CN"],
 
  // Used when no locale matches
  defaultLocale: 'fa'
});