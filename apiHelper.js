import axios from 'axios';

const apiHelper = {
    fetchImages: (params) => {
      let { page, limit } = params;
      return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    },
    fetchImageDetails: (params) => {
      let { id } = params;
      return axios.get(`https://picsum.photos/id/${id}/info`)
    }
}

export default apiHelper
