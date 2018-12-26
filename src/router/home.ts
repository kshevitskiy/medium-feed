import feed from '../scripts/feed'
import slider from '../templates/slider'

const init = () => {
  feed.init(slider('medium-posts-feed'))  
}

export default init