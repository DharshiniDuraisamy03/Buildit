
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Buildit/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Buildit/home",
    "route": "/Buildit"
  },
  {
    "renderMode": 2,
    "route": "/Buildit/home"
  },
  {
    "renderMode": 2,
    "route": "/Buildit/about"
  },
  {
    "renderMode": 2,
    "route": "/Buildit/service"
  },
  {
    "renderMode": 2,
    "route": "/Buildit/projects"
  },
  {
    "renderMode": 2,
    "route": "/Buildit/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 499, hash: 'df2208f3d7d976fd6d28e7c2d2d3ffdfa79f2a4da180ecca08edadf024e1edfd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '32f54bcd294aa2e5711243f014aa3f3d6aa8c3f00d15a32c21d73bc4a7480be9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24050, hash: 'addc2603a9b61fa64c89f3b275ec89e72c2883b5d655d782997ef253f701022b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19096, hash: 'fd768ebc003efb103873f05c55b5df7069dd2f6be7144d2803fadbb7d1db8080', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14398, hash: 'b1a09a399542e81116c0aa7e3af09b618741c206e07ae8b79ac2afc53723393c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 14569, hash: 'b0e303a8f429721206c0c4a78071690b3b1429834a9918dc1ab51953ee160d20', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 14791, hash: '6dc6b0b5a3f692a34c10ab188a0b15ef72f7d473fcc69a9fb03ff484f904752f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
