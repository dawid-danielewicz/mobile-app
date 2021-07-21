<template>
  <base-layout page-title="User">
    <div class="ion-text-center">
      <h2>Hello {{ userName }}</h2>

      <h3>Your email addres: {{ userEmail }}</h3>

      <ion-button color="danger" @click="logout">Logout</ion-button>
    </div>
  </base-layout>
</template>

<script>
import { IonButton } from '@ionic/vue';
import BaseLayout from './BaseLayout.vue';

export default  {
  name: 'User',
  components: { BaseLayout, IonButton },
  computed: {
    userEmail() {
      return this.$store.state.auth.email
    },
    userName() {
      return this.$store.state.auth.name
    }
  },
  methods: {
    logout() {
        this.$store.dispatch('auth/logout')
    }
  }
}
</script>