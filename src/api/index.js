import axios from "axios"


export const fetchChartsApi = (param) => {

  console.log(param);

  return axios.get(`https://www.alphavantage.co/query?function=${param}&symbol=MSFT&apikey=demo`)
}
