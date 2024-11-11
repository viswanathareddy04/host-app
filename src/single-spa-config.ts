import { registerApplication, start } from 'single-spa';
declare var System: any;

registerApplication({
    name: 'layout',
    app: () => System.import('layout'),
    activeWhen: ['/']  // Mount for all routes
  });

  registerApplication({
    name: 'auth',
    app: () => System.import('auth'), // Import path should match the import map
    activeWhen: ['/auth'], // Load this micro-frontend on /auth route
  });

// Start the Single-SPA router
start();
