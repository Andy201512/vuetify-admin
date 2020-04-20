import axios from 'axios'

export function GetTable() {
  return axios.get('/getTable').then((res) => {return res.data.desserts})
}

export function CheckLogin() {
  return axios.get('/CheckLogin').then((res) => {return res.data.login})
}

export function Login(userForm) {
  return axios.post('/Login', {
                'username': userForm.username,
                'password': userForm.password
              })
              .then((res) => {return res.data.login})
}

export function Logout() {
  return axios.get('/Logout').then((res) => {return res.data.logout})
}
