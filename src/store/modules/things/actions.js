import router from "../../../router"

const server = 'http://192.168.0.102:3000'

export default {
    async getThings(context) {
        const response = await fetch(server + '/things', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`
            }
        })

        const responseData = await response.json()
        context.commit('setThings', responseData)
    },

    async createThing(context, data) {
        console.log(data.name)
        const response = await fetch(server + '/things', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${data.name}&group=${data.group}`
        })

        const responseData = await response.json()
        if(response.status !== 200) {
            console.log(responseData)
        } else {
            router.push('/tabs/things/lamps')
        }
    },
    async getThing(context, params) {
        const response = await fetch(server + `/things/${params.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`
            }
        })

        const responseData = await response.json()
        if(response.status !== 200) {
            console.log(responseData)
        } else {
            context.commit('setThing', responseData)
        }
    },
    async updateLamp(context, params) {
        const response = await fetch(server + `/things/${params.id}/lamp`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `lamp=${params.lamp}`
        })

        const responseData = await response.json()
        if(response.status !== 200) {
            console.log(responseData)
        } else {
            context.commit('updateLamp', params.lamp)
        }
    },
    async updateThing(context, params) {
        const response = await fetch(server + `/things/${params.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${params.name}&group=${params.group}`
        })

        const responseData = await response.json()
        if(response.status !== 200) {
            console.log(responseData)
        } else {
            context.commit('updateThing', {
                name: params.name,
                group: params.group
            })
            router.push('/tabs/things/lamps')
        }
    }, 
    async deleteThing(context, id) {
        console.log(id)
        const response = await fetch(server + `/things/${id.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${context.rootState.auth.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        const responseData = await response.json()
        if(response.status !== 200) {
            console.log(responseData)
        } else {
            context.commit('deleteThing', id)
        }
    }
}