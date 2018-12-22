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
  Author
}