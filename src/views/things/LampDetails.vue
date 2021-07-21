<template>
    <base-layout :page-title="thingName">
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-label>Group Sync:</ion-label>
          </ion-col>
          <ion-col size="12" class="ion-text-center">
            <ion-toggle />
          </ion-col>
          <ion-col size="12" class="ion-text-center">
            <ion-label>Group: <span class="color-danger">{{ thingGroup }}</span></ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-card class="ion-text-center">
        <ion-card-header color="primary">
          <p v-if="thingLamp === 0" class="thing-state">Lamp: <span class="color-danger">off</span></p>
          <p v-else class="thing-state">Lamp: <span class="color-success">on</span></p>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="6" class="ion-text-center">
                <ion-item lines="none">
                <ion-icon :icon="thermometerOutline" size="large" color="secondary" />
                <ion-label>{{ temperature }}<sup>o</sup>C</ion-label>
                </ion-item>
              </ion-col>
              <ion-col size="3" offset="3" class="ion-text-center">
                <ion-item lines="none">
                    <ion-icon :icon="water" size="large" color="secondary"/>
                    <ion-label>{{ humidity }}%</ion-label>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-item lines="none">
            <ion-icon :icon="sunny" size="small"/>
            <ion-range></ion-range>
            <ion-icon :icon="sunny" color="warning"/>
          </ion-item>

          <ion-button v-if="thingLamp === 0" color="success" class="ion-margin-top" @click="updateLamp(1)">turn on</ion-button>
          <ion-button v-else color="danger" class="ion-margin-top" @click="updateLamp(0)">turn off</ion-button>

        </ion-card-content>
      </ion-card>

      <ion-card class="ion-text-center">
        <ion-card-header color="primary"><p class="thing-state">Timer: <span class="color-danger">off</span></p></ion-card-header>
        <ion-card-content>
          <ion-item class="ion-margin-top">
            <ion-label>start hour</ion-label>
            <ion-datetime display-format="HH:mm" picker-format="HH:mm"></ion-datetime>
          </ion-item>

          <ion-item lines="none">
            <ion-label>stop hour</ion-label>
            <ion-datetime display-format="HH:mm" picker-format="HH:mm"></ion-datetime>
          </ion-item>

          <ion-button color="success" class="ion-margin-top">turn on</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card class="ion-text-center">
        <ion-card-header color="primary"><p class="thing-state">Move sensor: <span class="color-danger">off</span></p></ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="12">
                <ion-icon :icon="eyeOffOutline" color="danger" class="ion-justify-center eye-icon"/>
              </ion-col>
              <ion-col size="12">
                <ion-label>There is no move detected</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-button color="success" class="ion-margin-top">turn on</ion-button>
        </ion-card-content>
      </ion-card>

    </base-layout>
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import { IonToggle, IonLabel, IonCard, IonCardHeader, IonCardContent, IonRange, IonItem, IonButton, IonDatetime, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { sunny, thermometerOutline, water, eyeOffOutline } from 'ionicons/icons'
export default {
  components: { BaseLayout, IonToggle, IonLabel, IonCard, IonCardHeader, IonCardContent, IonRange, IonItem, IonButton, IonDatetime, IonGrid, IonRow, IonCol },
  mounted() {
    this.getThing()
  },
  setup() {
    return {
      sunny,
      thermometerOutline,
      water,
      eyeOffOutline
    };
  },
  methods: {
    async getThing() {
      await this.$store.dispatch('things/getThing', {
        id: this.$route.params.id
      })
    },
    async updateLamp(lamp) {
      await this.$store.dispatch('things/updateLamp', {
        id: this.$route.params.id,
        lamp: lamp
      })
    }
  },
  computed: {
    thingName() {
      return this.$store.state.things.name
    },
    thingGroup() {
      return this.$store.state.things.group
    },
    thingLamp() {
      return this.$store.state.things.lamp
    },
    temperature() {
      return this.$store.state.things.temperature
    },
    humidity() {
      return this.$store.state.humidity
    }
  }
    
}
</script>