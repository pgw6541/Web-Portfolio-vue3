import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Products from './Products'
import About from './About'

export default createRouter({
  // Hash모드, History모드로 사용 가능
  // https://google.com/#/search에서 #기법을 이용
  // 기본적으로 브라우저(IE든 크롬이든 Edge든 뭐든)는 # 이 붙은 URL의 뒷내용은 인지하지 못함. 즉, 일반적인 경우에 # 뒤의 값이 변하더라도 브라우저는 새로운 화면을 로드하지 않음.
  history: createWebHashHistory(),
  // page들을 구분해주는 옵션
  routes: [
    {
      // '/' = path는 해당 URL 뒤쫏에 붙음 따라서 /공백 은 메인페지이로 이동 ex) https://google.com/
      path: '/',
      component: Home,
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/about',
      component: About
    },
  ]
})

