import {createStore} from 'vuex'

import { companyStore } from './company-store.js'


export const store = createStore({
    strict: true,
    modules: {
        companyStore
    },
    state: {
    },
    mutations: {
    },
    actions: {
        
    }
})
