import axios from 'axios'

export function GetTable() {
  return axios.get('/getTable').then((res) => {return res.data.desserts})
}
