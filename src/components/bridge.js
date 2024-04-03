import axios from 'axios';

const bridge = {
  getCreatures: (key, val, page, count) => axios.get(`http://${process.env.SERVER_IP}:${process.env.PORT}/creatures`, {
    params: {
      key,
      val,
      page,
      count,
    },
  }),
  getEncounter: (prompt) => axios.post(`http://${process.env.SERVER_IP}:${process.env.PORT}/openai`, {
    prompt,
  }),
  getFluff: (key, val) => axios.get(`${process.env.SERVER_IP}:${process.env.PORT}/fluff?key=${key}&val=${val}`),
};

export default bridge;
