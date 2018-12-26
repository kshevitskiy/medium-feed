import Navigo from 'navigo'
import NetworkService from '../services/NetworkService'
import home from './home'

// getElementById wrapper
function $id(id: string) {
  return document.getElementById(id);
}

let root = null;
let useHash = false; // Defaults to: false
let hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

// set the default route
router.on(() => home());

// set the 404 route
router.notFound((query: string) => { 
  $id('view').innerHTML = '<h1>Couldn\'t find the page you\'re looking for...</h1>';
});

// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url: string, id: string = 'view') {
  fetch(url)
    .then(response => {
      return response.text()      
    })
    .then(data => {
      $id(id).innerHTML = data
    })
    .catch(error => {
      $id(id).innerHTML = `An error occured: ${error}`
    })
}

router.on({
  'about': () => { loadHTML('about.html'); },
  'test': () => { $id('view').innerHTML = '<h2>Test route</h2>'; },
  'post/:slug': (param: any) => {
    console.log('Post page slug: ', param.slug)
    $id('view').innerHTML = `<h1>${param.slug}</h1>`;
    // NetworkService.getPost('/get-post-slug')
    //   .then(response => {
    //     console.log('Demo, response: ', response)
    //   })
    //   .catch(error => {
    //     console.log('Demo, error: ', error)
    //   })
  }
});


window.$router = router || {};

export default router