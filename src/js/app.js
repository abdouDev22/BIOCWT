import { router } from './router.js';


export function initApp() {
  window.addEventListener("hashchange", router);
  router();

  
}
