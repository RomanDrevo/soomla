import axios from "axios"


export const fetchChartsApi = (params) => {

  const param = params.param;

  const country = params.country;

  return axios.get(`https://www.alphavantage.co/query?function=${param}&symbol=${country}&apikey=demo`)
};
