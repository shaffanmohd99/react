import axios from "axios";

axios.interceptors.request.use(
  async (config) => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error)
  }
);

export const get = async (endpoint, body, options) => {
  try {
    const response = await axios.get(
      endpoint, 
      body,
      options
    );
    return { 
      data: response.data,
      status: response.status 
    };
  }
  catch (e) {
    console.log(e);
    throw e;
  }
}

export const post = async  (endpoint, body, options) => {
  try {
    const response = await axios.post(
      endpoint, 
      body,
      options
    );
    return response;
  }
  catch (e) {
    console.log(e);
    return e.response
  }
}
export const destroy = async  (endpoint, body, options) => {
  try {
    const response = await axios.delete(
      endpoint, 
      body,
      options
    );
    return response;
  }
  catch (e) {
    console.log(e);
    return e.response
  }
}

export const edit = async  (endpoint, body, options) => {
  try {
    const response = await axios.put(
      endpoint, 
      body,
      options
    );
    return response;
  }
  catch (e) {
    console.log(e);
    return e.response
  }
}