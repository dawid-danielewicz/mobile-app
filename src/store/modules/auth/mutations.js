export default {
    setToken(state, data) {
        state.token = data
    },
    setMessage(state, data) {
        state.message = data.message
        state.type = data.type
    }
}