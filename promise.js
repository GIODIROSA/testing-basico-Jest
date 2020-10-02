import axios from "axios";

// const url= "https://rickandmortyapi.com/api/";

export const getDataFromApi = (url) => {
  return axios.get(url).then(({ data }) => {
    return data;
  });
};
