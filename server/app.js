import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(cors())
app.get("/",(req,res) =>{
   res.json("All is working")
})

start()
async function start(){
   try {
      app.listen(PORT,() => {
         console.log(`Application has started on PORT http://localhost:${PORT}`)
      })
   } catch (error) {
      console.log(error)
   }
}