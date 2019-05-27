<template>
   <div>
    <h1 class="text-center mt-4 mb-3">Please select the jobs you are interested in</h1>
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
        <b-list-group>
          <b-form-checkbox-group id="jobs" v-model="form.jobs" name="jobs">
            <b-list-group-item v-for="job in jobs" v-bind:key="job.id" class="mb-2">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{job.title}}</h5>
                <small class="ml-2 text-right">{{applicationsOpenMsg(today, job.openFrom)}}</small>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <p class="mb-1 text-left">
                    <strong>Closing date: </strong> {{job.closingAt.toLocaleDateString()}}
                  </p>
                  <p class="mb-1 text-left">
                    <strong>Application open: </strong> {{job.openFrom.toLocaleDateString()}}
                  </p>
                </div>
                <b-form-checkbox class="mr-0" name="job-check" v-bind:value="job.id" v-model="form.jobs">tick to apply</b-form-checkbox>
              </div>
            </b-list-group-item>
          </b-form-checkbox-group>
        </b-list-group>
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
      this.$store.dispatch('applyToJobList', this.form)
      this.reset()
      this.showSuccessAlert = true
    },
    applicationsOpenMsg (from, to) {
      const diff = this.getNumberOfDays(from, to)
      if (diff < 0) {
        return 'Applications are now open'
      } else {
        return 'Applications open in ' + diff + ' days'
      }
    }
  }
}
</script>
