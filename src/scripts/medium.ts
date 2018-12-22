import { Swiper } from 'swiper/dist/js/swiper.esm.js';
import NetworkService from '../services/NetworkService'
import { Post } from './Post'
import { Author } from './Author'
import template from '../templates/post'

const sliderElement = document.getElementById('medium');
const wrapperElement = sliderElement.querySelector('.swiper-wrapper');

class Medium {
    constructor(
        public selector: HTMLElement = sliderElement
    ) {
        this.selector = selector
    }

    slider(selector: HTMLElement) {
      return new Swiper(selector, {
        slidesPerView: 'auto',
        spaceBetween: 0,
        speed: 400,
        mousewheel: true
      });
    }

    async createPosts() {      
      const data = await NetworkService.getPosts()
        .then(response => {
          console.log('FEED: ', response.feed)
          console.log('POSTS: ', response.items)
          const author = response.feed
          const posts = response.items.map((post: Post) => {
            return new Post(
              new Author(
                String(post.author), // ?
                author.description,
                author.link,
                author.image
              ),
              post.categories,
              post.content,
              post.link,
              post.pubDate,
              post.title
            )
          })
          return posts;
        })

      return data;
    }
    
    mount(posts: Array<Post>) {        
      posts.forEach(post => {        
        // Todo. Optimize this, dont use +=
        wrapperElement.innerHTML += template(post)        
      })          
    }    

    init() {
      this.createPosts().then(posts => {
        // console.log('Posts: ', posts)
        this.mount(posts)
        this.slider(this.selector)
      })
    }    
}

export default new Medium()

