<template>
    <base-layout pageTitle="Edit Thing">
        <ion-grid>
    <ion-item class="ion-text-center">
        <ion-label>Name:</ion-label>
        <ion-input v-model="name"></ion-input>
    </ion-item>
    <ion-item class="ion-text-center">
        <ion-label>Group:</ion-label>
        <ion-input v-model="group"></ion-input>
    </ion-item>
    <ion-row>
        <ion-col size="4" offset="4" class="ion-text-center">
            <ion-button color="success" class="ion-margin-top" @click="updateThing">Update</ion-button>
        </ion-col>
    </ion-row>
</ion-grid>
    </base-layout>
</template>

<script>
import BaseLayout from "../BaseLayout.vue";
import { IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem , IonLabel} from '@ionic/vue';

export default {
  components: {
      BaseLayout,
      IonInput,
      IonButton,
      IonGrid,
      IonRow,
      IonCol,
      IonItem,
      IonLabel
  }, 
  data() {
      return {
          name: '',
          group: ''
      };
  },
  methods: {
      async updateThing() {
          const data = {
              id: this.$route.params.id,
              name: this.name,
              group: this.group
          }

          await this.$store.dispatch('things/updateThing', data)
      }
  }
    
}
</script>
    FormComponent