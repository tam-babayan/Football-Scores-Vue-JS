import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from '../components/Home.vue'
import GameList from '../components/Game_list.vue'
import MatchDetails from '../components/Match_details.vue'
import TeamDetails from '../components/Team_details.vue'
import SignUp from '../components/Sign_up.vue'
import Favorites from '../components/Favorites.vue'
import Conversations from '../components/Conversations.vue'
import moment from 'moment'

Vue.use(Vuetify)
Vue.use(Router)
Vue.prototype.moment = moment

export default new Router({
  routes: [{
    path: '',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/game-list/:id',
    name: 'GameList',
    component: GameList,
    props: true
  },
  {
    path: '/match-details/:id',
    name: 'MatchDetails',
    component: MatchDetails,
    props: true
  },
  {
    path: '/team-details/:id',
    name: 'TeamDetails',
    component: TeamDetails,
    props: true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    props: true
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    props: true
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: Conversations,
    props: true
  }
  ]
})
