import Utilities from './Utilities'
import { Author } from './Author'

class Post {
  public slug: string

  constructor(
    public author: Author,
    public categories: Array<string>,
    public content: string,
    public link: string,
    public pubDate: string,
    public title: string    
  ) {
    this.author = author;
    this.categories = categories;
    this.content = content;
    this.link = link;
    this.pubDate = Utilities.moment(pubDate);
    this.title = title;
    this.slug = Utilities.slugify(this.title)
  }
}



export {
  Post
}