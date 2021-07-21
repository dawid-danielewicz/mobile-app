import router from "../../../router"

const server = 'http://192.168.0.102:3000'

export default {
    async login(context, data) {
        const user = {
            email: data.email,
            password: data.password
        }
        const response = await fetch(server + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const responseData = await response.json()

        if(response.status !== 200) {
            context.commit('setMessage', {
                message: responseData.message,
                type: 'danger'
            })
        } else {
            context.commit('setToken', responseData.token)
            router.push('/tabs/things')
        }

    },

    logout(context) {
        context.commit('setToken', null)
        router.push('/login')
    }
}