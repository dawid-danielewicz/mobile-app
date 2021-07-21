<template>
    <ion-card class="ion-text-center">
        <ion-card-header color="primary" class="no-padding">
            <ion-grid>
                <ion-row>
                    <ion-col size="4" offset="4" class="ion-text-center">
                    <ion-title>{{ name }}</ion-title>
                    </ion-col>
                    <ion-col size="3" offset="1">
                        <ion-buttons>
                            <ion-button button-type="icon-only" :href="`/tabs/things/${type}/${id}/edit`">
                                <ion-icon :icon="create" color="secondary" class="no-margin" />
                            </ion-button>
                            <ion-button button-type="icon-only" @click="deleteThing(id)">
                                <ion-icon :icon="trash" color="danger" class="no-margin"/>
                            </ion-button>
                        </ion-buttons>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-header>
        <ion-card-content>
            <ion-button color="warning" class="ion-margin-top" :href="`/tabs/things/${type}/${id}`">Choose</ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonTitle, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonButtons } from '@ionic/vue';
import { create, trash } from 'ionicons/icons';
export default {
    props: ['name', 'id', 'type'],
    components: {
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonTitle,
        IonButton,
        IonIcon,
        IonGrid,
        IonRow,
        IonCol,
        IonButtons
    },
    setup() {
        return {
            create,
            trash
        };
    },
    methods: {
        async deleteThing(id) {
            await this.$store.dispatch('things/deleteThing', {
                id: id
            })
        }
    }
}
</script>