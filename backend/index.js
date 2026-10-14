import express from "express"
import ngrok from "@ngrok/ngrok"
import route from "./route/Route.js"
import sequelize from "./database/Sequelize.js"
import "dotenv/config"

const app = express()
app.use(express.json())

app.use(route)

async function forwardToApp() {
  const forwarder = await ngrok.forward({
    addr: "localhost:3000",
    authtoken_from_env: true,
  });
  return forwarder.url()
}

app.listen(3000,async() => {
  console.log("Server is running on port 3000")
  forwardToApp().then(res => console.log(res))
})