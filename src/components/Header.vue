<template>
  <v-app-bar app>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item @click="logout">
          <v-list-item-title>logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { Logout } from '@/api/api.js'

export default{
  name: 'Header',
  methods:{
    logout() {
      Logout().then((data) =>{
        if(data === 'succeeded'){
          this.$router.push({ name: 'login' })
        }
      })
    }
  }
}
</script>

<style>
</style>
