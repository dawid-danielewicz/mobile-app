<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Start" href="/tabs/start">
          <ion-icon :icon="home" />
          <ion-label>Start</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Things" href="/tabs/things">
          <ion-icon :icon="bulbOutline" />
          <ion-label>Things</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="User" href="/tabs/user">
          <ion-icon :icon="personCircle" />
          <ion-label>User</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, personCircle, bulbOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home,
      personCircle,
      bulbOutline
    }
  }
}
</script>