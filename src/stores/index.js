import Vue from "vue";
import Vuex from "vuex";
import User from "./modulos/user"
import Tasks from './modulos/tasks';

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        User,
        Tasks
    },
});