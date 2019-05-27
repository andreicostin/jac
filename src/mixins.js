const mixIn = {
  data () {
    return {
      today: new Date()
    }
  },
  created () {
    document.title = 'Judicial Appointemnt Commision'
  },
  beforeCreate () {
    this.$store.dispatch('setJobs')
  },
  methods: {
    // get the difference between date and current date in days
    getNumberOfDays (from, to) {
      const then = new Date(to)
      const diff = then - from
      return Math.ceil(diff / (1000 * 60 * 60 * 24))
    },
    reset () {
      this.form.email = ''
      this.form.jobs = null
    }
  }
}

export default mixIn
