<template>
    <ion-page>
        <ion-header class="ion-margin-bottom ion-text-center">
        <ion-toolbar>
            <ion-title><h1>{{ pageTitle }}</h1></ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true"> 
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonTitle, IonHeader, IonContent } from '@ionic/vue';
export default {
    props: ['pageTitle'],
    components: {
        IonPage,
        IonToolbar,
        IonTitle,
        IonHeader,
        IonContent
    }
}
</script>