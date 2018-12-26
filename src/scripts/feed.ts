import { Post } from './Post'
import { Author } from './Author'
import { Swiper } from 'swiper/dist/js/swiper.esm.js'
import NetworkService from '../services/NetworkService'
import template from '../templates/post'

class Feed {
    constructor(
        public selector: HTMLElement = null
    ) {
        this.selector = selector
    }

    slider(selector: HTMLElement) {
      return new Swiper(selector, {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        mousewheel: true,
        breakpoints: {
          922: {
            slidesPerView: 1,
          }
        }        
      });
    }

    async createPosts() {      
      const data = await NetworkService.getPosts()
        .then(response => {
          // console.log('FEED: ', response.feed)
          // console.log('POSTS: ', response.items)
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
        this.selector.querySelector('.swiper-wrapper').innerHTML += template(post)            
      })          
    }

    init(selector: HTMLElement) {
      if (!selector) {
        return false
      }
      this.selector = selector
      this.createPosts().then(posts => {
        this.mount(posts)
        this.slider(this.selector)
        window.$router.updatePageLinks()
      })
    }    
}

export default new Feed()

