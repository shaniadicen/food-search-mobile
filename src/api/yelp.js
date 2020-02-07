import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer J41ot94e8EfT2hEBvoF5Dx5NKXX_tuze0B0Jo7V-rUVyU86N-ungpKm6x62bpuJIO3vF65remHCXN2NhCV2t54g_rdP8EmIn4Kl8XkODmXIpo2Bo6gy5y-_WFtA7XnYx'
  }
});
