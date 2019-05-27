<template>
  <b-col cols="*" md="8" lg="6">
    <h1 class="text-center mt-4 mb-3">Current Applications</h1>
    <ApplicationsList />
  </b-col>
</template>

<script>
import ApplicationsList from '@/components/ApplicationsList.vue'

export default {
  name: 'applications',
  components: {
    ApplicationsList
  }
}
</script>
