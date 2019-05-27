import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: null,
    applications: null
  },
  getters: {
    getJobs: state => {
      return state.jobs
    },
    getApplications: state => {
      return state.applications
    }
  },
  mutations: {
    async setJobs () {
      this.state.jobs = []

      const snapshot = await db.collection('jobs').get()

      snapshot.forEach(doc => {
        const job = {
          id: doc.id,
          title: doc.data().title,
          createdAt: doc.data().createdAt.toDate(),
          openFrom: doc.data().openFrom.toDate(),
          closingAt: doc.data().closingAt.toDate()
        }
        this.state.jobs.push(job)
      })
    },
    async setApplications () {
      this.state.applications = []
      const snapshot = await db.collection('applications').orderBy('createdAt').get()
      snapshot.forEach(doc => {
        const app = {
          id: doc.id,
          email: doc.data().email,
          jobs: doc.data().jobs,
          createdAt: doc.data().createdAt,
          closingAt: doc.data().closingAt
        }
        this.state.applications.push(app)
      })
    }
  },
  actions: {
    setJobs: context => {
      context.commit('setJobs')
    },
    applyToJob ({ commit }, data) {
      let applications = db.collection('applications')
      const closingAt = this.state.jobs.filter(job => job.id === data.jobs)[0].closingAt
      applications.add({
        email: data.email,
        jobs: data.jobs,
        createdAt: new Date(),
        closingAt
      })
    },
    applyToJobList ({ commit }, data) {
      let applications = db.collection('applications')
      data.jobs.forEach(job => {
        const closingAt = this.state.jobs.filter(item => item.id === job)[0].closingAt
        applications.add({
          email: data.email,
          jobs: job,
          createdAt: new Date(),
          closingAt
        })
      })
    },
    deleteApplication ({ commit }, data) {
      let applications = db.collection('applications')
      applications.doc(data).delete()
    },
    setApplications: context => {
      context.commit('setApplications')
    }
  }
})
