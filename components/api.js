import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/forecast",
  /*`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={5ef9734d08145dde0c0fe889ea01b21d }`*/
});
