# Community Kitchen Kits

Portable static website for [Community Kitchen Kits](https://www.communitykitchenkits.org/).

## Development

```sh
npm install
npm run dev
```

The local development server is available at `http://localhost:4321` by default.

## GitHub Pages preview

Pushes to `main` are deployed to:

https://gguillermomendoza.github.io/community_kitchen_kits/

The workflow builds with the GitHub Pages repository base path and marks the preview as `noindex`. Local and Hostinger builds continue to use the domain root.

## Production build

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to Hostinger's `public_html` directory. The included `.htaccess` preserves the retired `/save-for-later` route as a redirect.

## Content notes

- Financial donations continue through Big Sunday's hosted form.
- Public residential addresses and phone numbers from the Wix site are intentionally omitted.
- The contact form opens the visitor's email client until a server-side form endpoint is configured for production.
