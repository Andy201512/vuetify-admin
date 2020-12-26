<template>
  <v-app-bar app>

    <v-app-bar-nav-icon v-on:click="$emit('changeNavSwitch')"></v-app-bar-nav-icon>

    <v-toolbar-title>Vuetify Admin</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon>
          <v-icon v-on="on">mdi-account</v-icon>
        </v-btn>
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
