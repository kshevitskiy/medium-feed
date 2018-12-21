import Utilities from './Utilities'

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

class Author {
  constructor(
    public name: string,
    public description: string,
    public link: string,
    public image: string
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.image = image;
  }

  getAuthorName() {
    return this.name
  }
}

export {
  Post, 
  Author
}