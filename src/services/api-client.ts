import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "42aa66d1aaed41ddbe73dfb5d9b4f90a",
  },
});
