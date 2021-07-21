import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

import AuthModule from './modules/auth/index.js'
import ThingsModule from './modules/things/index.js'

const store = createStore({
    modules: {
        auth: AuthModule,
        things: ThingsModule
    },
    plugins: [createPersistedState()]

})

export default store;