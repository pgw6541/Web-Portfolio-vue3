import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

createApp(App)
  // 현재 프로젝트에 특정한 플로그인을 사용할 때 쓰는 메소드( .use )
  .use(router)
  .mount('#app')