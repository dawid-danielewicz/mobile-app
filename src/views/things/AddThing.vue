<template>
    <base-layout page-title="Add thing">
        <ion-item>
            <ion-label>Type of device</ion-label>
            <ion-select>
                <ion-select-option value="lamp">lamp</ion-select-option>
                <ion-select-option value="rgb">rgb</ion-select-option>
            </ion-select>
        </ion-item>

        <ion-item>
            <ion-input placeholder="Device name" v-model="name"></ion-input>
        </ion-item>

        <ion-item>
            <ion-input placeholder="group" v-model="group"></ion-input>
        </ion-item>
        <div class="ion-text-center">
            <ion-button color="success" @click.prevent="submitForm()">add</ion-button>
        </div>
    </base-layout>
</template>

<script>
import { IonLabel, IonSelect, IonSelectOption, IonItem, IonInput, IonButton } from '@ionic/vue';
import BaseLayout from '../BaseLayout.vue';
export default {
    name: 'addThig',
    components: { BaseLayout, IonLabel, IonSelect, IonSelectOption, IonItem, IonInput, IonButton },
    data() {
        return {
            name: '',
            group: ''
        }
    },
    methods: {
        async submitForm() {
            const formData = {
                name: this.name,
                group: this.group
            }

            await this.$store.dispatch('things/createThing', formData)
        }
    }
}
</script>