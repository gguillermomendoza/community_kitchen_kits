import { defineConfig } from 'astro/config';

const githubPages = process.env.PUBLIC_GITHUB_PAGES === 'true';
const base = githubPages ? '/community_kitchen_kits' : '/';

export default defineConfig({
  site: githubPages
    ? 'https://gguillermomendoza.github.io'
    : 'https://www.communitykitchenkits.org',
  base,
  trailingSlash: 'never',
  output: 'static',
  redirects: {
    '/save-for-later': `${base === '/' ? '' : base}/kitchenitems`,
  },
});
