import vue from 'vue'
import Vuex from 'vuex'


vue.use(Vuex)

const  state ={
    name:'小明',
    age:1
}

const store = new Vuex.Store({
    state
})


export default store
