import { Post } from '../scripts/Post'
import author from './author'

export default (post: Post) => {
  return `
  <article class="swiper-slide post">
    <header class="post-header">    
      ${author(post.author)}      
    </header>    
    <div class="post-content">
      <span class="post__date">${post.pubDate}</span>      
      <h2 class="post__title"><a href="${post.link}" target="_blank" title="${post.title}">${post.title}</a></h2>
      <span class="post__author">by ${post.author.name}</span>
    </div>
    <div style="background-color: silver; display: none;">${post.content}</div>
  </article>
  `;  
}