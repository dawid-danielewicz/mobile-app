import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    namespaced: true,
    state() {
        return {
            things: [],
            id: null,
            name: '',
            group: '',
            lamp: 0,
            temperature: null,
            humidity: null
        }
    },
    actions,
    getters,
    mutations
}