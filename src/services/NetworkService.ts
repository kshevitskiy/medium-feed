import RequestService from './RequestService'

const API = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.freecodecamp.org/feed';

class NetworkService { 

  getPosts() {
    return RequestService.getRequest(API)
  }

  getPost(url: string) {
    return RequestService.getRequest(url)
  }
}

export default new NetworkService()