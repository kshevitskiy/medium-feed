import { Author } from '../scripts/Post'

export default (author: Author) => {
  return `
    <div class="author">
      <figure class="author__avatar">
        <a href="${author.link}" target="_blank" title="${author.name}">
          <img src="${author.image}" width="64" height="64" alt="${author.name}"/>
        </a>
      </figure>
      <div class="author-meta">
        <div class="author__name">${author.name}</div>
        <div class="author__description">${author.description}</div>
      </div>
    </div>      
  `;  
}