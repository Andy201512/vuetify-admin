<template>
  <v-app>
    <div id="login-form">
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-form 
          v-model="valid"
          ref="form"
        >
          <v-container>
            <v-row>
              <v-col
                offset="1"
              >
                <v-text-field
                  label="用户名"
                  type="text"
                  v-model="userForm.username"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                offset="1"
              >
                <v-text-field
                  label="密码"
                  type="password"
                  v-model="userForm.password"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                offset="4"
              >
                <v-btn
                  @click="login"
                >
                  登入
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
      >
        {{ snackbarText }}
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import { Login } from '@/api/api.js'

export default{
  name: 'Login',
  data() {
    return{
      valid: false,
      userForm: {
        username: '',
        password: '',
      },
      rules: {
        required: value => !!value || 'required',
      },
      snackbar: false,
      snackbarText: '',
    }
  },
  methods:{
    login(){
      if(this.$refs.form.validate()){
        Login( this.userForm ).then((data) => {
          if(data === true){
            this.snackbarText = '登录成功'
            this.snackbar = true
            this.$router.push({ name: 'dashboard' })
          }else{
            this.snackbarText = '用户或密码错误'
            this.snackbar = true
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 360px){
  #login-form{
    position: relative;
    top: 100px;
  }
}
@media screen and (min-width: 900px){
  #login-form{
    position: relative;
    top: 160px;
  }
}
</style>
