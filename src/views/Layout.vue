<template>
  <div>
    
    <DashboardList></DashboardList>

    <Header></Header>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
import DashboardList from '@/components/DashboardList'
import Header from '@/components/Header'

export default{
  name: 'Layout',
  components: {
    DashboardList,
    Header
  },
}
</script>

<style>
</style>
