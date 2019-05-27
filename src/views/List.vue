<template>
  <b-col cols="*" md="8" lg="6">
    <SubscribeList msg="Please select the Jobs you are interested in"/>
  </b-col>
</template>

<script>
import SubscribeList from '@/components/SubscribeList.vue'

export default {
  name: 'List',
  components: {
    SubscribeList
  }
}
</script>
