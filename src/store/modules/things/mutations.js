export default {
    setThings(state, data) {
        state.things = data
    }, 
    setThing(state, data) {
        state.id = data.id
        state.name = data.name
        state.group = data.group
        state.lamp = data.lamp
        state.temperature = data.temperature
        state.humidity = data.humidity
    },
    updateLamp(state, data) {
        state.lamp = data
    },
    updateThing(state, data) {
        state.name = data.name
        state.group = data.group
    },
    deleteThing(state, data) {
        state.things.splice(state.things.indexOf(data), 1)
    }
}