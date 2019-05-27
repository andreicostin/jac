<template>
   <div>
    <b-table striped show-empty empty-text="There are no applications yet" hover :items="applicationsList"></b-table>

  </div>
</template>

<script>
import mixIn from '@/mixins'

export default {
  mixins: [mixIn],
  name: 'ApplicationsList',
  beforeCreate () {
    this.$store.dispatch('setApplications')
  },
  computed: {
    applications () {
      return this.$store.getters.getApplications
    },
    applicationsList () {
      const applicationsList = []
      this.applications.map(app => {
        const jobTitle = this.$store.getters.getJobs.filter(job => job.id === app.jobs).map(item => item.title)[0]
        const closingAt = app.closingAt.toDate()
        if (this.shouldIdelete(closingAt)) {
          this.$store.dispatch('deleteApplication', app.id)
        } else {
          applicationsList.push({
            email: app.email,
            job: jobTitle
          })
        }
      })
      return applicationsList
    }
  },
  methods: {
    shouldIdelete (date) {
      return this.getNumberOfDays(date, this.today) > 90
    }
  }
}
</script>
