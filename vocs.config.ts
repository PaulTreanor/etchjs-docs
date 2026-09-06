import { defineConfig } from 'vocs/config'

export default defineConfig({
  title: 'etchJS',
  description: 'Colour DOM items with programmatic patterns.',
  basePath: '/etchjs-docs',
  accentColor: 'light-dark(#0b85d7, #5cb6f2)',
  renderStrategy: 'full-static',
  sidebar: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Quick Start',
      link: '/quick-start',
    },
    {
      text: 'Patterns',
      link: '/patterns',
    },
    {
      text: 'Examples',
      link: '/examples',
    },
    {
      text: 'API Reference',
      link: '/api',
    },
  ],
})