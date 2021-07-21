<template>
<ion-grid>
    <ion-item class="ion-text-center">
        <ion-label>Name:</ion-label>
        <ion-input :value="name" slot="end"></ion-input>
    </ion-item>
    <ion-item class="ion-text-center">
        <ion-label>Group:</ion-label>
        <ion-input :value="group" slot="end"></ion-input>
    </ion-item>
    <ion-row>
        <ion-col size="4" offset="4" class="ion-text-center">
            <ion-button color="success" class="ion-margin-top">Update</ion-button>
        </ion-col>
    </ion-row>
</ion-grid>
</template>

<script>
import { IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem , IonLabel} from '@ionic/vue';
export default {
    props: ['id', 'name', 'group'],
    components: { IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem, IonLabel },
    
}
</script>