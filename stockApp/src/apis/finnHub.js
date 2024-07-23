import axios from "axios"

const TOKEN = "cqf3c0pr01qm14qbgj50cqf3c0pr01qm14qbgj5g"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})