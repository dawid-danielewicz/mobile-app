<template>
    <base-layout page-title="Login">

    <ion-alert :color="messageType">{{ updateMessage }}</ion-alert>

    <div class="ion-text-center ion-margin-top">
        <ion-item>
            <ion-label>email</ion-label>
            <ion-input type="email" v-model="email"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label>password</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
        
        <ion-button color="success" @click.prevent="submitForm()">Login</ion-button>
    </div>
        
    </base-layout>
</template>

<script>
import { IonInput, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/vue'
import BaseLayout from '../BaseLayout.vue'

export default {
    components: {
        BaseLayout,
        IonInput,
        IonItem,
        IonLabel,
        IonButton,
        IonAlert
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submitForm() {
            const formData = {
                email: this.email,
                password: this.password
            }

            this.$store.dispatch('auth/login', formData)
        }
    },
    computed: {
        updateMessage() {
            return this.$store.state.auth.message
        },
        messageType() {
            return this.$store.state.auth.type
        }
    }
    
}
</script>