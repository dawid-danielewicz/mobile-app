<template>
    <base-layout page-title="Lamps">
        <card-component 
            v-for="thing in things"
            :key="thing.id"
            :id="thing.id"
            :name="thing.name"
            type="lamps" 
        ></card-component>
    </base-layout>   
</template>

<script>
import BaseLayout from '../BaseLayout.vue'
import CardComponent from '../../components/CardComponent.vue';
export default {
    components: {
        BaseLayout,
        CardComponent
    },
    mounted() {
        this.getThings()
    },
    methods: {
        async getThings() {
            await this.$store.dispatch('things/getThings')
        }
    },
    computed: {
        things() {
            return this.$store.state.things.things
        }
    }
}
</script>