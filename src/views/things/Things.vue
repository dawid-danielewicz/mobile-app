<template>
  <base-layout page-title="Things">
      <ion-card class="ion-text-center">
        <ion-card-header color="primary">eLamps</ion-card-header>
        <ion-card-content>
          <ion-button color="warning" tab="Lamps" class="ion-margin-top" href="/tabs/things/lamps">choose</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card class="ion-text-center">
        <ion-card-header color="primary">RgbLamps</ion-card-header>
        <ion-card-content>
          <ion-button color="warning" class="ion-margin-top">choose</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="success" tab="addThing" href="/tabs/things/add">
          <ion-icon :icon="addOutline" />
        </ion-fab-button>
      </ion-fab>
  </base-layout>
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonButton, IonFab, IonFabButton } from '@ionic/vue';
import { addOutline } from 'ionicons/icons'
import BaseLayout from '../BaseLayout.vue';

export default  {
  name: 'Things',
  components: { IonCard, IonCardHeader, IonCardContent, IonButton, BaseLayout, IonFab, IonFabButton},
  setup() {
    return {
      addOutline
    };
  }
}
</script>