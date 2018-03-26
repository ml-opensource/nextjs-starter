const routes = module.exports = require('next-routes')();

routes
  // '/' will point to /pages/index.tsx via next routing

  // Contact specifc to override generic page route
  .add('contact', '/contact', 'contact')

  // Catch-all generic page route
  .add('page', '/:path/:subpath?', 'page');
