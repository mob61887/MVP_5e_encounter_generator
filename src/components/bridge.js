import axios from 'axios';

const bridge = {
  getCreatures: (searchKey, searchValue) => axios.get(`${process.env.SERVER_IP}:${process.env.PORT}/creatures?key=${searchKey}&val=${searchValue}`),
};

export default bridge;