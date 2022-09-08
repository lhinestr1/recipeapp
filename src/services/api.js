import axios from "axios";

let instance = axios.create({
  headers: {
    common: {
      // can be common or any other method
      "Content-Type": "application/json",
      //   "x-api-key": "a72db80256164b13986ce40fe008e0c7",
    },
  },
});
//instance.defaults.baseURL = process.env.REACT_APP_API_HOST;
// axios.defaults.headers.common = {
//   //apiKey: process.env.REACT_APP_SPOONACULAR_KEY || "unknown",
//   "Content-Type": "application/json",
// };

//axios.defaults.headers.common["apiKey"] =
//process.env.REACT_APP_SPOONACULAR_KEY || "unknown";

console.log(process.env.REACT_APP_SPOONACULAR_KEY || "unknown");

export default instance;
