<template>
  <div id="app">
    <b-container fluid>
      <b-row class="header justify-content-center pt-3 pb-3">
        <img alt="Vue logo" src="@/assets/logo.svg">
      </b-row>
      <b-row class="header justify-content-center">
        <b-nav pills align="center">
          <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'list' }">List</b-nav-item>
          <b-nav-item :to="{ name: 'applications' }">Applications</b-nav-item>
        </b-nav>
      </b-row>
      <b-row align-h="center">
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
</style>
