<template>
  <v-app>
    <div>
      <NavList v-bind:navSwitch="navSwitch"></NavList>
      <Header v-on:changeNavSwitch="onChangeNavSwitch"></Header>

      <!-- Sizes your content based upon application components -->
      <v-content>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>

          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>

      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import NavList from '@/components/NavList'
import Footer from '@/components/Footer'

export default{
  name: 'Layout',
  components: {
    NavList,
    Header,
    Footer
  },
  data (){
    return{
      navSwitch: true,
    }
  },
  methods: {
    onChangeNavSwitch() {
      this.navSwitch = !this.navSwitch
    }
  }
}
</script>

<style>
</style>
