<template>
   <div>
    <h1 class="text-center mt-4 mb-3">Please select the job you are interested in</h1>
    <b-alert v-model="showSuccessAlert" dismissible>
      Thank you for your application. You will receive an email when the Job is open
    </b-alert>
    <b-form @submit="onSubmit">
      <b-form-group
        id="email-address-group"
        label="Email address:"
        label-for="email-address"
      >
        <b-form-input
          id="email-address"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="jobs-group" label="Jobs:" label-for="jobs">
        <b-form-select
          id="jobs"
          v-model="form.jobs"
          :options="jobsList"
          required
        >
          <template slot="first">
            <option :value="null" disabled>-- Please select a job --</option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Apply</b-button>
    </b-form>
  </div>
</template>

<script>
import mixIn from '@/mixins'

export default {
  mixins: [mixIn],
  name: 'Subscribe',
  computed: {
    jobs () {
      return this.$store.getters.getJobs
    },
    jobsList () {
      const jobList = []
      this.jobs.forEach(job => {
        jobList.push({
          value: job.id,
          text: job.title + ', opens in ' + this.getNumberOfDays(this.today, job.openFrom) + ' days'
        })
      })
      return jobList
    }
  },
  data () {
    return {
      showSuccessAlert: false,
      form: {
        email: '',
        jobs: null
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$store.dispatch('applyToJob', this.form)
      this.reset()
      this.showSuccessAlert = true
    }
  }
}
</script>
