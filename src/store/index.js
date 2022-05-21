import { createStore } from 'vuex'
import about from './about'
import interests from './interests'

export default createStore({
  modules: {
    about,
    interests
  }
})