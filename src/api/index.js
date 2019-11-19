import axios from "axios"


export const fetchChartsApi = () => {
  return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
}
