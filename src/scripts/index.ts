import router from '../router/index'

declare global {
  interface Window { 
    $router: any; 
  }
}

router.resolve();