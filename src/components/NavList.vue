<template>
  <v-navigation-drawer app>
    <v-list dense nav>

      <v-list-item link href="#/dashboard">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>控制面板</v-list-item-title>
        </v-list-item-content>   
      </v-list-item>
      
      <v-list-group
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>数据展示</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link href="#/table">
          <v-list-item-title>表格</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#/carousels">
          <v-list-item-title>走马灯</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>数据输入</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item link href="#/form">
          <v-list-item-title>表单</v-list-item-title>
        </v-list-item>
      </v-list-group>
      
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default{
  name: 'NavList',
}
</script>

<style>
</style>
