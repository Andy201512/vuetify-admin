<template>
  <div>
    
    <NavList></NavList>

    <Header></Header>

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
}
</script>

<style>
</style>
