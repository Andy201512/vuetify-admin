<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import {GetTable} from '@/api/api.js'

export default{
  name: 'Table',
  data() {
    return {
      desserts: []
    }
  },
  mounted() {
    GetTable().then((data) =>{this.desserts = data})
  },
}
</script>

<style>
</style>
